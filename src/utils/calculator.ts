import type { CalculatorResults, CalculatorStore } from '../types';

const FORMATTER = new Intl.NumberFormat('en-us', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 3,
});

export const calculateResults = (store: CalculatorStore): CalculatorResults => {
  let tipPerPerson = 0,
    totalPerPerson = 0;

  const bill = +store.bill.value;
  const nbOfPeople = +store.nbOfPeople.value;
  const percentage = +store.customPercentage.value || +store.percentage.value;

  if (!!bill && !!nbOfPeople && !!percentage) {
    const totalTips = bill * (percentage / 100);
    tipPerPerson = totalTips / nbOfPeople;
    totalPerPerson = (bill + totalTips) / nbOfPeople;
  }

  return { tipPerPerson: FORMATTER.format(tipPerPerson), totalPerPerson: FORMATTER.format(totalPerPerson) };
};

export const checkResetDisabled = (store: CalculatorStore): boolean => {
  const bill = +store.bill.value;
  const nbOfPeople = +store.nbOfPeople.value;
  const percentage = +store.customPercentage.value || +store.percentage.value;
  return !bill && !nbOfPeople && !percentage;
};
