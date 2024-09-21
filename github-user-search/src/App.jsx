import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/'/>
        </Routes>
      </Router>
    </>
  )
}

export default App
