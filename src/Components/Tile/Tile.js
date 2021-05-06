import React from 'react';
import './tile.css'
import moment from 'moment';
import ReactAnimatedWeather from 'react-animated-weather';

const Tile = ({ data }) => {

  const displayWeatherIcon = () => {
    switch(data.weather[0].main) {

      case 'Clouds':
        return 'CLOUDY'
      case 'Rain':
        return 'RAIN'
      case 'Drizzle':
        return 'RAIN'
      case 'Snow':
        return 'SNOW'
      case 'Thunderstorm':
        return 'Sleet'
      case 'Fog':
        return 'FOG'
      default:
        return 'CLEAR_DAY'
    }
  }

  return (
    <div className="tile">
      <div>{moment(data.dt_txt).format('dddd')}</div>
      <div>{moment(data.dt_txt).format('LT')}</div>
      <div>{data.weather[0].main}</div>
      <ReactAnimatedWeather
        icon={displayWeatherIcon()}
        color={'goldenrod'}
        size={20}
        animate={true}
      />
      <div>{Math.floor(data.main.temp - 273.15)} C</div>
    </div>
  )
}

export default Tile;