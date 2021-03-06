import React from 'react';
import styles from './TodoItem.module.css';

const TodoItem = ({ id, text, completed }) => (
  <li className={styles.wrapper}>
    <div>{id}</div>
    <div className={styles.text}>{text}</div>
    <button type="button">{completed}</button>
  </li>
);

export default TodoItem;
