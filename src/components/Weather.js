import React from 'react';
import '../Weather.css'
import { useContext } from 'react'
import { weather, WeatherContext } from '../weather-context'

function Weather(props) {

  const [weather, setWeather] = useContext(WeatherContext)

  return (
    <div>
      <h1 
        style={{color: weather.text}}
        id="temp" >
        {props.weather.temp}
      </h1>
      <h3 
        style={{color: weather.accent}}
        id="summary">
        {props.weather.summary}
      </h3>

    </div>
  )
}

export default Weather
