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
    <div>
      <img src={recipe.image} alt="image of current recipe" />
      <h2>{recipe.title}</h2>
      <h5>{recipe.summary}</h5>
      <section>
        <p>
          <span>Ingredients</span>
          <span>{recipe.ingredients.map((ingredient, key=0 )=> <li key={key++}>{ingredient}</li>)}</span>
        </p>

        <p>
          <span>Instructions<br/></span>
          <span>{recipe.instructions.map((step, key=0 )=> <span key={key++}>{step}<br/></span>)}</span>
        </p>
      </section>
    </div>
  )

}

}