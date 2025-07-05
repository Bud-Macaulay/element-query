export function parseFormula(formula) {
  const matches = formula.match(/([A-Z][a-z]?)(\d*)/g);
  const result = {};

  for (const token of matches) {
    const [, el, count] = token.match(/^([A-Z][a-z]?)(\d*)$/);
    result[el] = (result[el] || 0) + (count ? parseInt(count, 10) : 1);
  }

  return result;
}
