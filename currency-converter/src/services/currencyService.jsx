const CURRENCY_API_KEY = import.meta.env.VITE_CURRENCY_API_KEY;

export const fetchRates = async ()=>{

    console.log('loading');

    let data;

    //TODO check the next refresh date on data, if it is in the past, pull from api, then implement save to database

    if(localStorage.getItem("apiResponse")){
        console.log("exists");
        data = JSON.parse(localStorage.getItem("apiResponse"));
    }else{
        const fetchData = await fetch(`https://v6.exchangerate-api.com/v6/${CURRENCY_API_KEY}/latest/USD`).then(res => res.json());
        localStorage.setItem("apiResponse", JSON.stringify(fetchData));
        data = JSON.parse(localStorage.getItem("apiResponse"));
    }

    // console.log(fetchData);
    //console.log(data);

    return data;

}


