import { Component, ComponentProps, Show } from 'solid-js';

import styles from './Input.module.css';

interface InputProps {
  error?: string;
  icon?: string;
  setValue: (value: string) => void;
  value: string;
  inputAttrs?: Omit<ComponentProps<'input'>, 'class' | 'value'>;
}

const Input: Component<InputProps> = (props: InputProps) => {
  return (
    <div class={styles.container} data-error={!!props.error}>
      <Show when={props.icon}>
        <img src={props.icon} alt="" class={styles.icon} />
      </Show>
      <input
        type="text"
        value={props.value}
        onInput={(e) => props.setValue(e.currentTarget.value)}
        class={styles.input}
        {...props.inputAttrs}
      />
    </div>
  );
};

export default Input;
