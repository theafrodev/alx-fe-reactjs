import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import AddRecipeForm from './AddRecipeForm';
import SearchBar from './SearchBar';

const RecipeList = () => {
  // Fetch filtered recipes instead of all recipes
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

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


// RecipeList component
// import { useRecipeStore } from './recipeStore';

// const RecipeList = () => {
//   const recipes = useRecipeStore(state => state.recipes);

//   return (
//     <div>
//       <h1>Recipe List</h1>
//       {recipes.map(recipe => (
//         <div key={recipe.id}>
//           <h3>{recipe.title}</h3>
//           <p>{recipe.id}</p>
//           <p>{recipe.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default RecipeList;