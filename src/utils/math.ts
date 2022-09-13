export const getTipValues = (
  bill: string,
  percentage: string,
  nbOfPeople: string
): { total: number; tipPerPerson: number } => {
  if (!+bill || !+percentage || !+nbOfPeople) return { total: 0, tipPerPerson: 0 };
  const total = +bill * (+percentage / 100);
  const tipPerPerson = total / +nbOfPeople;
  return { total, tipPerPerson };
};
