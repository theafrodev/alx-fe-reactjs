import React from 'react';
import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const favorites = useRecipeStore(state => state.favorites);

  // Function to get recommendations (recipes before and after favorite recipes)
  const getRecommendations = () => {
    const recommendations = new Set(); // Use a set to prevent repetition of recipes

    favorites.forEach(favoriteId => {
      const favoriteIndex = recipes.findIndex(recipe => recipe.id === favoriteId);

      // Get the recipe before the favorite
      if (favoriteIndex > 0) {
        recommendations.add(recipes[favoriteIndex - 1]);
      }

      // Get the recipe after the favorite
      if (favoriteIndex < recipes.length - 1) {
        recommendations.add(recipes[favoriteIndex + 1]);
      }
    });

    return Array.from(recommendations); // Convert set to array for rendering
  };

  const recommendations = getRecommendations();

  return (
    <div>
      <h2>Recommendations</h2>
      {recommendations.length > 0 ? (
        recommendations.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recommendations available.</p>
      )}
    </div>
  );
};

export default RecommendationsList;
