import React from 'react';
import { useContext, useEffect } from 'react';
import CurrencyContext from '../hooks/currencyContext';
import AmountInput from './AmountInput';

function HomePage() {

//    const currencies = useContext(CurrencyContext);

//    useEffect(() => {
//      console.log(currencies);
//    }, [currencies]);

  return(
    <>
        <AmountInput />
    </>
  )
}



export default HomePage
