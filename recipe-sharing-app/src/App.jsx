// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import RecipeList from './components/RecipeList'
// import AddRecipeForm from './components/AddRecipeForm'
// import RecipeDetails from './components/RecipeDetails'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css'

// function App() {
//   //const [count, setCount] = useState(0)

//   return (
//     <>
//       {/* <RecipeList/>
//       <AddRecipeForm/> */}
//       <AddRecipeForm/>

// <Router>
//     <Routes>
//       <Route path="/" element={<RecipeList />} />
//       <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
//       <Route path="/add-recipe" element={<AddRecipeForm />} />
//     </Routes>
//     </Router>
//     </>
//   )
// }

// export default App


// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import './App.css';

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
        <Route path="/add-recipe" element={<AddRecipeForm />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
