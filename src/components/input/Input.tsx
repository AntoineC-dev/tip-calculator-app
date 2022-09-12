import { Accessor, Component, ComponentProps, Setter, Show } from 'solid-js';

import styles from './Input.module.css';

interface InputProps extends Omit<ComponentProps<'input'>, 'class'> {
  icon?: string;
  setValue: Setter<string>;
  error: Accessor<string | undefined>;
}

const Input: Component<InputProps> = ({ error, icon, setValue, ...rest }: InputProps) => {
  return (
    <div class={styles.container} data-error={!!error()}>
      <Show when={icon}>
        <img src={icon} alt="" class={styles.icon} />
      </Show>
      <input type="text" onInput={(e) => setValue(e.currentTarget.value)} class={styles.input} {...rest} />
    </div>
  );
};

export default Input;
