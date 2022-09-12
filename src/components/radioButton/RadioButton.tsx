import { Component, Setter } from 'solid-js';

import styles from './RadioButton.module.css';

interface RadioButtonProps {
  id: string;
  name: string;
  label: string;
  value: string;
  selected: boolean;
  setValue: Setter<string>;
}

const RadioButton: Component<RadioButtonProps> = (props: RadioButtonProps) => {
  return (
    <div data-selected={`${props.selected}`} class={styles.container}>
      <label for={props.id} class={styles.label}>
        {props.label}
      </label>
      <input
        aria-selected={props.selected}
        aria-disabled={props.selected}
        class={styles.radio}
        id={props.id}
        name={props.name}
        type="radio"
        value={props.value}
        onInput={(e) => props.setValue(e.currentTarget.value)}
      />
    </div>
  );
};

export default RadioButton;
