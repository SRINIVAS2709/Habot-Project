import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Signup from './components/SignUp/Signup'
import Requirements from './components/Requirements/Requirements'
import Verify from './components/Verify/Verify'
import HowItWorks from './components/HowItWorks/HowItWorks'
import Footer from './components/Footer/Footer'



const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Signup />
    <Requirements />
    <Verify />
    <HowItWorks />
    <Footer />
    </>
  )
}

export default App
