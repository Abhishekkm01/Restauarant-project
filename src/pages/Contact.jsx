import React from 'react'
import Layout from '../components/Layouts/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
function Contact() {
  return (
    <Layout>
<Box sx={{my:5,ml:10,"& h4":{fontWeight:"bold",mb:2}}}>
<Typography variant='h4'>

Contact My Restaurant

</Typography>


  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem natus cupiditate eveniet a dicta inventore sunt dolores voluptatibus ipsum assumenda unde, accusamus non rerum incidunt, dolorum quasi minus eos sequi.</p>


</Box>
<Box sx={{m:3,width:"600px",ml:10,"@media (max-width:600px)":{
  width:"250px"
}}}>
  <TableContainer component={Paper}>
<Table aria-label='contact label'>
  <TableHead>
    <TableRow>
      <TableCell sx={{bgcolor:"black" ,color:"white"}} align='center'>
        Contact Details
      </TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>
        <SupportAgentIcon sx={{color:'red',pt:1}}/> 7837733 (tollfree)

      </TableCell>
          
    </TableRow>

<TableRow>
<TableCell>
        <EmailIcon sx={{color:'skyblue',pt:1}}/> help@gmail.com

      </TableCell>
</TableRow>

     <TableRow>
     <TableCell>
        <CallIcon sx={{color:'green',pt:1}}/> help@gmail.com

      </TableCell>
     </TableRow>
      

  
  </TableBody>
</Table>

  </TableContainer>
</Box>

    </Layout>
  )
}

export default Contact