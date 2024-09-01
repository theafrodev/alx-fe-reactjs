import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

const hardCodedTasks = [
  { id: 1, text: 'Item One', completed: true },
  { id: 2, text: 'Item Two', completed: false },
  { id: 3, text: 'Item Three', completed: false },
  { id: 4, text: 'Item Four', completed: false },
];

function App() {
  const [tasks, setTasks] = useState(hardCodedTasks);

  // Add
  const addTask = (text) => {
    const newTasks = {
      id: tasks.length + 1,
      text,
      completed: false,
    };
    setTasks([...tasks, newTasks]);
  };

  // Toggle todo state
  const toggleTasks = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete
  const deleteTasks = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm addTasks={addTask} />
      <TodoList tasks={tasks} toggleTasks={toggleTasks} deleteTasks={deleteTasks} />
    </div>
  );
}

export default App;
