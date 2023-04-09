import React from 'react'
import Layout from '../components/Layouts/Layout'
import { Link } from 'react-router-dom'

import Banner from '../../src/images/lily-banse--YHSwy6uqvk-unsplash.jpg';
import Banner2 from '../../src/images/masala-dose.jpg'
import '../styles/Homestyle.css'
function Home() {
  return (
    <Layout>
<div className="home" style={{background:`url(${Banner2})`}} >

<div className="headerContainer" >
  <h1>Food Website</h1>
  <p>Best food in india</p>
  <Link to="/menu">
  <button>order Now</button>
  </Link>
</div>

</div>
    </Layout>
  )
}

export default Home
