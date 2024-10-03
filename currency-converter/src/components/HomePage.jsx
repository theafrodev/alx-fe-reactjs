import React from 'react';
import AmountInput from './AmountInput';
import appLogo from '../assets/switch.svg'
function HomePage() {

/*  1.Import values for primary currency and primary amount
    2.Set a variable for dollar currency and dollar amount
    3.Get api data (rates array) from currency service 
    4.Convert primary amount to dollar (multiply the amount by the dollar rate equivalent)
    5.Convert the dollar amount to converted currency (multiply the new dollar amount by the rate of the converted currency)
*/  

  return(
    <div className='max-w-2xl'>
        <img className='m-auto w-3/4 max-w-[200px]' src={appLogo} alt="switch currency icon" />

        <h2 className='text-3xl md:text-6xl font-semibold pb-2 sm:pb-5 -mt-4 sm:-mt-2'>Quick And Easy<br/> Currency Conversions.</h2>
        <p className='pb-7 sm:pb-11'>
        Get accurate currency conversions at today’s rate. Accurate and completely free. Select your options below to start converting.
        </p>
        <div className='frost border rounded-xl border-border px-6 sm:px-8 pt-6 pb-10 sm:pt-10 sm:pb-12 flex flex-col gap-5'>
            <AmountInput />
        </div>
    </div>
  )
}



export default HomePage
