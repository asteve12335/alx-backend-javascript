export default function getBudgetObject(income, gdp, capita) {
  const budget = new Map([
    ["income": income],
    ["gdp": gdp],
    ["capita": capita]
  ]);

  return budget;
}
