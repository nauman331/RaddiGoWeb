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
import CalculatorWidget from '../components/CalculatorWidget'

// Note: this site is informational (rates + guides) and does not offer
// pickup booking, so pickup testimonials and booking forms are not used
// here — the old Testimonials and waitlist components were deleted.
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
                <section className="bg-white px-6 py-20" aria-labelledby="calculator-heading">
                    <div className="mx-auto max-w-4xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">Calculator</p>
                        <h2 id="calculator-heading" className="mt-3 text-3xl font-heading font-bold text-brand-dark">
                            Work out what your scrap is worth
                        </h2>
                        <p className="mt-3 text-lg text-slate-600">
                            Enter the weight of each material and see the estimated value, worked out from the
                            per-kg rates on this site. Indicative only — confirm the rate and weight with your
                            buyer before you sell.
                        </p>
                        <div className="mt-8">
                            <CalculatorWidget />
                        </div>
                    </div>
                </section>
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
