import React, { useEffect } from 'react';
//import {TemperatureContext} from '../temperature-context'
//import {TimeContext} from '../time-context'
import {WeatherContext} from '../weather-context'
import {TemperatureContext} from '../temperature-context'


function ThemedComponent(props) {
  const [weather, setWeather] = React.useContext(WeatherContext)
  const temp = React.useContext(TemperatureContext)

  console.log(props.currentWeather);
  console.log(weather);
  console.log(setWeather);

  useEffect(() => {
    setInterval(() => {
      setWeather(props.currentWeather.icon)
    }, 3000)
  },[])

  return (
    <div>
      <h1 style={{backgroundColor: weather.light1, color: temp.background}}>hello</h1>
      <p>something</p>
    </div>
  );
}


export default ThemedComponent;
