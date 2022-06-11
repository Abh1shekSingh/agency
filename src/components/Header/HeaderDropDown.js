import React from 'react'
import style from "../../../styles/Header.module.css"
const HeaderDropDown = ({navbar, setNavbar}) => {
  return (
    
    <div className={navbar ? style.dropHeaderContainer : style.closedDropHeader}>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Hire</li>
            <li>Get Started</li>
        </ul>
    </div>
  )
}

export default HeaderDropDown