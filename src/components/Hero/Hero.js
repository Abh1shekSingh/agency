import React from 'react'
import Image from "next/image"
import style from "../../../styles/Hero.module.css"
import banner from "../../assets/banner1.png"
const Hero = () => {
  return (
    <div className={style.container}>
      <div className={style.headings}>
         <h1>Great Stuff is built with amazing developers</h1>
         <p>A service agency with customer satisfaction</p>
         <button>Get Started</button>
         <Image src={banner} alt=""></Image>
      </div>
    </div>
  )
}

export default Hero