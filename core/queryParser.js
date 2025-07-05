import { Q } from "./queryEngine.js";
import { PREDICATES, PREDICATE_KEYWORDS } from "./predicates.js";

const LOGICAL_OPERATORS = new Set(["and", "or", "not"]);

export function tokenize(input) {
  // Build predicate keyword alternatives for regex (escape if needed)
  const predicateKeywords = Object.keys(PREDICATE_KEYWORDS)
    .map((k) => k.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")) // escape special chars
    .join("|");

  // Regex to match:
  //  - predicate keywords exactly (e.g. halogen, alkali)
  //  - logical operators and/or/not
  //  - parentheses
  //  - elements (1 or 2 letter capitalized)
  //  - fallback to words (to catch errors)
  const regex = new RegExp(
    `(${predicateKeywords}|and|or|not|\\(|\\)|[A-Z][a-z]?|\\w+)`,
    "gi"
  );

  const tokens = input
    .match(regex)
    .map((t) => t.trim())
    .filter(Boolean)
    .map((token) => {
      if (/^(and|or|not)$/i.test(token)) {
        return token.toLowerCase();
      }
      return token;
    });

  console.log("Tokens:", tokens);
  return tokens;
}

function parseAtomic(token) {
  if (/^[A-Z][a-z]?$/.test(token)) {
    return Q.inSet([token]);
  }

  if (PREDICATE_KEYWORDS[token.toLowerCase()]) {
    return Q.inSetByPredicate(PREDICATE_KEYWORDS[token.toLowerCase()]);
  }

  throw new Error(`Unknown token: ${token}`);
}

// Basic recursive descent parser (supports parentheses, and/or/not, left-associative)
export function parseQueryString(input) {
  const tokens = tokenize(input);

  let pos = 0;

  function peek() {
    return tokens[pos];
  }

  function consume(expected) {
    const t = tokens[pos];
    if (expected && t !== expected)
      throw new Error(`Expected '${expected}', got '${t}'`);
    pos++;
    return t;
  }

  function parsePrimary() {
    const token = peek();

    if (token === "not") {
      consume("not");
      return Q.not(parsePrimary());
    }

    if (token === "(") {
      consume("(");
      const expr = parseExpression();
      consume(")");
      return expr;
    }

    return parseAtomic(consume());
  }

  function parseAnd() {
    let left = parsePrimary();
    while (peek() === "and") {
      consume("and");
      let right = parsePrimary();
      left = Q.and(left, right);
    }
    return left;
  }

  function parseOr() {
    let left = parseAnd();
    while (peek() === "or") {
      consume("or");
      let right = parseAnd();
      left = Q.or(left, right);
    }
    return left;
  }

  function parseExpression() {
    return parseOr();
  }

  console.log("Parsing query string:", input);
  const ast = parseExpression();
  console.error("Parsed AST:", JSON.stringify(ast, null, 2));

  if (pos !== tokens.length) throw new Error(`Unexpected token: ${peek()}`);
  return ast;
}
