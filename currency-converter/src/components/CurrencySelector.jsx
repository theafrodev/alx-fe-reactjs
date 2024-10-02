import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import { fetchRates } from '../services/currencyService';
import CurrencyContext from '../hooks/currencyContext';

function CurrencySelector(props) {

    const [currency, setCurrency] = useState('USD');
    const [open, setOpen] = useState(false);
    const [fxdata, setFxData] = useState();
    const currencies = useContext(CurrencyContext);
   
    
    useEffect(()=>{
       setRateData();
    },[]);

    async function setRateData(){
        //get data from currency service
       const data = await fetchRates();

       if(!data){
        console.log("Ooops something went wrong, Data Unavailable");
       } else if (data.result === "success"){
            //set conversion rates to fxdata state
            setFxData(data.conversion_rates);
            localStorage.setItem("rates", JSON.stringify(data.conversion_rates));
       } else{
         console.log("A request was sent but an unfavorable response was received")
       }
    }


    //overlay display
    function toggleDialog(){
        setOpen(!open);
    }

    function chooseCurrency(selectedCurrency){

        //check for type of currency (props) and assign it to the global variable (context)
        if(props.type === "primary"){
            currencies.primaryCurrency = selectedCurrency;
        } else{
            currencies.convertedCurrency = selectedCurrency;
        }

        console.log(currencies);

        //update the currency (local state) with the value of the global variable (context)
        setCurrency(selectedCurrency);
        setOpen(false);
    }

  return (
    <>
        {/* Conditional rendering for opened and closed overlay state */}
        { open ? 
            <div className='relative z-10' aria-labelledby='modal-title' role='dialog' aria-modal="true">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">

                            <button onClick={()=>setOpen(false)}>Close</button>

                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <h3>Select Currency</h3>

                                
                                {/* conditional rendering if rates have been loaded from currency service */}
                                {!fxdata ? 
                                    <p>API Information unavailable at this moment</p> 
                                    : 
                                    <>{Object.keys(fxdata).map((value)=>(<button key={value} onClick={() => chooseCurrency(value)}>{value}</button> ))}</>}
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            :
            <button onClick={toggleDialog} className='bg-white text-black px-4 py-2 rounded-md border'>
                {currency}
            </button>
        }
    </>
  )
}

export default CurrencySelector
