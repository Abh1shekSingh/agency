import React from 'react'
import Image from "next/image"
import style from "../../../styles/Footer.module.css"
import arrow from "../../assets/arrow.svg"
import rightdoodle from "../../assets/rightDoodle.svg"
import {FaMagento} from "react-icons/fa"

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.hiredevelopers}>
          <h3>Hire the world&apos;s best developers and designers around !</h3>
          {/* <Image src={arrow} alt="arrowsvg" width={200}/> */}
          <button>HIRE DEVELOPERS</button>
      </div>
      <div className={style.copyrightSection}>
         <div className={style.footerlogo}>
            <FaMagento className={style.footerlogoIcon} />
            <h2>Ninja Developers</h2>
         </div>
         <div className={style.copyright}>
            <p>© 2022 All right reserved - Ninja Developers</p>
         </div>
         <div className={style.footerLinks}>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Team</li>
              <li>Hire</li>
            </ul>
         </div>
      </div>
    </div>
  )
}

export default Footer