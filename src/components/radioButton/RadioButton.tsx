import { Component } from 'solid-js';

import styles from './RadioButton.module.css';

interface RadioButtonProps {
  id: string;
  name: string;
  label: string;
  value: string;
  selected: boolean;
  setValue: (value: string) => void;
}

const RadioButton: Component<RadioButtonProps> = (props: RadioButtonProps) => {
  return (
    <div classList={{ [styles.container]: true, [styles.selected]: props.selected }}>
      <label for={props.id} class={styles.label}>
        {props.label}
      </label>
      <input
        aria-current={props.selected}
        class={styles.radio}
        id={props.id}
        name={props.name}
        type="radio"
        value={props.value}
        onInput={(e) => props.setValue(e.currentTarget.value)}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            props.setValue(e.currentTarget.value);
          }
        }}
      />
    </div>
  );
};

export default RadioButton;
