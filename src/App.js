import React, { useState, useEffect } from 'react';
import './App.css';
import { getWeatherForecast } from './services/weather';
import SearchBar from './Components/Search/Search';
import City from './Components/City/City';


function App() {
  const [weather, setWeather] = useState([])
  const [city, setCity] = useState(null)
  const [shown, setShown] = useState([])

  useEffect(() => {
    if (city && !shown.includes(city)) {
      getWeatherForecast(city).then(res => {
        if (res.cod !== '200') throw new Error()
        setWeather([...weather, res])
        }).then(() => {
        setShown([...shown, city])
        setCity(null)
      }
      ).catch(() => alert('Something went wrong'))
    }
  }, [city])
  console.log(weather)
  console.log(shown)
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
