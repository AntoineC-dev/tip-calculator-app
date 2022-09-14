import { batch } from 'solid-js';
import { createStore } from 'solid-js/store';
import type { CalculatorStore, CalculatorStoreKey } from '../types';

const validateField = (value: string) => {
  if (!value) return undefined;
  if (value === '0') return "Can't be zero";
  if (!+value) return 'Wrong format';
  return undefined;
};

const [state, setState] = createStore<CalculatorStore>({
  bill: { value: '' },
  percentage: { value: '' },
  nbOfPeople: { value: '' },
  customPercentage: { value: '' },
});

export default state;

export const setValue = (key: CalculatorStoreKey) => (value: string) => {
  const error = validateField(value);
  batch(() => {
    if (key === 'customPercentage') {
      setState(key, 'value', value);
      setState('percentage', 'value', '');
      setState('percentage', 'error', error);
    } else if (key === 'percentage') {
      setState(key, 'value', value);
      setState(key, 'error', error);
      setState('customPercentage', 'value', '');
    } else {
      setState(key, 'value', value);
      setState(key, 'error', error);
    }
  });
};

export const resetValues = () =>
  (Object.keys(state) as CalculatorStoreKey[]).forEach((key) => {
    if (key === 'customPercentage') {
      setState(key, 'value', '');
    } else {
      setState(key, 'value', '');
      setState(key, 'error', '');
    }
  });
