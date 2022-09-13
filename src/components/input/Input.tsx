import { Accessor, Component, ComponentProps, Show } from 'solid-js';

import styles from './Input.module.css';

interface InputProps extends Omit<ComponentProps<'input'>, 'class' | 'value'> {
  icon?: string;
  setValue: (value: string) => void;
  value: Accessor<string>;
  error: Accessor<string>;
}

const Input: Component<InputProps> = ({ error, value, icon, setValue, ...rest }: InputProps) => {
  // createEffect(() => console.log(`error ${error}`));
  return (
    <div class={styles.container} data-error={!!error()}>
      <Show when={icon}>
        <img src={icon} alt="" class={styles.icon} />
      </Show>
      <input
        type="text"
        value={value()}
        onInput={(e) => setValue(e.currentTarget.value)}
        class={styles.input}
        {...rest}
      />
    </div>
  );
};

export default Input;
