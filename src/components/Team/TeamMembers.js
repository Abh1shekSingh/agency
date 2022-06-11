import React from 'react'
import Image from "next/image"
import Grid from "@mui/material/Grid"
import style from "../../../styles/Team.module.css"
import {developers} from "../../constants/constant"
const TeamMembers = () => {
  return (
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
  )
}

export default TeamMembers