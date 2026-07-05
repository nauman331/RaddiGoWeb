import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const GetStarted: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-brand-green font-semibold uppercase tracking-[0.2em]">Join the RaddiGo network</p>
            <h1 className="text-4xl font-heading font-bold text-brand-dark mt-3">Become a partner and help build a better scrap collection service in Pakistan</h1>
            <p className="mt-4 text-lg text-slate-600">If you want to work as a pickup captain or support the growing scrap recycling ecosystem, RaddiGo offers a simple onboarding path, clear communication, and reliable demand from customers looking for scrap pickup in Lahore.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <NavLink to="/" className="rounded-full bg-brand-green px-5 py-3 font-semibold text-white">Apply now</NavLink>
              <NavLink to="/safety" className="rounded-full border border-slate-300 px-5 py-3 font-semibold text-slate-700">Learn about safety</NavLink>
            </div>
          </div>

          <div className="rounded-3xl bg-brand-light p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-brand-dark">Why partner with RaddiGo</h2>
            <ul className="mt-6 space-y-3 text-slate-600">
              <li>• Steady demand for scrap pickup and recycling services</li>
              <li>• Clear digital payment and settlement support</li>
              <li>• Training and operational guidance for new captains</li>
              <li>• A trusted platform for customers looking for scrap collection in Lahore</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default GetStarted
