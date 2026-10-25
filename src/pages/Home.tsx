import React from 'react'
import Navbar from '../components/layout/Navbar'
import Hero from '../components/Hero'
import Process from '../components/Process'
import Footer from '../components/layout/Footer'
import Engineering from '../components/Engineering'
import Cta from '../components/CTA'
import Apps from '../components/Apps'
import StatsSection from '../components/StatsSection'
import AppExperience from '../components/AppExperience'
import CoverageSection from '../components/CoverageSection'
import CreatorSection from '../components/CreatorSection'
import FAQSection from '../components/FAQSection'

// Note: Testimonials and the waitlist form are intentionally NOT used here.
// This site is informational (rates + guides) and does not offer pickup
// booking, so pickup testimonials and booking forms have been removed.
const Home: React.FC = () => {
    return (
        <div className="bg-white font-sans text-slate-800 antialiased">
            <Navbar />
            {/* Hero renders its own <header>, so main starts after it to
                keep exactly one top-level header/main/footer landmark set */}
            <Hero />
            <main>
                <StatsSection />
                <Apps />
                <Process />
                <AppExperience />
                <Engineering />
                <CoverageSection />
                <CreatorSection />
                <FAQSection />
                <Cta />
            </main>
            <Footer />
        </div>
    )
}

export default Home
