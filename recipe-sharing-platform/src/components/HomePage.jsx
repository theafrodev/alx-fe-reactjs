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
      <div className='border rounded p-4 transition ease-in-out shadow-md hover:shadow-xl hover:scale-105' key={recipe.id}>
        <img className='w-full rounded' src={recipe.image}/>
        <div className='py-4'>
          <h3 className='font-bold pb-2 text-left text-xl'>{recipe.title}</h3>
          <p className='text-left'>{recipe.summary}</p>
        </div>
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
