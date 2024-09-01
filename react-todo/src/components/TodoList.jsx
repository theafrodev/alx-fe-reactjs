// import React from 'react';

// const TodoList = ({ tasks, toggleTasks, deleteTasks }) => {
//   return (
//     <ul>
//       {tasks.map((task) => (
//         <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
//           <span onClick={() => toggleTasks(task.id)}>{task.text}</span>
//           <button onClick={() => deleteTasks(task.id)}>Delete</button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default TodoList;

import React from 'react';

const TodoList = ({ tasks, toggleTasks, deleteTasks }) => {
  return (
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
  );
};

export default TodoList;

