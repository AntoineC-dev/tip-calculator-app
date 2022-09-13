import { createStore, produce } from 'solid-js/store';

const validateField = (value: string) => {
  if (!value) return '';
  if (value === '0') return "Can't be zero";
  if (!parseInt(value)) return 'Wrong format';
  return '';
};

const [calculator, setCalculator] = createStore({
  bill: { value: '', error: '' },
  percentage: { value: '', error: '' },
  nbOfPeople: { value: '', error: '' },
});

export type CalculatorKey = keyof typeof calculator;

export default calculator;
export const setCalculatorValue = (key: keyof typeof calculator) => (value: string) => {
  setCalculator(
    produce((prev) => {
      prev[key].value = value;
      prev[key].error = validateField(value);
    })
  );
};
