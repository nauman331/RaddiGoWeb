import React from 'react'
import Navbar from '../components/layout/Navbar'
import Hero from '../components/Hero'
import Process from '../components/Process'
import Footer from '../components/layout/Footer'
import Engineering from '../components/Engineering'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import Cta from '../components/CTA'
import Apps from '../components/Apps'

const Home: React.FC = () => {
    return (
        <div className='font-sans text-slate-800 antialiased bg-white'>
            <Navbar />
            <Hero />
            <Apps />
            <Process />
            <Engineering />
            <Gallery />
            <Testimonials />
            <Cta />
            <Footer />
        </div>
    )
}

export default Home