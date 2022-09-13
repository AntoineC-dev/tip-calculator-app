import { Component, createMemo, createSignal, For } from 'solid-js';
import { Display, Header, Input, InputWrapper, RadioButton } from './components';
import calculator from './stores/calculator';

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
  const resetDisbaled = createMemo(() => !calculator.bill() && !calculator.percentage() && !calculator.nbOfPeople());
  const [custom, setCustom] = createSignal('', { equals: false });

  const onReset = () => {
    setCustom('');
    calculator.resetCalculator();
  };
  return (
    <>
      <Header />
      <main class={styles.calculator}>
        <div class={styles.keyboard}>
          <InputWrapper id="bill" label="Bill" error={calculator.billError}>
            <Input
              aria-labelledby="bill"
              icon={dollar}
              error={calculator.billError}
              setValue={calculator.setCalculator('bill')}
              value={calculator.bill}
              placeholder="0"
            />
          </InputWrapper>
          <InputWrapper label="Select Tip %" error={calculator.percentageError} type="normal">
            <div class={styles.keys}>
              <For each={radioButtons}>
                {(radio) => (
                  <RadioButton
                    {...radio}
                    name="percentage"
                    setValue={calculator.setCalculator('percentage')}
                    selected={calculator.percentage() === radio.value}
                  />
                )}
              </For>
              <label id="custom-percentage" class="sr-only">
                Custom percentage
              </label>
              <Input
                aria-labelledby="custom-percentage"
                error={calculator.percentageError}
                setValue={calculator.setCalculator('percentage')}
                value={custom}
                placeholder="Custom"
              />
            </div>
          </InputWrapper>
          <InputWrapper id="nb-of-people" label="Number of People" error={calculator.nbOfPeopleError}>
            <Input
              aria-labelledby="bill"
              icon={person}
              error={calculator.nbOfPeopleError}
              setValue={calculator.setCalculator('nbOfPeople')}
              value={calculator.nbOfPeople}
              placeholder="0"
            />
          </InputWrapper>
        </div>
        <div class={styles.display}>
          <div class={styles.results}>
            <Display label="Tip Amount" value={calculator.results().tipPerPerson} />
            <Display label="Total" value={calculator.results().total} />
          </div>
          <button aria-disabled={resetDisbaled()} class={styles.reset} onClick={onReset}>
            Reset <span class="sr-only">all the current values</span>
          </button>
        </div>
      </main>
    </>
  );
};

export default App;
