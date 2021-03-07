import React from 'react';
import styles from './Todos.module.css';
import TodoAdd from '../TodoAdd/TodoAdd';
import TodoItem from '../TodoItem/TodoItem';
import TodoSearch from '../TodoSearch/TodoSearch';

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      selectedUser: '',
      userTodos: [],
      searchQuery: ''
    };

    this.handleSubmitNewTodo = this.handleSubmitNewTodo.bind(this);
    this.handleSubmitSearchQuery = this.handleSubmitSearchQuery.bind(this);
    this.handleSelectedUser = this.handleSelectedUser.bind(this);
    this.highlightSearchQuery = this.highlightSearchQuery.bind(this);
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
      .then((id) => this.getUserTodos(id));
  }

  handleSelectedUser(event) {
    const id = event.target.value;

    this.setState((previousState) => {
      const { users } = previousState;
      const user = users.find((el) => el.id === +id);

      return { selectedUser: user.id };
    });

    this.getUserTodos(id);
  }

  handleSubmitSearchQuery(text) {
    this.setState({ searchQuery: text });
  }

  handleSubmitNewTodo(text) {
    const { selected } = this.state;
    this.addUserTodoItem(selected, text);
  }

  getUserTodos(userId) {
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

  highlightSearchQuery(text) {
    const { searchQuery } = this.state;
    if (!searchQuery) return text;

    const split = text.toLowerCase().split(searchQuery.toLowerCase());

    let highlighted = '';

    for (let i = 0; i < split.length; i += 1) {
      if (i === split.length - 1) {
        highlighted += split[i];
      } else {
        highlighted += `${split[i]} <b>${searchQuery}</b>`;
      }
    }

    return highlighted;
  }

  render() {
    const {
      handleSubmitNewTodo,
      handleSubmitSearchQuery,
      handleSelectedUser,
      highlightSearchQuery
    } = this;
    const { users, selectedUser, userTodos } = this.state;

    return (
      <div className={styles.wrapper}>
        <h2>Todo List</h2>

        <div className={styles.top}>
          <select
            className={styles.select}
            value={selectedUser}
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
          {userTodos.map(({ id, title, completed }, idx) => (
            <TodoItem
              key={id}
              id={id}
              idx={idx + 1}
              title={title}
              completed={completed}
              highlightSearchQuery={highlightSearchQuery}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Todos;
