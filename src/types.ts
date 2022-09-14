export interface CalculatorField {
  value: string;
  error?: string;
}

export interface CalculatorStore {
  bill: CalculatorField;
  percentage: CalculatorField;
  nbOfPeople: CalculatorField;
  customPercentage: CalculatorField;
}

export type CalculatorStoreKey = keyof CalculatorStore;

export interface CalculatorResults {
  tipPerPerson: string;
  totalPerPerson: string;
}
