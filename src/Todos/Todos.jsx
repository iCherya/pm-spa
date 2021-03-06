import React from 'react';
import styles from './Todos.module.css';
import TodoAdd from '../TodoAdd/TodoAdd';
import TodoSearch from '../TodoSearch/TodoSearch';

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.createNewTodo = this.createNewTodo.bind(this);
  }

  componentDidMount() {
    //
  }

  createNewTodo(text) {
    console.log(this, 'Adding new todo with value:', text);
  }

  render() {
    const { createNewTodo } = this;

    return (
      <div>
        <h2>Todo List</h2>
        <div className={styles.top}>
          <select className={styles.select}>
            <option>User1</option>
            <option>User2</option>
          </select>
          <TodoAdd createNewTodo={createNewTodo} />
          <TodoSearch />
        </div>
        <div className={styles.content}>
          <ul>
            <li>Todo1</li>
            <li>Todo2</li>
            <li>Todo3</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Todos;
