import { Component, createEffect, createMemo, createSignal, For } from 'solid-js';
import { Display, Header, Input, InputWrapper, RadioButton } from './components';
import calculator, { setCalculatorValue } from './stores/calculator';

import dollar from './assets/dollar.svg';
import person from './assets/person.svg';

import styles from './App.module.css';

const radioButtons = [
  { id: 'five', label: '5%', value: '5' },
  { id: 'ten', label: '10%', value: '10' },
  { id: 'fifteen', label: '15%', value: '15' },
  { id: 'twenty-five', label: '25%', value: '25' },
  { id: 'fifty', label: '50%', value: '50' },
];

const App: Component = () => {
  const billError = createMemo(() => calculator.bill.error);
  const percentageError = createMemo(() => calculator.percentage.error);
  const nbOfPeopleError = createMemo(() => calculator.nbOfPeople.error);
  return (
    <>
      <Header />
      <main class={styles.calculator}>
        <div class={styles.keyboard}>
          <InputWrapper id="bill" label="Bill" error={billError}>
            <Input
              aria-labelledby="bill"
              icon={dollar}
              error={billError}
              setValue={setCalculatorValue('bill')}
              value={calculator.bill.value}
              placeholder="0"
            />
          </InputWrapper>
          <InputWrapper label="Select Tip %" error={percentageError} type="normal">
            <div class={styles.keys}>
              <For each={radioButtons}>
                {(radio) => (
                  <RadioButton
                    {...radio}
                    name="percentage"
                    setValue={setCalculatorValue('percentage')}
                    selected={calculator.percentage.value === radio.value}
                  />
                )}
              </For>
              <label id="custom-percentage" class="sr-only">
                Custom percentage
              </label>
              <Input
                aria-labelledby="custom-percentage"
                error={percentageError}
                setValue={setCalculatorValue('percentage')}
                placeholder="Custom"
              />
            </div>
          </InputWrapper>
          <InputWrapper id="nb-of-people" label="Number of People" error={nbOfPeopleError}>
            <Input
              aria-labelledby="bill"
              icon={person}
              error={nbOfPeopleError}
              setValue={setCalculatorValue('nbOfPeople')}
              value={calculator.nbOfPeople.value}
              placeholder="0"
            />
          </InputWrapper>
        </div>
        <Display />
      </main>
    </>
  );
};

export default App;
