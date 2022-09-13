export const getTipValues = (
  strBill: string,
  strPercentage: string,
  strNbOfPeople: string
): { total: number; tipPerPerson: number } => {
  const bill = +strBill,
    percentage = +strPercentage,
    nbOfPeople = +strNbOfPeople;
  if (!bill || !percentage || !nbOfPeople) return { total: 0, tipPerPerson: 0 };
  const tipsTotal = bill * (percentage / 100);
  const tipPerPerson = tipsTotal / nbOfPeople;
  const total = (bill + tipsTotal) / nbOfPeople;
  return { total, tipPerPerson };
};
