import React from 'react'
import Image from "next/image"
import style from "../../../styles/About.module.css"
import Grid from "@mui/material/Grid"
import service1 from "../../assets/service1.png"
const About = () => {
  return (
    <div className={style.container}>
        <div className={style.heading}>
            <h2>Grow your startup with our Services</h2>
            <p>Build an incredible workplace and grow your buisness with all-in-one platform with amazing contents.</p>
        </div>
        <div className={style.services}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    <Image src={service1} alt="" width={50} height={50}></Image>
                    <div className={style.servicesData}>
                        <h3>Marketing & Advertising</h3>
                        <p>Get your info tests delivered at home collect a sample from the your progress tests.</p>
                    </div>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Image src={service1} alt="" width={50} height={50}></Image>
                    <div className={style.servicesData}>
                        <h3>Marketing & Advertising</h3>
                        <p>Get your info tests delivered at home collect a sample from the your progress tests.</p>
                    </div>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Image src={service1} alt="" width={50} height={50}></Image>
                    <div className={style.servicesData}>
                        <h3>Marketing & Advertising</h3>
                        <p>Get your info tests delivered at home collect a sample from the your progress tests.</p>
                    </div>
                </Grid>
            </Grid>
        </div>
    </div>
  )
}

export default About