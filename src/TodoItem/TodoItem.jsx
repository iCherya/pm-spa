import React from 'react';
import classNames from 'classnames';
import styles from './TodoItem.module.css';
import withTodoItem from '../enhancers/withTodoItem';

const TodoItem = ({ title, completed, handleTodoComplete }) => (
  <li className={styles.wrapper}>
    <p className={classNames(styles.text, completed && styles.completed)}>
      {title}
    </p>

    {!completed && (
      <button
        className={styles.button}
        onClick={handleTodoComplete}
        type="button"
      >
        x
      </button>
    )}
  </li>
);

export default withTodoItem(TodoItem);
