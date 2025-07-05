import PERIODIC_TABLE from "../data/periodic-table.js";

export function enrichElements(elementCounts) {
  return Object.entries(elementCounts).map(([el, count]) => {
    const info = PERIODIC_TABLE[el];
    if (!info) {
      throw new Error(`Element ${el} not found in periodic table.`);
    }

    return { symbol: el, count, ...info };
  });
}
