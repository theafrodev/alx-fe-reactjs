import './App.css'
import HomePage from './components/HomePage';
import Modal from './components/Modal';
import { CurrencyProvider } from './hooks/currencyContext';
import { useContext } from 'react';
import ModalProvider, { ModalContext } from './hooks/ModalContext';


function App() {

  return (
    <ModalProvider>
      <CurrencyProvider>
        <HomePage/>
      </CurrencyProvider>
    </ModalProvider>
  )
}

export default App
