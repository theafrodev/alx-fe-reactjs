import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { ModalContext } from '../hooks/ModalContext';
import CurrencyContext from '../hooks/currencyContext';
import { fetchRates } from '../services/currencyService';

function Modal() {

    const [fxdata, setFxData] = useState();
    const currencies = useContext(CurrencyContext);
    const modal = useContext(ModalContext);


    async function setRateData(){

        //get data from currency service
       const data = await fetchRates();

       if(!data){
        console.log("Ooops something went wrong, Data Unavailable");
       } else if (data.result === "success"){
            //set conversion rates to fxdata state (local state)
            setFxData(data.conversion_rates);
       } else{
         console.log("A request was sent but an unfavorable response was received")
       }
    }


    function chooseCurrency(selectedCurrency){

        //check for type in modal context and assign it to primary or converted currency in the currency context
        if(modal.type === "primary"){
            currencies.setPrimaryCurrency(selectedCurrency);
        } else{
            currencies.setConvertedCurrency(selectedCurrency);
        }

        //close modal after selecting currency
        modal.toggleDialog();
    }


    useEffect(()=>{
       setRateData();
    },[]);
   

  return (
    <div className='fixed z-10 bg-red-500 inset-0 text-black' aria-labelledby='modal-title' role='dialog' aria-modal='true'>

                <div className='bg-gray-500 bg-opacity-75 transition-opacity' aria-hidden='true'></div>

                    <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
                        <div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>

                            <button onClick={()=>modal.setOpen(false)}>Close</button>

                            <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
                                
                                <h3>Select Currency</h3>
                                
                                {/* conditional rendering of available currencies if rates have been loaded from currency service */}

                                {!fxdata ? 
                                    <p>API Information unavailable at this moment</p> 
                                    : 
                                    <>{Object.keys(fxdata).map((value)=>(<button key={value} onClick={() => chooseCurrency(value)}>{value}</button> ))}</>}
                            </div>
                        </div>
                </div>
    </div> 
  )
}

export default Modal
