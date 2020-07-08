import axios from 'axios';

const apiurl = 'https://covid19.mathdro.id/api';
const apiurlDaily = 'https://covid19.mathdro.id/api/daily';
const apiurlCountries = 'https://covid19.mathdro.id/api/countries';

export const fatchData = async (country) =>{
    let changeableUrl = apiurl;
    if(country)
    {
        changeableUrl = 'https://covid19.mathdro.id/api/countries/'+country;
    }

    try
    {
        const  { data : { confirmed , recovered, deaths, lastUpdate, }}  = await axios.get(changeableUrl);

        const modifiedData = { confirmed,recovered,deaths,lastUpdate,}

        return modifiedData;

    }
    catch(error)
    {
        console.log(error);
    }
}

export const fetchDailyData = async () =>{

    try
    {
        const  { data }  = await axios.get(apiurlDaily);

        const modifiedData = data.map((dailyData) => ({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate,
        }));

        return modifiedData;
    }
    catch(error)
    {
        console.log(error);
    }
}

export const fetchCountries = async () =>{

    try
    {
        const  {data : { countries }}  = await axios.get(apiurlCountries);

        //console.log( countries.map( (country)=>country.name ));

       return countries.map( (country)=>country.name );

    }
    catch(error)
    {
        console.log(error);
    }
}