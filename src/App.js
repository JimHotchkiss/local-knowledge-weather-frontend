import React, { useState, useEffect } from "react"
import "./App.css"

function App() {
  const handleFetchWeater = () => {
    alert("sup")
  }
  return (
    <div className='App'>
      <p>Fetch latest weather data</p>
      <button onClick={handleFetchWeater}>Fetch Data</button>
    </div>
  )
}

export default App
