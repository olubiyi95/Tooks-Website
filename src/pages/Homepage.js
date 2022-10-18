import React from 'react';
import Navbar from '../components/Navbar';
import Showcase from '../components/Showcase';
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <div className='homepage'>
        <Navbar/>
        <Showcase/>
        <Footer/>
    </div>
  )
}

export default Homepage