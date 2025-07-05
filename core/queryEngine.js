import { PREDICATES, PREDICATE_KEYWORDS } from "./predicates.js";

/**
 * Evaluate a query AST node against enriched elements
 * @param {Array} enrichedElements - elements enriched with metadata & count
 * @param {Object} query - AST query node
 * @returns {boolean}
 */
export function evaluateQuery(enrichedElements, query, depth = 0) {
  const indent = "  ".repeat(depth); // for nice formatting

  switch (query.type) {
    case "AND": {
      const results = query.clauses.map((clause) =>
        evaluateQuery(enrichedElements, clause, depth + 1)
      );
      const result = results.every(Boolean);
      console.log(`${indent}[AND] => ${result}`);
      return result;
    }

    case "OR": {
      const results = query.clauses.map((clause) =>
        evaluateQuery(enrichedElements, clause, depth + 1)
      );
      const result = results.some(Boolean);
      console.log(`${indent}[OR] => ${result}`);
      return result;
    }

    case "NOT": {
      const result = !evaluateQuery(enrichedElements, query.clause, depth + 1);
      console.log(`${indent}[NOT] => ${result}`);
      return result;
    }

    case "IN_SET": {
      const matched = enrichedElements.filter(
        (el) => query.elements.includes(el.symbol) && el.count > 0
      );
      const result = matched.length > 0;
      console.log(
        `${indent}[IN_SET ${query.elements.join(
          ", "
        )}] => ${result} [matched: ${matched.map((e) => e.symbol).join(", ")}]`
      );
      return result;
    }

    case "IN_SET_BY_PREDICATE": {
      const pred = PREDICATES[query.predicateName];
      if (!pred) throw new Error(`Unknown predicate ${query.predicateName}`);
      const matched = enrichedElements.filter((el) => pred(el) && el.count > 0);
      const result = matched.length > 0;
      console.log(
        `${indent}[PREDICATE ${
          query.predicateName
        }] => ${result} [matched: ${matched.map((e) => e.symbol).join(", ")}]`
      );
      return result;
    }

    default:
      throw new Error(`Unknown query type: ${query.type}`);
  }
}

/**
 * Query constructor helpers
 */
export const Q = {
  inSet: (elements) => ({ type: "IN_SET", elements }),
  inSetByPredicate: (predicateName) => ({
    type: "IN_SET_BY_PREDICATE",
    predicateName,
  }),
  and: (...clauses) => ({ type: "AND", clauses }),
  or: (...clauses) => ({ type: "OR", clauses }),
  not: (clause) => ({ type: "NOT", clause }),
};
