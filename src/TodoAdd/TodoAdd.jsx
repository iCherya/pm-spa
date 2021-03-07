import React from 'react';

class TodoAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.inputRef = React.createRef();

    this.submitHandler = this.submitHandler.bind(this);
    this.inputChangedHandler = this.inputChangedHandler.bind(this);
  }

  inputChangedHandler(event) {
    this.setState(() => {
      const { value } = event.target;

      return { value };
    });
  }

  submitHandler(event) {
    event.preventDefault();

    this.inputRef.current.focus();
    this.setState({ value: '' });

    const { handleSubmitNewTodo } = this.props;
    const { value } = this.state;

    if (value === '') return;

    handleSubmitNewTodo(value);
  }

  render() {
    const { value } = this.state;
    const { submitHandler, inputChangedHandler } = this;

    return (
      <form onSubmit={submitHandler}>
        <input
          ref={this.inputRef}
          value={value}
          onChange={inputChangedHandler}
          type="text"
          placeholder="Type new todo here"
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default TodoAdd;
