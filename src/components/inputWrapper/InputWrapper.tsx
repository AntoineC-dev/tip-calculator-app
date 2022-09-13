import { Component, Show, JSXElement } from 'solid-js';

import styles from './InputWrapper.module.css';

interface InputWrapperProps {
  label: string;
  loose?: boolean;
  error?: string;
  id?: string;
  children?: JSXElement;
}

const InputWrapper: Component<InputWrapperProps> = (props: InputWrapperProps) => {
  return (
    <div classList={{ [styles.container]: true, [styles.loose]: props.loose }}>
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
