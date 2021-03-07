import React from 'react';
import logo from './logo.svg';
import styles from './Homepage.module.css';

const App = () => (
  <div className={styles.wrapper}>
    <header className={styles.content}>
      <img src={logo} className={styles.logo} alt="React logo" />
      <p className={styles.lin}>PM Academy HW13</p>
    </header>
  </div>
);

export default App;
