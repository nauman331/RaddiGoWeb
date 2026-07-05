import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const Coverage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-brand-green">Coverage</p>
          <h1 className="mt-3 font-heading text-4xl font-bold text-brand-dark">Serving Lahore first and expanding to more cities over time</h1>
          <p className="mt-4 text-lg text-slate-600">RaddiGo is beginning with Lahore to build a strong local service experience before expanding to more cities across Pakistan.</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-2xl font-bold text-brand-dark">Current focus</h2>
            <p className="mt-3 text-slate-600">Our first service zone is Lahore so we can ensure fast response times, dependable pickup quality, and strong local support.</p>
          </div>
          <div className="rounded-3xl bg-brand-light p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-brand-dark">Future expansion</h2>
            <p className="mt-3 text-slate-600">As the platform grows, we aim to bring the same experience to more neighborhoods and cities across Pakistan.</p>
          </div>
        </div>

        <div className="mt-10 rounded-3xl bg-brand-dark p-8 text-white">
          <h2 className="text-2xl font-bold">Want service in your area?</h2>
          <p className="mt-3 text-slate-300">Join the waitlist and let us know where you want pickup support so we can plan the next expansion step.</p>
          <div className="mt-6">
            <NavLink to="/" className="inline-block rounded-full bg-brand-green px-5 py-3 font-semibold text-white">Join waitlist</NavLink>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Coverage
