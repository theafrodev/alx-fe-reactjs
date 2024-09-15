import React from 'react';
import { useState, useEffect } from 'react';
import recipeList from '../data.json';
import { Link } from 'react-router-dom';
import AddRecipeForm from './AddRecipeForm';


function HomePage() {

  const [recipes, setRecipes] = useState(null);

  useEffect(()=>{
    setRecipes(recipeList);
  }, []);

  let recipeArray = []

  // console.log(recipes)

  if(!recipes){
    <div>Loading Recipes...</div>
  }else{
    recipes.map((recipe) => recipeArray.push(
      <Link to={`recipe/${recipe.id}`} key={recipe.id}>
        <div className='border rounded p-4 transition ease-in-out shadow-md hover:shadow-xl hover:scale-105 bg-slate-50'>
          <img className='w-full rounded' src={recipe.image}/>
          <div className='py-4'>
            <h3 className='font-bold pb-2 text-left text-xl text-red-500'>{recipe.title}</h3>
            <p className='text-left text-gray-900'>{recipe.summary}</p>
          </div>
        </div>
      </Link>
    ));
  }

  return (
    <>
      <Link to={'/add'}>
        <span className='bg-red-800 py-4 px-8 rounded-lg text-white font-bold mb-10 block w-fit shadow-xl'>Add New Recipe</span>
      </Link>
      <div className="container p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto">
        {recipes && recipeArray}
      </div>
    </>
  )
}

export default HomePage
