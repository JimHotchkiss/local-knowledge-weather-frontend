import React, { useState, useEffect } from "react"
import Navbar from "./containers/Navbar"
import "./App.css"
const weatherApi =
  "http://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&appid=306f25024f88ed11a16b1a425db8997e"

function App() {
  const [weatherData, setWeatherData] = useState({})
  const handleFetchWeater = () => {
    fetch(weatherApi)
      .then((resp) => resp.json())
      .then((data) => console.log(data))
  }
  return (
    <>
      <Navbar
        weatherData={weatherData}
        handleFeatchWeater={handleFetchWeater}
      />
    </>
  )
}

export default App
