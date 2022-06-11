import React from 'react'
import Image from "next/image"
import style from "../../../styles/About.module.css"
import Grid from "@mui/material/Grid"
import { serviceData } from '../../constants/constant'
const Service = () => {
  return (
    <div className={style.services}>
            <Grid className={style.gridContainer} container spacing={2}>
            {serviceData?.map(({id,title,subtitle,image}) => (
                <Grid item xs={12} md={3} key = {id} >
                    <Image src={image} alt="services Logo" width={60} height={60}></Image>
                    <div className={style.serviceHeadings}>
                        <h3>{title}</h3>
                        <p>{subtitle}</p>
                    </div>
                </Grid>
            ))}
            </Grid>
        </div>
  )
}

export default Service