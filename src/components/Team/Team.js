import React from 'react'
import style from "../../../styles/Team.module.css"
import TeamMembers from './TeamMembers'
const Team = () => {
  return (
    <div className={style.container}>
        <div className={style.heading}>
            <h3>Boost your startup by choosing Ninja Developers</h3>
            <p>Create custom landing pages with Shades that convert ore visitors than any website</p>
        </div>
        <TeamMembers />
    </div>
  )
}

export default Team