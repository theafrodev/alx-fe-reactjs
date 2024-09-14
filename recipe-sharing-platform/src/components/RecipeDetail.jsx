import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import recipeList from '../data.json'

export default function RecipeDetail() {

  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);

  useEffect(()=>{
    setRecipe(recipeList[id-1]);
  }, []);

  //console.log(id);

  //const currentRecipe = recipeList[id-1];

  //console.log(recipeList[id-1]);

  //console.log(currentRecipe);

  // const ingredients = currentRecipe.ingredients.map((ingredient) => ingredient);

  // console.log(ingredients)

  if(!recipe){

    <div>Loading Recipe...</div>

  }else {

  return (
    <div className='container grid grid-cols-1 sm:grid-cols-2 gap-10 mx-auto'>
      <img className='w-full shadow-md rounded-xl shadow-red-200' src={recipe.image} alt="image of current recipe" />
      <div className='text-left'>
        <h2 className='font-bold text-5xl pb-8'>{recipe.title}</h2>
        <h5 className='pb-4 text-red-800 italic'>{recipe.summary}</h5>
        <section>
          <p className='py-4'>
            <span className='font-bold mb-2 block text-lg'>Ingredients</span>
            <span>{recipe.ingredients.map((ingredient, key=0 )=> <li key={key++}>{ingredient}</li>)}</span>
          </p>

          <p className='py-4'>
            <span className='font-bold mb-2 block text-lg'>Instructions<br/></span>
            <span>{recipe.instructions.map((step, key=0 )=> <span className='border-l-4 block border-l-red-300 mb-6 pl-4' key={key++}>{step}<br/></span>)}</span>
          </p>

          <p>Enjoy your {recipe.title}</p>
        </section>
      </div>
    </div>
  )

}

}