import { parseFormula } from "../core/formulaParser.js";
import { enrichElements } from "../core/enrichElements.js";
import { parseQueryString } from "../core/queryParser.js";
import { evaluateQuery } from "../core/queryEngine.js";

export function runTest(formula, queryStr, expected) {
  try {
    const elementCounts = parseFormula(formula);
    const enriched = enrichElements(elementCounts);
    const ast = parseQueryString(queryStr);
    const result = evaluateQuery(enriched, ast);
    console.log(
      `Test: "${formula}" with "${queryStr}" => expected: ${expected}, got: ${result}`
    );
    if (result !== expected) {
      throw new Error(
        `Test failed for formula "${formula}" with query "${queryStr}"`
      );
    }
  } catch (err) {
    console.error(
      `Error in test for formula "${formula}" with query "${queryStr}":`,
      err.message
    );
    throw err;
  }
}

// New helper for tests expecting an error:
export function runTestExpectError(formula, queryStr) {
  try {
    const elementCounts = parseFormula(formula);
    const enriched = enrichElements(elementCounts);
    const ast = parseQueryString(queryStr);
    const result = evaluateQuery(enriched, ast);
    // If we get here, no error was thrown but we expected one
    console.error(
      `Test failed (expected error) for formula "${formula}" with query "${queryStr}": got result ${result}`
    );
  } catch (err) {
    console.log(
      `Expected error caught for formula "${formula}" with query "${queryStr}": ${err.message} ✅`
    );
  }
}
