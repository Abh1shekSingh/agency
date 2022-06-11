import React from 'react'
import Grid from "@mui/material/Grid"
import Image from "next/image"
import style from "../../../styles/About.module.css"

import google from "../../assets/trust1.png"
import paypal from "../../assets/trust2.png"
import uber from "../../assets/trust4.png"
import microsoft from "../../assets/trust3.png"

const Trustedby = () => {
  return (
    <div className={style.partners}>
            
            <Grid container spacing={3}>
                   
                <Grid item xs={3} md={3}>
                    <Image src={google} alt="googleLogo"  />
                </Grid>
                <Grid item xs={3} md={3}>
                    <Image src={uber} alt="googleLogo"  />
                </Grid>
                <Grid item xs={3} md={3}>
                    <Image src={paypal} alt="googleLogo" />
                </Grid>
                <Grid item xs={3} md={3}>
                    <Image src={microsoft} alt="googleLogo" />
                </Grid>
                   
            </Grid>
          
        </div>
  )
}

export default Trustedby