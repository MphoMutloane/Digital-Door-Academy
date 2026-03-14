import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import HowItWorks from '../components/HowItWorks'
import Features from '../components/Features'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Banner />
        <Features />
        <HowItWorks />
        <Footer />
    </div>
  )
}

export default Home