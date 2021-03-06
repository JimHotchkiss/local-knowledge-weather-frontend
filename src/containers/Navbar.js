import React from "react"
import NavbarIcon from "../components/NavbarIcon"
import SearchCity from "../containers/SearchCity"
import NavbarMenu from "../components/NavbarMenu"
import "./navbar.css"

function Navbar(props) {
  return (
    <div className='navbar'>
      <NavbarIcon />
      <SearchCity fetchWeather={props.fetchWeather} />
      <NavbarMenu />
    </div>
  )
}

export default Navbar
