import React, { useState } from 'react';

const TodoSearch = ({ handleSearchInputChanged }) => {
  const [value, setValue] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    handleSearchInputChanged(value);
  };

  return (
    <form onSubmit={(event) => submitHandler(event)}>
      <input
        onChange={(event) => setValue(event.target.value)}
        type="text"
        placeholder="Search text in todos"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default TodoSearch;
