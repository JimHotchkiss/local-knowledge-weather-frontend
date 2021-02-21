import React, { useState } from "react"
import Navbar from "./containers/Navbar"
import LandingPage from "./containers/LandingPage"
import "./App.css"

const { REACT_APP_API_KEY } = process.env

function App() {
  const [weatherData, setWeatherData] = useState({})

  const renderLandingPage = (
    <LandingPage cityName={weatherData.name} weatherData={weatherData} />
  )

  const handleFetchWeather = (userInput) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${REACT_APP_API_KEY}`
    )
      .then((resp) => resp.json())
      .then((data) => setWeatherData(data))
  }
  return (
    <>
      <Navbar fetchWeather={handleFetchWeather} />
      {renderLandingPage}
    </>
  )
}

export default App
