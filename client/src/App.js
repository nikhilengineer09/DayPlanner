import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const API_URL = process.env.REACT_APP_API_URL;


function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch todos
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(API_URL);
        setTodos(response.data);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to fetch todos');
        setIsLoading(false);
        console.error('Error fetching todos:', err);
      }
    };

    fetchTodos();
  }, []);

  // Add todo
  const addTodo = async (text) => {
    try {
      const response = await axios.post(API_URL, { text });
      setTodos([response.data, ...todos]);
    } catch (err) {
      setError('Failed to add todo');
      console.error('Error adding todo:', err);
    }
  };

  // Toggle todo completion
  const toggleTodo = async (id) => {
    try {
      const todoToToggle = todos.find(todo => todo._id === id);
      const updatedTodo = {
        ...todoToToggle,
        completed: !todoToToggle.completed
      };
      
      await axios.put(`${API_URL}/${id}`, updatedTodo);
      
      setTodos(
        todos.map(todo => 
          todo._id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    } catch (err) {
      setError('Failed to update todo');
      console.error('Error updating todo:', err);
    }
  };

  // Delete todo
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (err) {
      setError('Failed to delete todo');
      console.error('Error deleting todo:', err);
    }
  };

  if (isLoading) {
    return <div className="container"><p>Loading...</p></div>;
  }

  return (
    <div className="container">
      <h1>Todo App</h1>
      {error && <p className="error">{error}</p>}
      <TodoForm addTodo={addTodo} />
      <TodoList 
        todos={todos} 
        toggleTodo={toggleTodo} 
        deleteTodo={deleteTodo} 
      />
    </div>
  );
}

export default App; 