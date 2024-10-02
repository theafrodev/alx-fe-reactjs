import { createContext, useState } from "react";

//create currency context

// export const currencyContext = createContext({currencies: 'USD', setPrimaryCurrency: ()=>{}});
export const CurrencyContext = createContext();

export function CurrencyProvider({children}){
    
    const [primaryCurrency, setPrimaryCurrency] = useState('USD');
    const [convertedCurrency, setConvertedCurrency] = useState('GHS');

    //expose variables and methods (states)
    const value = {
        primaryCurrency,
        setPrimaryCurrency,
        convertedCurrency,
        setConvertedCurrency,
    };


    return(

        //enables other elements to be wrapped by the context provider
        <CurrencyContext.Provider value={value}>
            {children}
        </CurrencyContext.Provider>
    );

}

export default CurrencyContext;