import { Component, createMemo, For } from 'solid-js';
import { Display, Header, Input, InputWrapper, RadioButton } from './components';
import s, { resetValues, setValue } from './stores/calculator';

import dollar from './assets/dollar.svg';
import person from './assets/person.svg';

import styles from './App.module.css';
import { getTipValues } from './utils/math';

const radioButtons = [
  { id: 'five', label: '5%', value: '5' },
  { id: 'ten', label: '10%', value: '10' },
  { id: 'fifteen', label: '15%', value: '15' },
  { id: 'twenty-five', label: '25%', value: '25' },
  { id: 'fifty', label: '50%', value: '50' },
];

const App: Component = () => {
  const resetDisabled = createMemo(
    () => !s.bill.value && !s.percentage.value && !s.nbOfPeople.value && !s.customPercentage.value
  );

  const results = createMemo(() => getTipValues(s.bill.value, s.percentage.value, s.nbOfPeople.value));

  return (
    <>
      <Header />
      <main class={styles.calculator}>
        <div class={styles.keyboard}>
          <InputWrapper id="bill" label="Bill" error={s.bill.error}>
            <Input
              icon={dollar}
              error={s.bill.error}
              value={s.bill.value}
              setValue={setValue('bill')}
              placeholder="0"
              aria-labelledby="bill"
            />
          </InputWrapper>
          <InputWrapper label="Select Tip %" error={s.percentage.error} type="normal">
            <div class={styles.keys}>
              <For each={radioButtons}>
                {(radio) => (
                  <RadioButton
                    {...radio}
                    name="percentage"
                    setValue={setValue('percentage')}
                    selected={s.percentage.value === radio.value}
                  />
                )}
              </For>
              <label id="custom-percentage" class="sr-only">
                Custom percentage
              </label>
              <Input
                error={s.percentage.error}
                value={s.customPercentage.value}
                setValue={setValue('customPercentage')}
                placeholder="Custom"
                aria-labelledby="custom-percentage"
              />
            </div>
          </InputWrapper>
          <InputWrapper id="nb-of-people" label="Number of People" error={s.nbOfPeople.error}>
            <Input
              icon={person}
              error={s.nbOfPeople.error}
              value={s.nbOfPeople.value}
              setValue={setValue('nbOfPeople')}
              placeholder="0"
              aria-labelledby="nb-of-people"
            />
          </InputWrapper>
        </div>
        <div class={styles.display}>
          <div class={styles.results}>
            <Display label="Tip Amount" value={results().tipPerPerson} />
            <Display label="Total" value={results().total} />
          </div>
          <button aria-disabled={resetDisabled()} class={styles.reset} onClick={resetValues}>
            Reset <span class="sr-only">all the current values</span>
          </button>
        </div>
      </main>
    </>
  );
};

export default App;
