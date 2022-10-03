import React from 'react'
import '../../App.css'
import Navbar from '../navbar'
import Intro from '../intro'
import Cards from '../cards'
import About from '../about'
import Footer from '../footer'


function Home () {
    return (
        <>
            <Navbar />
            <Intro />
            <Cards />
            <About />
            <Footer />
        </>
    )
}

export default Home;