import { Component, createMemo, For } from 'solid-js';
import { Display, Header, Input, InputWrapper, RadioButton } from './components';
import s, { resetValues, setValue } from './stores/calculator';
import { calculateResults, checkResetDisabled } from './utils/calculator';

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
  const resetDisabled = createMemo(() => checkResetDisabled(s));
  const results = createMemo(() => calculateResults(s));

  let firstInput: HTMLInputElement;

  const onReset = () => {
    resetValues();
    firstInput?.focus();
  };

  return (
    <>
      <Header />
      <main class={styles.calculator}>
        <div class={styles.keyboard}>
          <InputWrapper id="bill" label="Bill" error={s.bill.error}>
            <Input
              ref={firstInput!}
              icon={dollar}
              error={s.bill.error}
              value={s.bill.value}
              setValue={setValue('bill')}
              placeholder="0"
              aria-labelledby="bill"
            />
          </InputWrapper>
          <InputWrapper label="Select Tip %" error={s.percentage.error} loose={true}>
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
                dense={true}
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
            <Display label="Total" value={results().totalPerPerson} />
          </div>
          <button classList={{ [styles.reset]: true, [styles.disabled]: resetDisabled() }} onClick={onReset}>
            Reset <span class="sr-only">all the current values</span>
          </button>
        </div>
      </main>
    </>
  );
};

export default App;
