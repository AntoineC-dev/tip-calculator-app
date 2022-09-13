import { Component, createEffect, createMemo } from 'solid-js';
import calculator from '../../stores/calculator';
import { getTipValues } from '../../utils/math';

export const FORMATTER = new Intl.NumberFormat('en-us', {
  minimumFractionDigits: 2,
});

const Display: Component = () => {
  const results = createMemo(() =>
    getTipValues(calculator.bill.value, calculator.percentage.value, calculator.nbOfPeople.value)
  );
  return (
    <div>
      <p>${FORMATTER.format(results().tipPerPerson || 0)}</p>
      <p>${FORMATTER.format(results().total || 0)}</p>
    </div>
  );
};

export default Display;
