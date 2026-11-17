import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

// Dated updates feed (F3). One post per real change — a rate re-check, a
// new tool or guide, or a page improvement. NEVER backdate a post: each
// entry is written on the day the work actually happened.
const posts = [
    {
        date: '17 Nov 2026',
        title: 'Scrap-value calculator is live',
        body: 'A new calculator is now on the site: enter the weight of each material and it works out the estimated value from the per-kg rates published here, per material and combined. It is on its own page (/calculator) and on the home page. The totals are indicative only — they are worked out from the published rates, and the rate and weight should always be confirmed with the buyer before selling. The calculator uses exactly the six published rates and nothing else.',
    },
    {
        date: '17 Nov 2026',
        title: 'Site improvements: authorship, rate history, and clearer guides',
        body: 'Several improvements went live today. The About page now names Muhammad Nauman as the person who runs RaddiGo, with a short note on how the rates are checked. A new rate-history page records every rate check with its real date. The guides now explain grade and condition — for example clean versus mixed copper, and dry versus wet paper — and link to real references. The footer was cleaned up. The six published rates are unchanged.',
    },
]

const Updates: React.FC = () => {
    return (
        <div className="bg-white font-sans text-slate-800 antialiased">
            <Navbar />
            <main className="mx-auto max-w-4xl px-6 py-16">
                <h1 className="text-3xl font-heading font-bold text-brand-dark">Updates</h1>
                <p className="mt-4 text-lg text-slate-600">
                    What changed on RaddiGo, and when. Each post below is dated on the day the work actually
                    happened — new tools, rate checks, and guide updates, in order.
                </p>

                <div className="mt-10 space-y-8">
                    {posts.map((post) => (
                        <article key={post.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                            <p className="text-sm font-semibold text-brand-green">{post.date}</p>
                            <h2 className="mt-2 text-xl font-bold text-brand-dark">{post.title}</h2>
                            <p className="mt-2 text-slate-600">{post.body}</p>
                        </article>
                    ))}
                </div>

                <p className="mt-10 text-slate-600">
                    Rate checks are logged separately, with their real dates, on the{' '}
                    <NavLink to="/rate-history" className="font-semibold text-brand-dark hover:text-brand-green">
                        rate history page
                    </NavLink>
                    .
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                    <NavLink
                        to="/calculator"
                        className="inline-block rounded-full bg-brand-green px-6 py-3 font-semibold text-white shadow transition hover:brightness-95"
                    >
                        Try the calculator
                    </NavLink>
                    <NavLink to="/live-rates" className="inline-block px-6 py-3 font-semibold text-brand-dark hover:text-brand-green">
                        Live rates →
                    </NavLink>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Updates
