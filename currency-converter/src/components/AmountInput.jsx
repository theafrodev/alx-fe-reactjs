import React, { useContext, useEffect, useState } from 'react'
import CurrencySelector from './CurrencySelector'
import CurrencyContext from '../hooks/currencyContext'
import { fetchRates } from '../services/currencyService';


function AmountInput() {

  const currencies = useContext(CurrencyContext);
  const primaryCurrency = currencies.primaryCurrency;
  const primaryAmount = currencies.primaryAmount;
  const convertedCurrency = currencies.convertedCurrency;
  const convertedAmount = currencies.convertedAmount;
  //const setPrimaryCurrency = currencies.setPrimaryCurrency;
  const setPrimaryAmount = currencies.setPrimaryAmount;
  const setConvertedAmount = currencies.setConvertedAmount;

  //Convert to dollar and convert to selected currency
  async function calculate(){
    const data = await fetchRates();
    let dollarAmount = primaryAmount/data.conversion_rates[primaryCurrency];
    let converted = dollarAmount*data.conversion_rates[convertedCurrency];
    setConvertedAmount(converted);
  }

  function checkValues(){
    calculate();
  }

  useEffect(()=>{
    checkValues();
  });

  return (
    <>
        <div>
            <label className='block text-left m-0 pb-2' htmlFor="PrimaryAmount">From</label>
            <div className='bg-white rounded-lg p-1 pl-4 flex'>
              <input className='w-full text-sm bg-white text-black focus:outline-none' id="PrimaryAmount" onChange={e => setPrimaryAmount(e.target.value)} type="number" value={primaryAmount}/>
              <CurrencySelector type="primary"/>
            </div>
        </div>

        <div>
            <label className='block text-left m-0 pb-2' htmlFor="ConvertedAmount">To</label>
            <div className='bg-border rounded-lg p-1 pl-4 flex'>
              <input className='w-full text-sm bg-border text-white focus:outline-none' id="ConvertedAmount" type="number" value={convertedAmount} disabled/>
              <CurrencySelector/>
            </div>
        </div>
    </>
  )
}

export default AmountInput
