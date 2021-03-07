/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
import React from 'react';
import styles from './Todos.module.css';
import TodoAdd from '../TodoAdd/TodoAdd';
import TodoItem from '../TodoItem/TodoItem';
import TodoSearch from '../TodoSearch/TodoSearch';

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [], selected: '', userTodos: [] };

    this.handleSubmitNewTodo = this.handleSubmitNewTodo.bind(this);
    this.handleSubmitSearchQuery = this.handleSubmitSearchQuery.bind(this);
    this.handleSelectedUser = this.handleSelectedUser.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        const usersData = [...data].map(({ id, name }) => ({ id, name }));
        const selected = usersData[0].id;

        this.setState({ users: usersData, selected });

        return selected;
      })
      .then((id) => this.getUserTodosList(id));
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   const { userTodos } = this.state;
  //   if (nextState.userTodos.length < userTodos.length) return false;

  //   return true;
  // }

  handleSelectedUser(event) {
    const id = event.target.value;

    this.setState((previousState) => {
      const { users } = previousState;
      const user = users.find((el) => el.id === +id);

      return { selected: user.id };
    });

    this.getUserTodosList(id);
  }

  handleSubmitSearchQuery(text) {
    console.log('Search for todo with query', text);
  }

  handleSubmitNewTodo(text) {
    const { selected } = this.state;
    this.addUserTodoItem(selected, text);
  }

  getUserTodosList(userId) {
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => this.setState({ userTodos: data }));
  }

  addUserTodoItem(userId, title) {
    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify({ userId, title, completed: false }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' }
    })
      .then((response) => response.json())
      .then((newTodo) => {
        this.setState((previousState) => {
          const { userTodos } = previousState;

          return {
            userTodos: [newTodo, ...userTodos]
          };
        });
      });
  }

  render() {
    const {
      handleSubmitNewTodo,
      handleSubmitSearchQuery,
      handleSelectedUser
    } = this;
    const { users, selected, userTodos } = this.state;

    return (
      <div>
        <h2>Todo List</h2>

        <div className={styles.top}>
          <select
            className={styles.select}
            value={selected}
            onChange={handleSelectedUser}
          >
            {users.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>

          <TodoAdd handleSubmitNewTodo={handleSubmitNewTodo} />
          <TodoSearch handleSubmitSearchQuery={handleSubmitSearchQuery} />
        </div>

        <ul className={styles.content}>
          {userTodos.map(({ id, title, completed }) => (
            <TodoItem key={id} text={title} completed={completed} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Todos;
