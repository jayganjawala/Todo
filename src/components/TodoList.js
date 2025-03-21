// src/components/TodoList.js
import React, { useState } from 'react';
import { useTodos } from '../context/TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos, deleteTodo, toggleTodo } = useTodos();
  
  return (
    <div>
      <h2>To-Do List</h2>
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
