import React,{useState} from 'react'
import Image from "next/image"
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Avatar from "@mui/material/Avatar"
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import style from "../../../styles/About.module.css"
import {trustedPartners} from "../../constants/constant"

const Trustedby = () => {
    const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
   
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
    <TabContext value={value}>
    
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className={style.box}>
        <TabList onChange={handleChange} aria-label="lab API tabs example" variant='scrollable' scrollButtons allowScrollButtonsMobile >
        {trustedPartners?.map(({id,image}) => (
            <Tab  icon= {<Image src={image} alt="logo"  />} value={id} key={id} className={style.tabsParent} />
        ))}
        </TabList>
      </Box>
    
      {trustedPartners?.map(({id,review,author}) => (
            <TabPanel value={id} key={id}>
                <h1 className={style.reviews}>{review}</h1>
                <p className={style.author}>{author}</p>
            </TabPanel>
      ))}
    
    </TabContext>

  </Box>
  )
}

export default Trustedby