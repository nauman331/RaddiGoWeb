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

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Storing scrap at home</h2>
                <p className="mt-3 text-slate-600">
                    Where you keep scrap matters as much as how you handle it. Store it in a dry, ventilated spot,
                    away from cooking areas and open flames. Keep paper and cardboard off damp floors, and keep the
                    walkway around the pile clear so nobody trips. Stack heavy items low so they cannot fall on
                    someone, and keep sharp metal and broken glass in a sturdy container. Keep children away from
                    scrap piles, sharp metal, and old electronics. If space is small, sort little and often rather
                    than letting one large pile build up.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">What never to burn or break open</h2>
                <p className="mt-3 text-slate-600">
                    Some things should never be burned or opened at home. Batteries can leak or catch fire if they are
                    punctured, crushed, or burned — keep them apart and handle them with care. Old electronics should
                    not be opened, because broken screens and internal parts can be sharp or carry a charge. Aerosol
                    cans and containers that held chemicals should never be burned or cut open. Paint tins and chemical
                    containers should be kept away from general scrap. If you are unsure whether an item is hazardous,
                    leave it aside and ask a local recycling point before handling it further.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">If something goes wrong</h2>
                <p className="mt-3 text-slate-600">
                    Most scrap handling is safe, but it helps to know what to do when something goes wrong. For a
                    small cut from sharp metal or glass, clean the wound and cover it, and wash your hands. If a
                    battery leaks, do not touch the liquid with bare hands — move the battery with gloves, ventilate
                    the area, and wash your hands afterwards. If something starts to smoke or smell strongly, move
                    away and let it cool in the open air rather than handling it. These are general tips only. For a
                    serious injury or a fire, get help straight away and do not try to deal with it alone.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Frequently asked questions</h2>
                <p className="mt-3 text-slate-600">
                    <strong>Can children help sort scrap?</strong> Children can help with clean paper and cardboard,
                    but keep them away from sharp metal, broken glass, batteries, and old electronics.
                </p>
                <p className="mt-3 text-slate-600">
                    <strong>Where should I keep batteries?</strong> In a dry container, apart from other scrap, and
                    out of reach of children. Never store them near heat.
                </p>
                <p className="mt-3 text-slate-600">
                    <strong>Is it safe to store scrap indoors?</strong> Small amounts of dry paper, cardboard, and
                    plastic are fine indoors if the area is ventilated. Keep heavy metal low, sharp items contained,
                    and anything that smells of chemicals outside.
                </p>

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
