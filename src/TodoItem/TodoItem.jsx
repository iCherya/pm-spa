import React from 'react';
import classNames from 'classnames';
import styles from './TodoItem.module.css';

// import withTodoItem from '../enhancers/withTodoItem';

const TodoItem = (props) => {
  const { text, completed, handleTodoComplete } = props;
  console.log('rend');
  return (
    <li className={styles.wrapper}>
      <p className={classNames(styles.text, completed && styles.completed)}>
        {text}
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
};

export default TodoItem;
// export default withTodoItem(TodoItem);
