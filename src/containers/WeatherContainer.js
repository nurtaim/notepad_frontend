import React from 'react';
import Weather from '../components/Weather'
import {WeatherContext} from '../weather-context'

function WeatherContainer(props) {

  const [weather, setWeather] = React.useContext(WeatherContext)

  return (
    <div>
      <Weather
        weather={props.weather}
        style={{text: weather.accent}}
      />
    </div>
  )
}

export default WeatherContainer
