import React from 'react';

class TodoAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.submitHandler = this.submitHandler.bind(this);
    this.changeTextHandler = this.changeTextHandler.bind(this);
  }

  changeTextHandler(event) {
    this.setState(() => {
      const { value } = event.target;

      return { value };
    });
  }

  submitHandler(event) {
    event.preventDefault();

    const { createNewTodo } = this.props;
    const { value } = this.state;

    createNewTodo(value);

    this.setState({ value: '' });
  }

  render() {
    const { value } = this.state;
    const { submitHandler, changeTextHandler } = this;

    return (
      <form onSubmit={submitHandler}>
        <input
          value={value}
          onChange={changeTextHandler}
          type="text"
          placeholder="Type new todo here"
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default TodoAdd;
