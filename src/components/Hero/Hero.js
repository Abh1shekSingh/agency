import React from 'react'
import style from "../../../styles/Hero.module.css"
const Hero = () => {
  return (
    <div className={style.container}>
      <div className={style.headings}>
         <h1>Great Stuff is built with amazing developers</h1>
         <p>A service agency with customer satisfaction</p>
         <button>Get Started</button>
      </div>
    </div>
  )
}

export default Hero