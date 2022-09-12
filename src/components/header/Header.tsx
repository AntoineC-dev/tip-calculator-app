import { Component } from 'solid-js';
import logo from '../../assets/logo.svg';

import styles from './Header.module.css';

const Header: Component = () => {
  return (
    <header class={styles.header}>
      <h1 class="sr-only">Splitter</h1>
      <img class={styles.logo} src={logo} alt="" />
    </header>
  );
};

export default Header;
