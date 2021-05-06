import React, { useState, useEffect } from 'react';
import './App.css';
import { getWeatherForecast } from './services/weather';
import SearchBar from './Components/Search/Search';
import City from './Components/City/City';


function App() {
  const [weather, setWeather] = useState([])
  const [city, setCity] = useState(null)

  useEffect(() => {
    if (city) {
      getWeatherForecast(city).then(res => setWeather([...weather, res])).then(
        setCity(null)
      )
    }
  }, [city])
  console.log(weather)
  return (
    <div className="App">
      <div className="app-container">
        <SearchBar setCity={setCity} />
        <div className="city-list">

          {weather.length ? (
            weather.map(el => {
              return <City key={el.city.id} data={el} />
            })
          ) : (
            <h1>Search for a city using the searchbar above</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
