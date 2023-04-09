import React from 'react'
import Layout from '../components/Layouts/Layout'
import { Box, Card, CardActionArea, CardAction, CardMedia, CardContent, Typography } from '@mui/material'
import { MenuList } from '../data/data'


function Menu() {
  return (
   <Layout>

<Box sx={{display:"flex", flexWrap:"wrap",justifyContent:"center" }}>
{

MenuList.map((menu)=>(
  <Card sx={{maxWidth:"390px",m:1}}>
    <CardActionArea>
<CardMedia sx={{minHeight:"400px",display:"flex"}} component={`img`} src={menu.image} alt="not found"/>


    </CardActionArea>
<CardContent>
<Typography variant='h5' gutterBottom component={"div"}>
  {
  menu.name
  }
</Typography>
<Typography variant='body2'  >
{
  menu.desc
}
</Typography>
</CardContent>

  </Card>
))

}

</Box>
   </Layout>
  )
}

export default Menu