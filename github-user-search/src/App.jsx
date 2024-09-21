import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import './index.css'
import HomePage from './components/HomePage';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
