import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-inline mt-3">
      <div className="d-flex align-items-center">
  <input
    type="text"
    className="form-control mr-2"
    placeholder="Add a new task"
    value={text}
    onChange={(e) => setText(e.target.value)}
  />
  <button type="submit" className="btn btn-primary">Add</button>
</div>
    </form>
  );
};

export default AddTodo;
