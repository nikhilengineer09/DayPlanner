import React from 'react';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  if (todos.length === 0) {
    return <p>No todos yet. Add one above!</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li 
          key={todo._id} 
          className={`todo-item ${todo.completed ? 'completed' : ''}`}
        >
          <input
            type="checkbox"
            className="todo-checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo._id)}
          />
          <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
            {todo.text}
          </span>
          <button 
            className="todo-delete"
            onClick={() => deleteTodo(todo._id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList; 