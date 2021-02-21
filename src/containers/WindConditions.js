import React from "react"
import "./windConditions.css"

function WindConditions({ weatherData }) {
  console.log(weatherData.wind)
  //   const windspeedMeters = weatherData.wind.speed * 2.23694
  const windspeedMiles = Math.floor(weatherData.wind.speed * 2.23694)
  //   const windGustMeters = weatherData.wind.gust * 2.23694
  const windGustMiles = Math.floor(weatherData.wind.gust * 2.23694)
  const windDirection = () => {
    let direction
    if (weatherData.wind.deg < 11) {
      direction = "North"
    } else if (weatherData.wind.deg > 12 && weatherData.wind.deg < 34) {
      direction = "North Northeast"
    } else if (weatherData.wind.deg > 34 && weatherData.wind.deg < 56) {
      direction = "Northeast"
    } else if (weatherData.wind.deg > 56 && weatherData.wind.deg < 79) {
      direction = "East Northeast"
    } else if (weatherData.wind.deg > 79 && weatherData.wind.deg < 101) {
      direction = "East"
    } else if (weatherData.wind.deg > 101 && weatherData.wind.deg < 124) {
      direction = "East Souththeast"
    } else if (weatherData.wind.deg > 124 && weatherData.wind.deg < 146) {
      direction = "Southeast"
    } else if (weatherData.wind.deg > 146 && weatherData.wind.deg < 169) {
      direction = "South Southeast"
    } else if (weatherData.wind.deg > 169 && weatherData.wind.deg < 191) {
      direction = "South"
    } else if (weatherData.wind.deg > 191 && weatherData.wind.deg < 214) {
      direction = "South Southwest"
    } else if (weatherData.wind.deg > 214 && weatherData.wind.deg < 236) {
      direction = "Southwest"
    } else if (weatherData.wind.deg > 236 && weatherData.wind.deg < 259) {
      direction = "West Southwest"
    } else if (weatherData.wind.deg > 259 && weatherData.wind.deg < 281) {
      direction = "West"
    } else if (weatherData.wind.deg > 281 && weatherData.wind.deg < 304) {
      direction = "West Northwest"
    } else if (weatherData.wind.deg > 304 && weatherData.wind.deg < 326) {
      direction = "Northwest"
    } else if (weatherData.wind.deg > 326 && weatherData.wind.deg < 349) {
      direction = "North Northwest"
    } else {
      direction = "North"
    }
    return direction
  }
  return (
    <div className='wind-conditions'>
      <div className='speed'>{`Wind: ${windspeedMiles} mph`}</div>
      <div className='speed'>{`Direction: ${windDirection()}`}</div>
      <div className='speed'>
        {isNaN(windGustMiles) ? "" : `Gusting: ${windGustMiles} mph`}
      </div>
    </div>
  )
}

export default WindConditions
