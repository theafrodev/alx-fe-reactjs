import React from 'react'
import { useState } from 'react'

function AddRecipeForm() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        
        if (!title || title.trim() === '') {
            newErrors.title = 'Recipe name is required.';
        }

        if (!description || description.trim() === '') {
            newErrors.description = 'Description is required.';
        }

        if (!ingredients || ingredients.trim() === '') {
            newErrors.ingredients = 'Ingredients are required.';
        }

        if (!steps || steps.trim() === '') {
            newErrors.steps = 'Instructions are required.';
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = validateForm();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
          } else {

            setErrors({});

        const recipe = {
            title,
            summary: description,
            image: 'https://via.placeholder.com/150',
            ingredients: ingredients.split('\n'),
            instructions: steps.split('\n'),
        }

        console.log(recipe);

        setTitle('');
        setDescription('');
        setIngredients('');
        setSteps('');
        
        }
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
            {errors.title && <h6>{errors.title}</h6>}

        <label htmlFor="">Description</label>
        <textarea 
            name="" 
            id=""
            value={description} 
            required 
            onChange={(e)=>setDescription(e.target.value)} 
            ></textarea>
            {errors.description && <h6>{errors.description}</h6>}

        <label htmlFor="">Ingredients</label>
        <textarea 
            name="" 
            id=""
            value={ingredients} 
            required 
            onChange={(e)=>setIngredients(e.target.value)} ></textarea>
            {errors.ingredients && <h6>{errors.ingredients}</h6>}

        <label htmlFor="">Instructions</label>
        <textarea 
            name="" 
            id="" 
            value={steps} 
            required 
            onChange={(e)=>setSteps(e.target.value)} ></textarea>
            {errors.instructions && <h6>{errors.instructions}</h6>}

        <button>Add Recipe</button>
      </form>
    </div>
  )
}

export default AddRecipeForm
