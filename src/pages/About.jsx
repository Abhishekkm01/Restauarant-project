import React from 'react'
import Layout from '../components/Layouts/Layout'
import { Box, Typography } from '@mui/material'

function About() {
  return (
    <Layout >
       <Box sx={{my:15,p:2,textAlign:"center","& h4":{
        fontWeight:"bold",
        my:2,
        fontSize:"2rem"
       },"& p":{
        textAlign:"justify"
       },"@media (max-width:600px)":{
        mt:0,
        "& h4":{
          fontSize:"1.4rem"
        }
        
       }}}>

<Typography variant='h4'>
welcome to restaurant
</Typography>

<p>
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, aperiam. Nobis illum possimus molestiae sed. Quis perferendis nostrum, veritatis ratione, itaque non asperiores vel similique, ea quibusdam voluptatum! Amet doloremque dolores harum hic corrupti. Culpa id nesciunt facere itaque dolores, esse minus sapiente dolor rem eligendi repudiandae, reiciendis fugiat veritatis perspiciatis earum! Exercitationem eos voluptatem animi culpa labore impedit similique doloremque cumque dolorum omnis, non facere illum dolore explicabo magni magnam esse maiores sint. Modi, minima consectetur voluptates sed quam alias, earum iste quaerat expedita dolorum deleniti quia libero. Accusantium tempora ratione minima labore. Sequi dolorem eum harum laborum ducimus!
</p>

<br />

<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta totam libero hic enim consequuntur qui sequi accusamus aliquid, minus amet illum, aspernatur atque, molestiae nam necessitatibus? Veritatis ut dolor, quaerat nobis aut, obcaecati eum nesciunt, commodi libero reiciendis expedita labore eius sint blanditiis inventore explicabo possimus cupiditate excepturi laudantium cumque? Neque, magni placeat corporis temporibus numquam sunt. Deleniti cum, itaque accusantium similique cupiditate exercitationem debitis, perferendis nisi rerum architecto harum eos! Incidunt illo ullam, quis expedita facere placeat consequuntur quam quibusdam ex ipsa cum soluta amet, tenetur dolorem? Perferendis nemo ullam consectetur asperiores ad mollitia tempore, distinctio delectus quisquam ipsum.
</p>

       </Box>
    </Layout>
  )
}

export default About