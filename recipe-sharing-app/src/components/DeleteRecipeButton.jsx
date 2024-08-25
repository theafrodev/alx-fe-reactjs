import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
      deleteRecipe(recipeId);
      // Redirect to the recipe list or another page after deletion
      navigate('/');
  };

  return (
    <button onClick={handleDelete} style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '10px', cursor: 'pointer' }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;