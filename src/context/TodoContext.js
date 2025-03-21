// src/context/TodoContext.js
import React, { createContext, useState, useContext } from 'react';

// Create Context
const TodoContext = createContext();

// Create Provider Component
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  };

  const toggleTodo = (todoId) => {
    setTodos(
      todos.map(todo => 
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

// Custom hook to use the context
export const useTodos = () => {
  return useContext(TodoContext);
};
