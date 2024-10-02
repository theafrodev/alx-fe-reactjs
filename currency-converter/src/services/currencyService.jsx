const CURRENCY_API_KEY = import.meta.env.VITE_CURRENCY_API_KEY;

export const fetchRates = async ()=>{

    console.log('loading');

    const fetchData = await fetch(`https://v6.exchangerate-api.com/v6/${CURRENCY_API_KEY}/latest/USD`).then(res => res.json());

    // console.log(fetchData);

    return fetchData;

}


