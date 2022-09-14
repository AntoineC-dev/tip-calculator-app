import { Component } from 'solid-js';

import styles from './Display.module.css';

interface DisplayProps {
  label: string;
  value: string;
}

const Display: Component<DisplayProps> = (props: DisplayProps) => {
  return (
    <div class={styles.container}>
      <div class={styles.label}>
        <span>{props.label}</span>
        <span>/ person</span>
      </div>
      <span class={styles.result}>${props.value}</span>
    </div>
  );
};

export default Display;
