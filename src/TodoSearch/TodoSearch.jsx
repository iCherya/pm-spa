import React from 'react';

const TodoSearch = () => {
  console.log('TodoSearch rendered');

  return (
    <form>
      <input type="text" placeholder="Search text in todos" />
      <button type="submit">Search</button>
    </form>
  );
};

export default TodoSearch;
