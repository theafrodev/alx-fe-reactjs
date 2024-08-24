import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import recipeList from './components/RecipeList'
import addRecipeForm from './components/AddRecipeForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <recipeList/>
      <addRecipeForm/>
    </>
  )
}

export default App
