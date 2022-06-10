import React from 'react'
import style from "../../../styles/Team.module.css"
import Grid from "@mui/material/Grid"
import Image from "next/image"
import {developers} from "../../constants/constant"
const Team = () => {
  return (
    <div className={style.container}>
        <div className={style.heading}>
            <h3>Boost your startup by choosing Ninja Developers</h3>
            <p>Create custom landing pages with Shades that convert ore visitors than any website</p>
        </div>
        <div className={style.teamMembers}>
            <Grid container spacing={2}>
            {developers?.map(({id,name,handle,image}) => (
                <Grid item xs={6} md={4} key ={id}>
                    <Image src={image} alt="developer Images" width={300} height={400} className={style.developersProfiles} />
                    <div className={style.developersName}>
                        <h4>{name}</h4>
                        <p>{handle}</p>
                    </div>
                </Grid>
            ))}
                
            </Grid>
        </div>
    </div>
  )
}

export default Team