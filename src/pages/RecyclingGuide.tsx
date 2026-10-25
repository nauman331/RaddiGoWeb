import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const sections = [
    {
        title: 'Paper and cardboard',
        body: 'Keep newspapers, books, and cardboard dry and clean. Wet or food-stained paper is hard to recycle and is usually valued lower. Flatten boxes, tie newspapers into bundles, and keep glossy or laminated paper apart from plain paper where you can. Paper fibres shorten each time they are recycled, which is why clean, dry paper is worth more than mixed, wet paper.',
    },
    {
        title: 'Plastic, by type',
        body: 'Plastic is not one material — bottles, containers, bags, and hard plastics are made from different types and are recycled differently. Rinse containers, remove caps and labels where you can, and group similar plastics together. Clear, clean bottles are usually the easiest to recycle; thin films and bags tangle in sorting machines and are often handled separately. Keep plastic dry and out of the sun where possible.',
    },
    {
        title: 'Metal: iron, steel, and copper',
        body: 'Metal is one of the most recyclable materials — it can be melted and reused many times without losing quality. Keep iron and steel apart from copper, because copper is worth far more per kg and mixing them drags the value down. Remove non-metal parts where you can, such as plastic handles or rubber seals, and keep metal dry to slow rust. Handle sharp edges with gloves, and keep heavy pieces low so they cannot fall.',
    },
    {
        title: 'Electronics and batteries',
        body: 'Old phones, chargers, cables, and appliances contain metals that can be recovered, but also parts that need careful handling. Keep electronics apart from general scrap, and keep batteries completely separate — never puncture, crush, or burn them, and never open a device yourself. Broken screens and swollen batteries should be handled with extra care and kept away from children and heat.',
    },
    {
        title: 'Sorting at home, step by step',
        body: 'Start with four containers or bags: paper and cardboard, plastic, metal, and electronics. Rinse food containers, let paper dry fully before bundling, and flatten boxes to save space. Weigh each group separately if you can — mixed scrap is almost always valued lower than separated scrap, because the buyer has to do the sorting. When you sell, ask for the rate and weight of each material separately, and work out the total yourself before agreeing.',
    },
    {
        title: 'Why sorting matters',
        body: 'Recycling works best when material arrives clean and separated. Mixed waste costs more to sort, more of it is rejected, and more of it ends up discarded. A household that sorts at home helps recyclers recover more material, and usually gets a fairer offer — because the buyer can see exactly what is being sold, instead of guessing at a mixed pile.',
    },
]

const RecyclingGuide: React.FC = () => {
    return (
        <div className="bg-white font-sans text-slate-800 antialiased">
            <Navbar />
            <main className="mx-auto max-w-4xl px-6 py-16">
                <h1 className="text-3xl font-heading font-bold text-brand-dark">Recycling guide: how to sort scrap at home</h1>
                <p className="mt-4 text-lg text-slate-600">
                    Sorting scrap at home is the single most useful thing a seller can do. Clean, separated material is
                    easier to weigh, easier to value, and easier to recycle. This guide covers paper, plastic, metal, and
                    electronics — the materials listed on the live rates page.
                </p>

                <div className="mt-10 space-y-8">
                    {sections.map((section) => (
                        <section key={section.title}>
                            <h2 className="text-2xl font-bold text-brand-dark">{section.title}</h2>
                            <p className="mt-3 text-slate-600">{section.body}</p>
                        </section>
                    ))}
                </div>

                <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                    <h2 className="text-xl font-bold text-brand-dark">Quick checklist before you sell</h2>
                    <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
                        <li>Paper and cardboard: dry, clean, flattened or bundled.</li>
                        <li>Plastic: rinsed, grouped by type, caps removed where you can.</li>
                        <li>Metal: separated by type, dry, sharp edges handled with gloves.</li>
                        <li>Electronics and batteries: kept completely apart from other scrap.</li>
                        <li>Rates and weights: confirmed separately for each material, total worked out before agreeing.</li>
                    </ul>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                    <NavLink
                        to="/live-rates"
                        className="inline-block rounded-full bg-brand-green px-6 py-3 font-semibold text-white shadow transition hover:brightness-95"
                    >
                        Check current rates
                    </NavLink>
                    <NavLink to="/safety" className="inline-block px-6 py-3 font-semibold text-brand-dark hover:text-brand-green">
                        Safety tips →
                    </NavLink>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default RecyclingGuide
