import { Component, ComponentProps, Show, splitProps } from 'solid-js';

import styles from './Input.module.css';

interface InputProps extends Omit<ComponentProps<'input'>, 'class' | 'type'> {
  error?: string;
  icon?: string;
  dense?: boolean;
  setValue: (value: string) => void;
}

const Input: Component<InputProps> = (props: InputProps) => {
  const [local, rest] = splitProps(props, ['error', 'icon', 'setValue', 'dense']);
  return (
    <div classList={{ [styles.container]: true, [styles.error]: !!local.error, [styles.dense]: local.dense }}>
      <Show when={local.icon}>
        <img src={local.icon} alt="" class={styles.icon} />
      </Show>
      <input type="text" onInput={(e) => local.setValue(e.currentTarget.value)} class={styles.input} {...rest} />
    </div>
  );
};

export default Input;
