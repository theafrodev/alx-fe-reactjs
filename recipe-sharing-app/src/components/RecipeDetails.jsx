import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const numericRecipeId = parseInt(recipeId, 10); // Convert recipeId to a number

  // Fetch the recipe using the numericRecipeId
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === numericRecipeId)
  );

  // Debugging: log the recipeId and fetched recipe
  console.log('recipeId:', numericRecipeId);
  console.log('Fetched recipe:', recipe);

  if (!recipe) {
    return <div>Recipe not found???</div>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <EditRecipeForm recipeId={numericRecipeId} />
      <DeleteRecipeButton recipeId={numericRecipeId} />
    </div>
  );
};

export default RecipeDetails;

