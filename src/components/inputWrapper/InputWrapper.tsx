import { Accessor, Component, ComponentProps, Show } from 'solid-js';

import styles from './InputWrapper.module.css';

interface InputProps extends Pick<ComponentProps<'div'>, 'children' | 'id'> {
  label: string;
  type?: 'dense' | 'normal';
  error: Accessor<string>;
}

const Input: Component<InputProps> = ({ error, label, id, type = 'dense', ...props }: InputProps) => {
  return (
    <div data-type={type} class={styles.container}>
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
