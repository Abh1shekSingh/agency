import React, { useState } from 'react'
import style from "../../../styles/Header.module.css"
import {FaMagento} from "react-icons/fa"
import {GiHamburgerMenu} from "react-icons/gi"
import HeaderDropDown from './HeaderDropDown'

const Header = () => {

  const [navbar, setNavbar] = useState(false);
  function handleToggle(){

      setNavbar(!navbar)
      
  }

  return (
    <div className={style.container}>
        <div className={style.logo}>
            <FaMagento className={style.logoIcon} />
            <p>Ninja Agents</p>
        </div>
        <div className={style.navlinks}>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>Team</li>
              <li>Hire</li>
            </ul>
        </div>
        <div className={style.hamburger}>
            <p>Get Started</p>
            <GiHamburgerMenu onClick={handleToggle} className={style.hamIcon} />
        </div>
        <HeaderDropDown navbar = {navbar} setNavbar = {setNavbar} />
    </div>
  )
}

export default Header