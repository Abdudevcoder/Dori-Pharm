import React from 'react'
import '../../App.css'
import Intro from '../intro'
import Cards from '../cards'
import About from '../about'
import Footer from '../footer'


function Home () {
    return (
        <>
            <Intro />
            <Cards />
            <About />
            <Footer />
        </>
    )
}

export default Home;