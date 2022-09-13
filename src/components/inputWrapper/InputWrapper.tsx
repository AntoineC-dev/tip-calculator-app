import { Component, Show, JSXElement } from 'solid-js';

import styles from './InputWrapper.module.css';

interface InputWrapperProps {
  label: string;
  type?: 'dense' | 'normal';
  error?: string;
  id?: string;
  children?: JSXElement;
}

const InputWrapper: Component<InputWrapperProps> = (props: InputWrapperProps) => {
  return (
    <div data-type={props.type ?? 'dense'} class={styles.container}>
      <div class={styles.inner}>
        <label id={props.id} class={styles.label}>
          {props.label}
        </label>
        <Show when={props.error}>
          <span class={styles.error}>{props.error}</span>
        </Show>
      </div>
      {props.children}
    </div>
  );
};

export default InputWrapper;
