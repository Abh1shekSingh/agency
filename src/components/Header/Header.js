import React from 'react'
import style from "../../../styles/Header.module.css"
import {FaMagento} from "react-icons/fa"
import {GiHamburgerMenu} from "react-icons/gi"
const Header = () => {
  return (
    <div className={style.container}>
        <div className={style.logo}>
            <FaMagento className={style.logoIcon} />
            Ninja Agents
        </div>
        <div className={style.hamburger}>
            <p>Get Started</p>
            <GiHamburgerMenu className={style.hamIcon} />
        </div>
    </div>
  )
}

export default Header