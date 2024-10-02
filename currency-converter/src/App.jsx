import './App.css'
import HomePage from './components/HomePage';
import { CurrencyProvider } from './hooks/currencyContext';

function App() {

  return (
    <CurrencyProvider>
      <HomePage/>
    </CurrencyProvider>
  )
}

export default App
