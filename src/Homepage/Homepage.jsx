import React from 'react';
import logo from './logo.svg';
import styles from './Homepage.module.css';

function App() {
  return (
    <div className={styles.Homepage}>
      <header className={styles['Homepage-header']}>
        <img src={logo} className={styles['Homepage-logo']} alt="logo" />
        <a
          className={styles['Homepage-link']}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
