// src/components/AddTodo.js
import React, { useState } from 'react';
import { useTodos } from '../context/TodoContext';

const AddTodo = () => {
  const [todoText, setTodoText] = useState('');
  const { addTodo } = useTodos();

  const handleAdd = () => {
    if (todoText.trim()) {
      addTodo({
        id: Date.now(),
        text: todoText,
        completed: false,
      });
      setTodoText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAdd}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
