import { Component } from 'solid-js';

import styles from './Footer.module.css';

const Footer: Component = () => {
  return (
    <footer class={styles.footer}>
      Challenge by{' '}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      .{' '}
      <span>
        Coded by <a href="https://github.com/AntoineC-dev">Antoine C</a>
      </span>
      .
    </footer>
  );
};

export default Footer;
