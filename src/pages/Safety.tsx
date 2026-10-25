import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { NavLink } from 'react-router-dom'

const points = [
    {
        title: 'Wear gloves and protect your hands',
        text: 'Scrap often has sharp edges, rust, and broken pieces. Wear sturdy gloves when sorting or lifting metal, glass, and wire, and wash your hands after handling scrap.',
    },
    {
        title: 'Sort safely, and keep hazards apart',
        text: 'Separate paper, plastic, and metal at home, and keep broken glass, sharp objects, and chemicals away from general scrap. Never mix unknown chemicals or containers that held chemicals into your scrap pile.',
    },
    {
        title: 'Handle electronics and batteries with care',
        text: 'Keep batteries, broken screens, and old electronics apart from other scrap. Do not puncture, crush, or burn batteries, and do not open devices yourself — damaged batteries can leak or catch fire.',
    },
    {
        title: 'Lift heavy metal the safe way',
        text: 'Iron and other metals are heavy. Bend your knees, keep the load close to your body, and ask for help with large or awkward pieces instead of lifting alone. Stack heavy items low so they cannot fall on someone.',
    },
]

const Safety: React.FC = () => {
    return (
        <div className="bg-white font-sans text-slate-800 antialiased">
            <Navbar />
            <main className="mx-auto max-w-4xl px-6 py-16">
                <h1 className="text-3xl font-heading font-bold text-brand-dark">Safety tips for handling scrap</h1>
                <p className="mt-4 text-lg text-slate-600">
                    Sorting and selling scrap is straightforward work, but it involves sharp, heavy, and sometimes
                    hazardous material. These general tips help you handle it safely. This site does not arrange pickups
                    or handle your scrap — these are tips for your own handling, wherever you sell.
                </p>

                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                    {points.map((point) => (
                        <div key={point.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-brand-dark">{point.title}</h2>
                            <p className="mt-2 text-slate-600">{point.text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
                    <h2 className="text-xl font-bold text-brand-dark">General reminders</h2>
                    <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
                        <li>Keep children away from scrap piles, sharp metal, and old electronics.</li>
                        <li>Store scrap in a dry, ventilated spot, away from cooking areas and open flames.</li>
                        <li>If you are unsure whether an item is hazardous, leave it aside and ask a local recycling point before handling it further.</li>
                        <li>These tips are general guidance, not professional safety advice for any specific job.</li>
                    </ul>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                    <NavLink
                        to="/recycling-guide"
                        className="inline-block rounded-full bg-brand-green px-6 py-3 font-semibold text-white shadow transition hover:brightness-95"
                    >
                        Recycling guide
                    </NavLink>
                    <NavLink to="/live-rates" className="inline-block px-6 py-3 font-semibold text-brand-dark hover:text-brand-green">
                        View live rates →
                    </NavLink>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Safety
