import React from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center ${
        todo.completed ? 'list-group-item-success' : ''
      }`}
    >
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.text}
      </span>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
