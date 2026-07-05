import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const RecyclingGuide: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-brand-green">Recycling guide</p>
          <h1 className="mt-3 font-heading text-4xl font-bold text-brand-dark">How to sort scrap before pickup for better value</h1>
          <p className="mt-4 text-lg text-slate-600">Sorting scrap properly helps you get a cleaner pickup and makes material processing more efficient. A little preparation can make a big difference.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-2xl font-bold text-brand-dark">What to separate</h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li>• Paper and cardboard should be kept dry and clean</li>
              <li>• Plastic should be grouped by type where possible</li>
              <li>• Metal should be separated from non-metal waste</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-brand-light p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-brand-dark">Why this matters</h2>
            <p className="mt-3 text-slate-600">Well-separated scrap is easier to weigh, easier to value, and usually gives a better experience for both the customer and the pickup team.</p>
          </div>
        </div>

        <div className="mt-10 rounded-3xl bg-brand-dark p-8 text-white">
          <h2 className="text-2xl font-bold">Ready to book a pickup?</h2>
          <div className="mt-6">
            <NavLink to="/live-rates" className="inline-block rounded-full bg-brand-green px-5 py-3 font-semibold text-white">Check current rates</NavLink>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default RecyclingGuide
