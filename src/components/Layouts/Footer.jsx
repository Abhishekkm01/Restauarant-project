import React from 'react'

import {Box, Typography} from '@mui/material'

import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
   <>
   <Box sx={{textAlign:'center',bgcolor:`#1A1A19`,color:'white',padding:'white'}}>
<Box sx={{my: 3,"& svg":{
    fontSixe:"60px",
    cursor:'pointer',
    mr:3,
    mt:2

}
,"& svg:hover":{
    color:"gold",transform:'translateX(5px)',
    transition:"all 400ms"

}
}}>
<InstagramIcon/>
<TwitterIcon/>
<YouTubeIcon/>
<GitHubIcon/>

</Box>

<Typography variant='h5' sx={{"@media max-width:600px)":{
    fontSize:'1rem'
}}} >

    All right Reseved &copy; Restau 
</Typography>


   </Box>
   
   </>
  )
}

export default Footer