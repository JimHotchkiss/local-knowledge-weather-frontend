import "./forcastCard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, fas } from "@fortawesome/free-solid-svg-icons"
import { faSun } from "@fortawesome/free-solid-svg-icons"
import { faCloudSun } from "@fortawesome/free-solid-svg-icons"
import { faCloud } from "@fortawesome/free-solid-svg-icons"
import { faSnowflake } from "@fortawesome/free-solid-svg-icons"
import { faCloudShowersHeavy } from "@fortawesome/free-solid-svg-icons"
import WindConditions from "../containers/WindConditions"
import React from "react"

function ForcastCard({ cityName, weatherData }) {
  console.log(weatherData.sys.country)
  return (
    <div id='forcast-card' className='forcast-card'>
      <div className='city-icon-div'>
        <div className='fontawesome-div'>
          {weatherData.weather !== undefined &&
          weatherData.weather[0].main.toLowerCase().includes("rain") ? (
            <FontAwesomeIcon icon={faCloudShowersHeavy} size='3x' />
          ) : weatherData.weather !== undefined &&
            weatherData.weather[0].main.toLowerCase().includes("snow") ? (
            <FontAwesomeIcon icon={faSnowflake} size='3x' />
          ) : weatherData.clouds !== undefined &&
            weatherData.clouds.all > 50 ? (
            <FontAwesomeIcon icon={faCloud} size='3x' />
          ) : weatherData.clouds !== undefined &&
            weatherData.clouds.all < 50 ? (
            <FontAwesomeIcon icon={faSun} size='3x' />
          ) : (
            <FontAwesomeIcon icon={faSun} size='3x' />
          )}
        </div>
        <h1>
          {cityName !== undefined
            ? `${cityName}, ${weatherData.sys.country}`
            : "Weather"}
        </h1>
      </div>
      <div className='condition-text'>
        <p>
          {weatherData.weather !== undefined
            ? `Current conditions: ${weatherData.weather[0].description}`
            : "No current data"}
        </p>
        <WindConditions weatherData={weatherData} />
      </div>
    </div>
  )
}

export default ForcastCard
