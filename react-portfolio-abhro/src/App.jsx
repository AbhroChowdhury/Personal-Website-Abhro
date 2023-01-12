import React from 'react'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import References from './components/references/References'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const app = () => {
  return (
    <>
        <Header /> 
        <Navbar />
        <About />
        <Experience />
        <Portfolio />
        <References />
        <Contact />
        <Footer />

    </>
  )
}

export default app