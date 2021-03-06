import React from 'react';
import styles from './Todos.module.css';
import TodoAdd from '../TodoAdd/TodoAdd';
import TodoItem from '../TodoItem/TodoItem';
import TodoSearch from '../TodoSearch/TodoSearch';

// import mockedResponseUsers from './mockedResponseUsers';
import mockedResponseCards from './mockedResponseCards';

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.createNewTodo = this.createNewTodo.bind(this);
    this.handleSearchInputChanged = this.handleSearchInputChanged.bind(this);
  }

  componentDidMount() {
    //
  }

  handleSearchInputChanged(text) {
    console.log('text', text, this);
  }

  createNewTodo(text) {
    console.log(this, 'Adding new todo with value:', text);
  }

  render() {
    const { createNewTodo, handleSearchInputChanged } = this;

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
        <ul className={styles.content}>
          {mockedResponseCards.map(({ id, title, completed }) => (
            <TodoItem
              key={id}
              id={id}
              text={title}
              completed={completed}
              handleSearchInputChanged={handleSearchInputChanged}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Todos;
