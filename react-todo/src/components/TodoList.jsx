import React, { useState, useEffect } from 'react';

const TodoList = ({ tasks, toggleTasks, deleteTasks }) => {
  // Initialize state for the total number of tasks
  const [totalTasks, setTotalTasks] = useState(tasks.length);

  // Update totalTasks whenever tasks prop changes
  useEffect(() => {
    setTotalTasks(tasks.length);
  }, [tasks]);

  return (
    <div>
      <h2>Total Tasks: {totalTasks}</h2> {/* Display total number of tasks */}
      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <span 
              onClick={() => toggleTasks(task.id)}
              style={{ cursor: 'pointer' }}
            >
              {task.text}
            </span>
            <span style={{ marginLeft: '10px', color: task.completed ? 'green' : 'red' }}>
              {task.completed ? 'Closed' : 'Open'}
            </span>
            <button 
              onClick={() => deleteTasks(task.id)} 
              style={{ marginLeft: '10px' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;