import React from "react"
import "./landingPage.css"
import ForcastCard from "../components/ForcastCard"
import VideoBackground from "../components/VideoBackground"

function LandingPage({ weatherData, cityName }) {
  const renderForcastCard = (
    <ForcastCard cityName={cityName} weatherData={weatherData} />
  )

  console.log(weatherData, weatherData.clouds)
  return (
    <header className='v-header container'>
      <VideoBackground weatherData={weatherData} />
      <div className='header-overlay'>
        {Object.entries(weatherData).length !== 0 ? renderForcastCard : null}
      </div>
    </header>
  )
}

export default LandingPage
