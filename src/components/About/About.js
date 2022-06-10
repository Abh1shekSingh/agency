import React from 'react'
import Image from "next/image"
import style from "../../../styles/About.module.css"
import Grid from "@mui/material/Grid"
import service1 from "../../assets/service1.png"
import { serviceData } from '../../constants/constant'
const About = () => {
  return (
    <div className={style.container}>
        <div className={style.heading}>
            <h2>Grow your startup with our Services</h2>
            <p>Build an incredible workplace and grow your buisness with all-in-one platform with amazing contents.</p>
        </div>
        <div className={style.services}>
            <Grid className={style.gridContainer} container spacing={2}>
            {serviceData?.map(({id,title,subtitle,image}) => (
                <Grid item xs={12} md={3} key = {id} >
                    <Image src={image} alt="serive Logo" width={60} height={60}></Image>
                    <div className={style.serviceHeadings}>
                        <h3>{title}</h3>
                        <p>{subtitle}</p>
                    </div>
                </Grid>
            ))}
            </Grid>
        </div>
    </div>
  )
}

export default About