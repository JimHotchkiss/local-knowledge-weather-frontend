import React, { useState } from "react"
import "./searchCity.css"

function SearchCity(props) {
  const [userInput, setUserInput] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    props.fetchWeather(userInput)
    setUserInput("")
  }

  const handleOnChange = (e) => {
    setUserInput(e.target.value)
  }
  return (
    <>
      <form className='search-form'>
        <button type='submit' onClick={handleSubmit}>
          Weather
        </button>
        <input
          type='text'
          value={userInput}
          onChange={handleOnChange}
          placeholder='Enter City Name'
        />
      </form>
    </>
  )
}

export default SearchCity
