import React from 'react';
import { useState, useEffect } from 'react';
import recipeList from '../data.json'


function HomePage() {

  const [recipes, setRecipes] = useState(null);

  useEffect(()=>{
    setRecipes(recipeList);
  }, []);

  let recipeArray = []

  console.log(recipes)

  if(!recipes){
    <div>Loading Recipes...</div>
  }else{
    recipes.map((recipe) => recipeArray.push(
      <div className='border' key={recipe.id}>
        <img className='w-full' src={recipe.image}/>
        <h3>{recipe.title}</h3>
        <p>{recipe.summary}</p>
      </div>
    ));
  }

  return (
    <div className="container grid md:grid-cols-4 gap-4 mx-auto">
      {recipes && recipeArray}
    </div>
  )
}

export default HomePage
