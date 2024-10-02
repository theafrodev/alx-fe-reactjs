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
  const setPrimaryCurrency = currencies.setPrimaryCurrency;
  const setPrimaryAmount = currencies.setPrimaryAmount;
  const setConvertedAmount = currencies.setConvertedAmount;

  async function calculate(){
    const data = await fetchRates();
    //console.log(data.conversion_rates);
    console.log(primaryCurrency+primaryAmount);
    let dollarAmount = primaryAmount/data.conversion_rates[primaryCurrency];
    console.log(dollarAmount+"USD");
    let converted = dollarAmount*data.conversion_rates[convertedCurrency];
    setConvertedAmount[converted];//doesn't work
    console.log(convertedCurrency+converted);
    console.log(convertedAmount);
    //console.log("DollarValue="+dollarRate/primaryAmount);
    //console.log(dollarValue*data.conversion_rates[convertedCurrency]);
  }

  function checkValues(){
    calculate();
  }

  useEffect(()=>{
    checkValues();
  });

  // return (
  //   <input type="text" value={inputValue} onChange={handleInputChange} />
  // );


  return (
    <>
        <div>
            {/* <label htmlFor="amount">From</label> */}
            <input id="PrimaryAmount" onChange={e => setPrimaryAmount(e.target.value)} type="number" value={primaryAmount}/>
            <CurrencySelector type="primary"/>
        </div>

        <div>
            {/* <label htmlFor="amount">To</label> */}
            <input id="ConvertedAmount" type="number" value={convertedAmount} disabled/>
            <CurrencySelector/>
        </div>
    </>
  )
}

export default AmountInput
