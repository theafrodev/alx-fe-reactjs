import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const EditRecipeForm = () => {
    const navigate = useNavigate();
  const { recipeId } = useParams();
  const numericRecipeId = parseInt(recipeId, 10); // Convert recipeId to a number
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === numericRecipeId)
  );
  const updateRecipe = useRecipeStore(state => state.updateRecipe);

  // State to manage form inputs
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Initialize form with current recipe details
  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (recipe) {
      // Update the recipe with new details
      updateRecipe({ id: numericRecipeId, title, description });
      navigate('/');
    }
  };

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Recipe Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
