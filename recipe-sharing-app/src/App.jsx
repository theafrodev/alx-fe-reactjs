import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <RecipeList/>
      <AddRecipeForm/>
    </>
  )
}

export default App
