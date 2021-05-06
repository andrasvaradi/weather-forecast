import React, { useState, useEffect } from 'react';
import './App.css';
import { getWeatherForecast } from './services/weather';
import SearchBar from './Components/Search';

function App() {
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState(null)

  useEffect(() => {
    if (city) {
      getWeatherForecast(city).then(res => setWeather(res)).then(
        setCity(null)
      )
    }
  }, [city])
  console.log(weather)
  return (
    <div className="App">
      <div className="app-container">
        <SearchBar setCity={setCity} />
      <div>{weather ? (
        <div>{weather.city.name}</div>
        ) : (null)}
        </div>
      </div>
    </div>
  );
}

export default App;
