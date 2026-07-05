import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const faqs = [
  {
    question: 'RaddiGo se scrap pickup kaise karwain?',
    answer: 'Aap booking karte hain, humari team aapki location par jati hai, material check karti hai aur phir payment complete karwati hai.'
  },
  {
    question: 'Kya main Lahore ke alawa kisi aur city mein bhi book kar sakta hoon?',
    answer: 'Hum shuruat mein Lahore par focus kar rahe hain, lekin baad mein aur cities ke liye expansion ki planning hai.'
  },
  {
    question: 'Kya aap plastic aur metal dono collect karte hain?',
    answer: 'Ji haan, hum different scrap categories ko collect karte hain jisme paper, plastic, iron, copper aur electronics waste shamil hain.'
  },
  {
    question: 'Payment kaise hoti hai?',
    answer: 'Pickup ke baad aap ko clear rate ke mutabiq cash ya digital payment ke through payment milta hai.'
  }
]

const FAQPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-brand-green">FAQs</p>
          <h1 className="mt-3 font-heading text-4xl font-bold text-brand-dark">Aksar poochay jane wale sawalat</h1>
          <p className="mt-4 text-lg text-slate-600">Yahan par kuch common questions ke jawab diye gaye hain jo aap ko RaddiGo service samajhne mein madad karenge.</p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((item) => (
            <div key={item.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-lg font-bold text-brand-dark">{item.question}</h2>
              <p className="mt-2 text-slate-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default FAQPage
