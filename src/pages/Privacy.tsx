import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-heading font-bold text-brand-dark">Privacy Policy</h1>
        <p className="mt-4 text-slate-600">RaddiGo aap ki privacy ka khayal rakhta hai. Hum sirf aap ki service experience ko behtar banane ke liye data use karte hain.</p>
        <div className="mt-8 space-y-4 text-slate-600">
          <p>1. Aap ka contact detail aur pickup history sirf account management aur support ke liye use hota hai.</p>
          <p>2. Hum aap ki information ko third parties ke saath bechne ya share nahi karte.</p>
          <p>3. Aap har waqt apni account settings mein apni data ko update ya delete karwa sakte hain.</p>
          <p>4. Agar aap ko privacy se related koi sawal ho to hum se contact karain.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Privacy
