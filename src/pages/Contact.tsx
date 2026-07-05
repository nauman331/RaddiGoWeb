import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-brand-green">Contact</p>
          <h1 className="mt-3 font-heading text-4xl font-bold text-brand-dark">Get in touch with the RaddiGo team</h1>
          <p className="mt-4 text-lg text-slate-600">Whether you want to join the waitlist, ask about service availability, or explore partner opportunities, our team is here to help.</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-2xl font-bold text-brand-dark">Email us</h2>
            <p className="mt-3 text-slate-600">hello@raddigo.pk</p>
          </div>
          <div className="rounded-3xl bg-brand-light p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-brand-dark">Support</h2>
            <p className="mt-3 text-slate-600">We are building a customer support experience for all new pickup and partner inquiries.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Contact
