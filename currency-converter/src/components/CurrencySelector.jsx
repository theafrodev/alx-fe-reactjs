import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import { fetchRates } from '../services/currencyService';
import CurrencyContext from '../hooks/currencyContext';
import { ModalContext } from '../hooks/ModalContext';

function CurrencySelector(props) {

    const [currency, setCurrency] = useState('USD');
    const [fxdata, setFxData] = useState();
    const currencies = useContext(CurrencyContext);
    const modal = useContext(ModalContext);
   

  return (
    <>
        {/* Conditional rendering for opened and closed overlay state */}
        { modal.open ? console.log('open')
            :
            <button onClick={() => {
                modal.toggleDialog()
                modal.setType(props.type)
                }} className='bg-black font-bold text-white py-4 px-8 text-xl rounded-md border'>

                {props.type === "primary" ? currencies.primaryCurrency : currencies.convertedCurrency}
            </button>
        }
    </>
  )
}

export default CurrencySelector
