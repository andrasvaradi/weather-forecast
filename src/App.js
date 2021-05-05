import React, { useState, useEffect } from 'react';
import './App.css';
import { getWeatherForecast } from './services/weather';

function App() {
  const [weather, setWeather] = useState(null)
  useEffect(() => {
    getWeatherForecast('London').then(res => setWeather(res))
  
    
  }, [])
  console.log(weather)
  return (
    <div className="App">
      <div>{weather ? weather.city.name : null}</div>
    </div>
  );
}

export default App;
