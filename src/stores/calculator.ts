import { createMemo } from 'solid-js';
import { createStore, produce } from 'solid-js/store';
import { getTipValues } from '../utils/math';

const validateField = (value: string) => {
  if (!value) return '';
  if (value === '0') return "Can't be zero";
  if (!parseInt(value)) return 'Wrong format';
  return '';
};

const INITIAL_STATE = {
  bill: { value: '', error: '' },
  percentage: { value: '', error: '' },
  nbOfPeople: { value: '', error: '' },
};

const [state, setState] = createStore(INITIAL_STATE);

const setCalculator = (key: keyof typeof state) => (value: string) =>
  setState(key, { value, error: validateField(value) });
const resetCalculator = () =>
  setState(
    produce((current) => {
      Object.values(current).forEach((field) => {
        field.value = '';
        field.error = '';
      });
    })
  );

const bill = createMemo(() => state.bill.value);
const billError = createMemo(() => state.bill.error);

const percentage = createMemo(() => state.percentage.value);
const percentageError = createMemo(() => state.percentage.error);

const nbOfPeople = createMemo(() => state.nbOfPeople.value);
const nbOfPeopleError = createMemo(() => state.nbOfPeople.error);

const results = createMemo(() => getTipValues(bill(), percentage(), nbOfPeople()));

export default {
  bill,
  billError,
  percentage,
  percentageError,
  nbOfPeople,
  nbOfPeopleError,
  setCalculator,
  resetCalculator,
  results,
};
