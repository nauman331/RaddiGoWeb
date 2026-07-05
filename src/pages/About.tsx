import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-brand-green">RaddiGo ki kahani</p>
          <h1 className="mt-3 font-heading text-4xl font-bold text-brand-dark">Pakistan mein scrap pickup ko asaan, transparent aur digital banana</h1>
          <p className="mt-4 text-lg text-slate-600">RaddiGo ka maqsad gharon, dukaano aur business ke liye scrap sell karna itna asaan banana hai ke aap bas ek booking karain aur baqi ka kaam hum kar dein.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-brand-light p-8 shadow-sm">
            <h2 className="text-xl font-bold text-brand-dark">Hum kya karte hain</h2>
            <p className="mt-3 text-slate-600">Hum scrap pickup ko online booking, verified captains aur instant payment ke saath laane ka kaam kar rahe hain.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-brand-light p-8 shadow-sm">
            <h2 className="text-xl font-bold text-brand-dark">Hum kis liye hain</h2>
            <p className="mt-3 text-slate-600">Agar aap ghar ka junk clear karna chahte hain, shop ka scrap bechna chahte hain ya business ka waste manage karna chahte hain, toh RaddiGo aap ke liye hai.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-brand-light p-8 shadow-sm">
            <h2 className="text-xl font-bold text-brand-dark">Humari soch</h2>
            <p className="mt-3 text-slate-600">Scrap ko sirf waste nahi, balkay value ke roop mein dekha jata hai. Is liye hum transparent rates aur safe pickup ensure karte hain.</p>
          </div>
        </div>

        <div className="mt-14 grid gap-8 rounded-3xl bg-slate-900 p-8 text-white lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-2xl font-bold">Aaj ke zamane mein scrap ka service hona chahiye smart</h2>
            <p className="mt-3 text-slate-300">Hamara mission sirf pickup ka service dena nahi, balkay recycle ecosystem ko Pakistan mein easy aur reliable banana hai.</p>
          </div>
          <div className="rounded-2xl bg-white/10 p-6">
            <ul className="space-y-3 text-slate-200">
              <li>• Doorstep pickup</li>
              <li>• Fair scrap pricing</li>
              <li>• Verified team members</li>
              <li>• Digital booking experience</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center">
          <h2 className="text-2xl font-bold text-brand-dark">Agar aap bhi scrap ko asaan banana chahte hain, toh shuruat karain</h2>
          <p className="mt-3 text-slate-600">Aap humare waitlist mein join kar sakte hain ya apni city ke liye pickup service ke baare mein janne ke liye contact kar sakte hain.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <NavLink to="/" className="rounded-full bg-brand-green px-5 py-3 font-semibold text-white">Join waitlist</NavLink>
            <NavLink to="/contact" className="rounded-full border border-slate-300 px-5 py-3 font-semibold text-slate-700">Contact us</NavLink>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default About
