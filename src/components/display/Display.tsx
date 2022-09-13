import { Component } from 'solid-js';

import styles from './Display.module.css';

const FORMATTER = new Intl.NumberFormat('en-us', {
  minimumFractionDigits: 2,
});

interface DisplayProps {
  label: string;
  value: number;
}

const Display: Component<DisplayProps> = (props: DisplayProps) => {
  return (
    <div class={styles.container}>
      <div class={styles.label}>
        <span>{props.label}</span>
        <span>/ person</span>
      </div>
      <span class={styles.result}>${FORMATTER.format(props.value)}</span>
    </div>
  );
};

export default Display;
