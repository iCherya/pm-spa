import React from 'react';

const withTodoItem = (Component) => {
  class WithTodoItem extends React.Component {
    constructor(props) {
      super(props);

      const { completed } = this.props;
      this.state = { completed };

      this.handleTodoComplete = this.handleTodoComplete.bind(this);
    }

    handleTodoComplete() {
      const { id } = this.props;

      fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          completed: true
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
        .then((response) => response.json())
        .then(({ completed }) => this.setState({ completed }));
    }

    render() {
      const { title } = this.props;
      const { completed } = this.state;
      const { handleTodoComplete } = this;

      return (
        <Component
          handleTodoComplete={handleTodoComplete}
          title={title}
          completed={completed}
        />
      );
    }
  }

  return WithTodoItem;
};
export default withTodoItem;
