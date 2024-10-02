import React from 'react';
import { useContext, useEffect } from 'react';
import CurrencyContext from '../hooks/currencyContext';
import AmountInput from './AmountInput';
function HomePage() {

/*  1.Import values for primary currency and primary amount
    2.Set a variable for dollar currency and dollar amount
    3.Get api data (rates array) from currency service 
    4.Convert primary amount to dollar (multiply the amount by the dollar rate equivalent)
    5.Convert the dollar amount to converted currency (multiply the new dollar amount by the rate of the converted currency)
*/

    

  return(
    <>
        <AmountInput />
    </>
  )
}



export default HomePage
