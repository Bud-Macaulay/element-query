import { parseFormula } from "./core/formulaParser.js";
import { enrichElements } from "./core/enrichElements.js";
import { parseQueryString } from "./core/queryParser.js";
import { evaluateQuery } from "./core/queryEngine.js";
import { tokenize } from "./core/queryParser.js";

const formulaInput = document.getElementById("formulaInput");
const queryInput = document.getElementById("queryInput");
const resultBox = document.getElementById("result");
const matchingResultsDiv = document.getElementById("matchingResults");
const tokensBox = document.getElementById("tokens");
const astDisplay = document.getElementById("astDisplay");

let exampleData = [];

async function loadExampleData() {
  try {
    const response = await fetch("../example_data_mc3d.json");
    exampleData = await response.json();
    console.log(exampleData);
    updateTable(); // render initially if inputs exist
  } catch (err) {
    console.error("Failed to load example data:", err);
  }
}

loadExampleData();

async function updateTable() {
  const queryStr = queryInput.value.trim();

  if (exampleData.length === 0) {
    matchingResultsDiv.textContent = "Loading data...";
    return;
  }

  let matches;

  if (!queryStr) {
    // No query — show all
    matches = exampleData;
  } else {
    let ast;
    try {
      ast = parseQueryString(queryStr);
    } catch (err) {
      matchingResultsDiv.textContent = "⚠️ Query parse error: " + err.message;
      return;
    }

    // Filter matching entries
    matches = exampleData.filter((entry) => {
      try {
        const parsed = parseFormula(entry.formula);
        const enriched = enrichElements(parsed);
        return evaluateQuery(enriched, ast);
      } catch {
        return false;
      }
    });
  }

  if (matches.length === 0) {
    matchingResultsDiv.textContent = "No matching entries.";
    return;
  }

  // Render results as a simple table
  const rows = matches
    .map((entry) => {
      return `
      <tr>
        <td>${entry.formula}</td>
        <td><pre style="white-space: pre-wrap; margin:0;">${JSON.stringify(
          entry,
          null,
          2
        )}</pre></td>
      </tr>`;
    })
    .join("");

  matchingResultsDiv.innerHTML = `
    <table border="1" cellpadding="5" cellspacing="0" style="width:100%; border-collapse: collapse;">
      <thead>
        <tr><th>Formula</th><th>Details</th></tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>
  `;
}

function updateTokens() {
  const queryStr = queryInput.value.trim();
  if (!queryStr) {
    tokensBox.textContent = "";
    return;
  }
  try {
    const tokens = tokenize(queryStr);
    tokensBox.textContent = JSON.stringify(tokens, null, 2);
  } catch (err) {
    tokensBox.textContent = `⚠️ Tokenizing error: ${err.message}`;
  }
}

function updateResult() {
  const formula = formulaInput.value.trim();
  const queryStr = queryInput.value.trim();

  // Update token view
  updateTokens();

  if (!formula && !queryStr) {
    resultBox.textContent = "";
    resultBox.style.color = "black";
    astDisplay.textContent = "";
    return;
  }

  // Always update table based on query
  updateTable();

  try {
    let ast;
    if (queryStr) {
      ast = parseQueryString(queryStr);
      astDisplay.textContent = JSON.stringify(ast, null, 2);
    } else {
      astDisplay.textContent = "";
    }

    if (!formula || !queryStr) {
      resultBox.textContent = "";
      resultBox.style.color = "black";
      return;
    }

    const parsed = parseFormula(formula);
    const enriched = enrichElements(parsed);
    const matches = evaluateQuery(enriched, ast);

    resultBox.textContent = matches ? "✅ Match" : "❌ No Match";
    resultBox.style.color = matches ? "green" : "red";
  } catch (err) {
    resultBox.textContent = "⚠️ Error: " + err.message;
    resultBox.style.color = "orange";
    astDisplay.textContent = "⚠️ Parse error: " + err.message;
  }
}

// Only one listener on queryInput
queryInput.removeEventListener("input", updateTokens);
formulaInput.addEventListener("input", updateResult);
queryInput.addEventListener("input", updateResult);
