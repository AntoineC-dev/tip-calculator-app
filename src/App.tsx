import { Component, createEffect, createSignal, For } from 'solid-js';
import { Header, Input, InputWrapper, RadioButton } from './components';
import dollar from './assets/dollar.svg';

import styles from './App.module.css';

const radioButtons = [
  { id: 'five', label: '5%', value: '5' },
  { id: 'ten', label: '10%', value: '10' },
  { id: 'fifteen', label: '15%', value: '15' },
  { id: 'twenty-five', label: '25%', value: '25' },
  { id: 'fifty', label: '50%', value: '50' },
];

const App: Component = () => {
  const [bill, setBill] = createSignal<string>('');
  const [billError] = createSignal<string | undefined>('Wrong format');
  const [percentage, setPercentage] = createSignal<string>('5');
  const [percentageError] = createSignal<string | undefined>('Wrong format');
  const [customPercentage, setCustomPercentage] = createSignal<string>('');

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
              setValue={setBill}
              value={bill()}
              placeholder="0"
            />
          </InputWrapper>
          <InputWrapper label="Select Tip %" error={percentageError}>
            <div class={styles.keys}>
              <For each={radioButtons}>
                {(radio) => (
                  <RadioButton
                    {...radio}
                    name="percentage"
                    setValue={setPercentage}
                    selected={percentage() === radio.value}
                  />
                )}
              </For>
              <label id="custom-percentage" class="sr-only">
                Custom percentage
              </label>
              <Input
                aria-labelledby="custom-percentage"
                error={percentageError}
                setValue={setPercentage}
                value={customPercentage()}
                placeholder="Custom"
              />
            </div>
          </InputWrapper>
        </div>
      </main>
    </>
  );
};

export default App;
