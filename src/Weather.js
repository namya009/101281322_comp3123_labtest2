import axios from "axios";

const API_Key = '47473887b5a44f5f52f468eaa2b80d9a';

const getWeather  = async (query) =>{
    const {data} = await axios.get('https://api.openweathermap.org/data/2.5/weather' , {
        params: {
            q:query,
            units:'metric',
            APPID: API_Key,
        }
    });
    return data;
}

export default getWeather;