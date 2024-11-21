import { useState, useEffect } from 'react';
import React from 'react';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const onChange = event => setTodo(event.target.value);
  const onSubmit = event => {
    event.preventDefault();
    if (todo === '') {
      return;
    }

    setTodos(curr => [todo, ...curr]);
    setTodo('');
  };
  console.log(todos);

  return (
    <div>
      <h1>My To Do List ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={todo}
          type="text"
          onChange={onChange}
          placeholder="hello"
        />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
