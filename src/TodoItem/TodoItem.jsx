import React from 'react';
import classNames from 'classnames';
import styles from './TodoItem.module.css';
import withTodoItem from '../enhancers/withTodoItem';

const TodoItem = (props) => {
  const {
    idx,
    title,
    completed,
    handleTodoComplete,
    highlightSearchQuery
  } = props;

  return (
    <li className={styles.wrapper}>
      <div className={styles.idx}>{idx}</div>
      <p
        className={classNames(styles.text, completed && styles.completed)}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: highlightSearchQuery(title)
        }}
      />

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
};

export default withTodoItem(TodoItem);
