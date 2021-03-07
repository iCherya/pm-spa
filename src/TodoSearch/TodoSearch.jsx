import React, { useState } from 'react';

const TodoSearch = ({ handleSubmitSearchQuery }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    handleSubmitSearchQuery(searchQuery);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        type="text"
        placeholder="Search text in todos"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default TodoSearch;
