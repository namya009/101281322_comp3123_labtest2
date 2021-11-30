
import getWeather from './Weather';
import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [query, setQuery] = useState('toronto');
    const [weather, setWeather] = useState({});
    
    const search = async (e) => {
        if(e.key === 'Enter') {
            const data = await getWeather(query);
            setWeather(data);
            //setQuery('');
        }
    }

    return (
        <div className="main-container">
            <input style = {{
              textAlign : 'center',
              fontWeight: 'bold',
              fontSize: 20,}}
              type="text"
              className="search"
              placeholder="Please enter a city name..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={search}
            />
            {weather.main && (
                <div className="city">
                    <h3 className="city-name">
                        <p>{weather.name}<sup>{weather.sys.country}</sup></p>
                    </h3>
                    <div className="maintemp">
                        {Math.round(weather.main.temp)}<sup>&deg;C</sup>
                    </div>
                    <div className = "minmax">
                      <p>Minimum : {weather.main.temp_min}<sup>&deg;C</sup></p>
                      <p>Maximum : {weather.main.temp_max}<sup>&deg;C</sup></p>
                      </div>
                    <div className="information">
                        <img className="icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p>{weather.weather[0].description}</p>
                        <p>Feels Like : {weather.main.feels_like}</p>
                        <p>Humidity : {weather.main.humidity}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;