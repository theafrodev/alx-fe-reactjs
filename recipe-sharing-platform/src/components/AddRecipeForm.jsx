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
      <form onSubmit={handleSubmit} className='container flex flex-col w-screen max-w-sm bg-slate-300 text-gray-900 text-left shadow-md rounded-xl shadow-red-200 p-8'>
        <h3 className='text-center font-bold text-3xl pb-6 text-red-800'>Add a new recipe</h3>
        <label>Recipe Name</label>
        <input 
            className='bg-transparent border border-gray-700 rounded-md p-2 mb-4'
            type="text" 
            name="" 
            id="" 
            value={title} 
            required 
            onChange={(e)=>setTitle(e.target.value)}/>
            {errors.title && <h6>{errors.title}</h6>}

        <label htmlFor="">Description</label>
        <textarea 
            className='bg-transparent border border-gray-700 rounded-md p-2 mb-4'
            name="" 
            id=""
            value={description} 
            required 
            onChange={(e)=>setDescription(e.target.value)} 
            ></textarea>
            {errors.description && <h6>{errors.description}</h6>}

        <label htmlFor="">Ingredients</label>
        <textarea 
            className='bg-transparent border border-gray-700 rounded-md p-2 mb-4'
            name="" 
            id=""
            value={ingredients} 
            required 
            onChange={(e)=>setIngredients(e.target.value)} ></textarea>
            {errors.ingredients && <h6>{errors.ingredients}</h6>}

        <label htmlFor="">Instructions</label>
        <textarea 
            className='bg-transparent border border-gray-700 rounded-md p-2 mb-4'
            name="" 
            id="" 
            value={steps} 
            required 
            onChange={(e)=>setSteps(e.target.value)} ></textarea>
            {errors.instructions && <h6>{errors.instructions}</h6>}

        <button className='bg-red-900 text-white font-bold rounded-md mt-2'>Add Recipe</button>
      </form>
    </div>
  )
}

export default AddRecipeForm
