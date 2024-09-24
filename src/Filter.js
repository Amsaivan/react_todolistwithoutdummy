import React from 'react';

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="btn-group mt-3">
      <button
        onClick={() => setFilter('all')}
        className={`btn btn-outline-primary ${filter === 'all' ? 'active' : ''}`}
      >
        All
      </button>
      <button
        onClick={() => setFilter('completed')}
        className={`btn btn-outline-primary ${filter === 'completed' ? 'active' : ''}`}
      >
        Completed
      </button>
      <button
        onClick={() => setFilter('pending')}
        className={`btn btn-outline-primary ${filter === 'pending' ? 'active' : ''}`}
      >
        Pending
      </button>
    </div>
  );
};

export default Filter;
