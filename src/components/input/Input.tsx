import { Component, ComponentProps, Show, splitProps } from 'solid-js';

import styles from './Input.module.css';

interface InputProps extends Omit<ComponentProps<'input'>, 'class' | 'value'> {
  error?: string;
  icon?: string;
  value: string;
  setValue: (value: string) => void;
}

const Input: Component<InputProps> = (props: InputProps) => {
  const [local, rest] = splitProps(props, ['error', 'icon', 'setValue', 'value']);
  return (
    <div class={styles.container} data-error={!!local.error}>
      <Show when={local.icon}>
        <img src={local.icon} alt="" class={styles.icon} />
      </Show>
      <input
        type="text"
        value={local.value}
        onInput={(e) => local.setValue(e.currentTarget.value)}
        class={styles.input}
        {...rest}
      />
    </div>
  );
};

export default Input;
