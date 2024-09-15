import React from 'react'
import { useState } from 'react'

function AddRecipeForm() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const recipe = {title, summary, image, ingredients, instructions}
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Recipe Name</label>
        <input 
            type="text" 
            name="" 
            id="" 
            value={title} 
            required 
            onChange={(e)=>setTitle(e.target.value)}/>

        <label htmlFor="">Description</label>
        <textarea 
            name="" 
            id=""
            value={description} 
            required 
            onChange={(e)=>setDescription(e.target.value)} 
            ></textarea>

        <label htmlFor="">Ingredients</label>
        <textarea 
            name="" 
            id=""
            value={ingredients} 
            required 
            onChange={(e)=>setIngredients(e.target.value)} ></textarea>

        <label htmlFor="">Instructions</label>
        <textarea 
            name="" 
            id="" 
            value={instructions} 
            required 
            onChange={(e)=>setInstructions(e.target.value)} ></textarea>

        <button>Add Recipe</button>
      </form>
    </div>
  )
}

export default AddRecipeForm
