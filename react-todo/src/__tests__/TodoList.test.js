// import React, { useState } from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import TodoList from '../components/TodoList';
// import '@testing-library/jest-dom';

// const TestComponent = ({ initialTasks }) => {
//   const [tasks, setTasks] = useState(initialTasks);

//   const toggleTasks = (id) => {
//     setTasks(tasks.map(task =>
//       task.id === id ? { ...task, completed: !task.completed } : task
//     ));
//   };

//   const deleteTasks = (id) => {
//     setTasks(tasks.filter(task => task.id !== id));
//   };

//   return <TodoList tasks={tasks} toggleTasks={toggleTasks} deleteTasks={deleteTasks} />;
// };

// const hardCodedTasks = [
//   { id: 1, text: 'Item One', completed: true },
//   { id: 2, text: 'Item Two', completed: false },
//   { id: 3, text: 'Item Three', completed: false },
//   { id: 4, text: 'Item Four', completed: false },
// ];

// describe('TodoList Component', () => {

//   test('renders the initial todo items', () => {
//   // Render the TodoList component with the initialTodos
//   render(<TodoList tasks={hardCodedTasks} toggleTasks={jest.fn()} deleteTasks={jest.fn()} />);
// });

  
//   test('deletes a todo item', () => {
//     render(<TestComponent initialTasks={hardCodedTasks} />);

//     // Verify all initial tasks are present
//     hardCodedTasks.forEach(task => {
//       expect(screen.getByText(task.text)).toBeInTheDocument();
//     });

//     // Simulate clicking the delete button for 'Item Two'
//     const deleteButton = screen.getAllByText('Delete')[1]; // Assuming 'Item Two' is the second item
//     fireEvent.click(deleteButton);

//     // Verify 'Item Two' is removed from the DOM
//     expect(screen.queryByText('Item Two')).toBeNull();

//     // Verify other items are still present
//     expect(screen.getByText('Item One')).toBeInTheDocument();
//     expect(screen.getByText('Item Three')).toBeInTheDocument();
//     expect(screen.getByText('Item Four')).toBeInTheDocument();
//   });
// });


// TodoList.test.js
import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';
import '@testing-library/jest-dom';

const TestComponent = ({ initialTasks }) => {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTasks = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTasks = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return <TodoList tasks={tasks} toggleTasks={toggleTasks} deleteTasks={deleteTasks} />;
};

const hardCodedTasks = [
  { id: 1, text: 'Item One', completed: true },
  { id: 2, text: 'Item Two', completed: false },
  { id: 3, text: 'Item Three', completed: false },
  { id: 4, text: 'Item Four', completed: false },
];

describe('TodoList Component', () => {

  test('renders the initial todo items', () => {
      render(<TodoList tasks={hardCodedTasks} toggleTasks={jest.fn()} deleteTasks={jest.fn()} />);
  });

  test('deletes a todo item', () => {
    render(<TestComponent initialTasks={hardCodedTasks} />);

    // Verify all initial tasks are present
    hardCodedTasks.forEach(task => {
      expect(screen.getByText(task.text)).toBeInTheDocument();
    });

    // Simulate clicking the delete button for 'Item Two'
    const deleteButton = screen.getAllByText('Delete')[1]; // Assuming 'Item Two' is the second item
    fireEvent.click(deleteButton);

    // Verify 'Item Two' is removed from the DOM
    expect(screen.queryByText('Item Two')).toBeNull();

    // Verify other items are still present
    expect(screen.getByText('Item One')).toBeInTheDocument();
    expect(screen.getByText('Item Three')).toBeInTheDocument();
    expect(screen.getByText('Item Four')).toBeInTheDocument();
  });

  test('toggles a todo item between completed and not completed', () => {
    render(<TestComponent initialTasks={hardCodedTasks} />);

    // Initial state check for 'Item One'
    expect(screen.getByText('Item One')).toBeInTheDocument();
    expect(screen.getByText('Closed')).toBeInTheDocument(); // Item One should be completed initially

    // Simulate click to toggle 'Item One'
    const itemOneSpan = screen.getByText('Item One');
    fireEvent.click(itemOneSpan);

    // Debug output
    console.log('After first click:');

    // Verify 'Item One' has been toggled to not completed
    expect(screen.queryByText('Closed')).not.toBeInTheDocument(); // 'Closed' should be removed
    //expect(screen.getByText('Open')).toBeInTheDocument(); // 'Open' should be present

    //Simulate click to toggle 'Item One' back to completed
    fireEvent.click(itemOneSpan);
    // Debug output
    console.log('After second click:');

    // // Verify 'Item One' has been toggled back to completed
    expect(screen.getByText('Closed')).toBeInTheDocument(); // 'Closed' should be present
    //expect(screen.queryByText('Open')).not.toBeInTheDocument(); // 'Open' should be removed
  });

});
