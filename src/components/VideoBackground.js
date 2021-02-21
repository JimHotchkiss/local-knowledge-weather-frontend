import React from "react"
import rain from "../videos/rain.mov"
import cloudy from "../videos/cloudy.mp4"
import sunny from "../videos/sunny.mp4"
import heavy_clouds from "../videos/heavy_clouds.mp4"
import snow from "../videos/snow.mp4"

function VideoBackground({ weatherData }) {
  console.log(weatherData)
  return (
    <div className='fullscreen-video-wrap'>
      <video
        muted
        autoPlay
        src={
          weatherData.weather !== undefined &&
          weatherData.weather[0].main.toLowerCase().includes("rain")
            ? rain
            : weatherData.weather !== undefined &&
              weatherData.weather[0].main.toLowerCase().includes("snow")
            ? snow
            : weatherData.clouds !== undefined && weatherData.clouds.all > 50
            ? cloudy
            : weatherData.clouds !== undefined && weatherData.clouds.all < 50
            ? sunny
            : sunny
        }
        loop></video>
    </div>
  )
}

export default VideoBackground
