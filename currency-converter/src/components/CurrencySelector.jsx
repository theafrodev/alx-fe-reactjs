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
       const data = await fetchRates();

       if(!data){
        console.log("Ooops something went wrong, Data Unavailable");
       } else if (data.result === "success"){
            setFxData(data.conversion_rates);
            localStorage.setItem("rates", JSON.stringify(data.conversion_rates));
       } else{
         console.log("A request was sent but an unfavorable response was received")
       }
    }


    function toggleDialog(){
        setOpen(!open);
    }

    function chooseCurrency(selectedCurrency){

        if(props.type === "primary"){
            currencies.primaryCurrency = selectedCurrency;
        } else{
            currencies.convertedCurrency = selectedCurrency;
        }

        console.log(currencies);
        setCurrency(selectedCurrency);
        setOpen(false);
    }

  return (
    <>
        { open ? 
            <div className='relative z-10' aria-labelledby='modal-title' role='dialog' aria-modal="true">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">

                            <button onClick={()=>setOpen(false)}>Close</button>

                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <h3>Select Currency</h3>

                                {/* <button onClick={() => chooseCurrency('EUR')}>EUR</button>
                                <button onClick={() => chooseCurrency('GHS')}>GHS</button>
                                <button onClick={() => chooseCurrency('USD')}>USD</button> */}

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
