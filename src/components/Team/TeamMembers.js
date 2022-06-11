import React from 'react'
import Image from "next/image"
import Grid from "@mui/material/Grid"
import style from "../../../styles/Team.module.css"
import {developers} from "../../constants/constant"
import { FaTwitter, FaGithub, FaDribbble } from 'react-icons/fa';

const TeamMembers = () => {
  return (
    <div className={style.teamMembers}>
            <Grid container spacing={2}>
            {developers?.map(({id,name,role,image,socialLinks}) => (

                <Grid item xs={6} md={4} key ={id}>
                    <Image src={image} alt="developer Images" width={300} height={400} className={style.developersProfiles} />
                    <div className={style.developersName}>
                        <h4>{name}</h4>
                        <p>{role}</p>
                    </div>
                    <div className={style.socialHandle}>
                        {socialLinks.map(({name,link}) => (
                            <a href={link} key={id} >
                                {name === 'twitter' && (
                                    <FaTwitter color="#55ACEE" />
                                )}
                                {name === 'github' && (
                                    <FaGithub color="#161614"/>
                                )}
                                {name === 'dribbble' && (
                                    <FaDribbble  color="#B2215A" style={{ backgroundColor: '#E74D89', borderRadius: 20 }} />
                                )}
                            </a>
                        ))}
                    </div>
                </Grid>
            ))}
                
            </Grid>
        </div>
  )
}

export default TeamMembers