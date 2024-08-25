// import { useState } from 'react';
//   import { useRecipeStore } from './recipeStore';

//   const AddRecipeForm = () => {
//     const addRecipe = useRecipeStore(state => state.addRecipe);
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');

//     const handleSubmit = (event) => {
//       event.preventDefault();
//       addRecipe({ id: Date.now(), title, description });
//       setTitle('');
//       setDescription('');
//     };

//     return (
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder="Title"
//         />
//         <textarea
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           placeholder="Description"
//         />
//         <button type="submit">Add Recipe</button>
//       </form>
//     );
//   };

//   export default AddRecipeForm

import React, { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore(state => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simple validation
    if (!title.trim() || !description.trim()) {
      setError('Title and description are required.');
      return;
    }

    // Clear any previous errors
    setError('');

    // Generate a unique ID for the new recipe
    const newRecipe = {
      id: Date.now(), // Consider using a more robust ID generation in a real application
      title,
      description
    };

    // Add the recipe to the store
    addRecipe(newRecipe);

    // Clear the form fields
    setTitle('');
    setDescription('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
        </div>
        <div>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
        </div>
        <button type="submit">Add Recipe</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default AddRecipeForm;