import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './Pages/Hero'
import Lenis from 'lenis'
import Footer from './components/Footer'



const App = () => {

  useEffect(() => {
    const lenis = new Lenis()
  
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
  
    requestAnimationFrame(raf)
  }, [])

  return (
    <>
    <Navbar />
    <Hero />
    <Footer />
    </>
  )
}

export default App