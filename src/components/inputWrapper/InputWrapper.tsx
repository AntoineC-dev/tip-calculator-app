import { Accessor, Component, ComponentProps, Show } from 'solid-js';

import styles from './InputWrapper.module.css';

interface InputProps extends Pick<ComponentProps<'div'>, 'children' | 'id'> {
  label: string;
  error: Accessor<string | undefined>;
}

const Input: Component<InputProps> = ({ error, label, id, ...props }: InputProps) => {
  return (
    <div class={styles.container}>
      <div class={styles.inner}>
        <label id={id} class={styles.label}>
          {label}
        </label>
        <Show when={error()}>
          <span class={styles.error}>{error()}</span>
        </Show>
      </div>
      {props.children}
    </div>
  );
};

export default Input;
