import React from 'react'

const faqs = [
  {
    question: 'What kinds of scrap can I book for pickup?',
    answer: 'You can book pickups for paper, books, plastic, iron, copper, electronics, and other recyclable materials depending on your area.',
  },
  {
    question: 'How do I get paid?',
    answer: 'Once the pickup is complete and verified, payment is made instantly through cash, JazzCash, or EasyPaisa.',
  },
  {
    question: 'Is the service available outside Lahore?',
    answer: 'We are launching in Lahore first and expanding to more cities gradually as we grow the network.',
  },
]

const FAQSection: React.FC = () => {
  return (
    <section className="bg-slate-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-brand-green font-semibold uppercase tracking-[0.2em] text-sm">FAQ</p>
          <h2 className="text-3xl font-heading font-bold text-brand-dark mt-3">Everything you need to know before joining</h2>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-brand-dark">{faq.question}</h3>
              <p className="text-slate-600 mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
