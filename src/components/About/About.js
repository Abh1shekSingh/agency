import React from 'react'
import style from "../../../styles/About.module.css"
import Service from './Service'
import Trustedby from './Trustedby'
const About = () => {
  return (
    <div className={style.container}>
        <div className={style.heading}>
            <h2>Grow your startup with our Services</h2>
            <p>Build an incredible workplace and grow your buisness with all-in-one platform with amazing contents.</p>
        </div>
        
        <Service />
        <Trustedby />
        
    </div>
  )
}

export default About