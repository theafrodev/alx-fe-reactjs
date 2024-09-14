import React from 'react'
import { useParams } from 'react-router-dom'
import recipeList from '../data.json'

export default function RecipeDetail() {

  const { id } = useParams();

  console.log(id);

  const currentRecipe = recipeList[id-1];

  //console.log(recipeList[id-1]);

  console.log(currentRecipe);

  // const ingredients = currentRecipe.ingredients.map((ingredient) => ingredient);

  // console.log(ingredients)

  return (
    <div>
      <img src={currentRecipe.image} alt="image of current recipe" />
      <h2>{currentRecipe.title}</h2>
      <h5>{currentRecipe.summary}</h5>
      <section>
        <p>
          <span>Ingredients</span>
          <span>{currentRecipe.ingredients.map((ingredient)=> <li>{ingredient}</li>)}</span>
        </p>
      </section>
    </div>
  )
}
