import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import AddRecipeForm from './AddRecipeForm';
import SearchBar from './SearchBar';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);
  const favorites = useRecipeStore(state => state.favorites);

  const isFavorite = (id) => favorites.includes(id);

  return (
    <div>
      <h1>Recipe List</h1>
      <SearchBar />
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map(recipe => (
          <div key={recipe.id}>
            <h3>
              <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
            <button
              onClick={() => 
                isFavorite(recipe.id) ? removeFavorite(recipe.id) : addFavorite(recipe.id)
              }
            >
              {isFavorite(recipe.id) ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
      <hr />
      <h3>Add New Recipe</h3>
      <AddRecipeForm />
    </div>
  );
};

export default RecipeList;
