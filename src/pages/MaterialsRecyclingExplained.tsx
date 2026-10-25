import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const MaterialsRecyclingExplained: React.FC = () => {
    return (
        <div className="bg-white font-sans text-slate-800 antialiased">
            <Navbar />
            <main className="mx-auto max-w-4xl px-6 py-16">
                <h1 className="text-3xl font-heading font-bold text-brand-dark">Paper, plastic, and metal recycling, explained</h1>
                <p className="mt-4 text-lg text-slate-600">
                    When you sell old newspapers, a plastic bottle, or a piece of iron, where does it actually go? What
                    happens to it, and why is one material worth Rs. 1800/kg while another is worth Rs. 30/kg? This
                    guide follows the three most common household scrap materials — paper, plastic, and metal — from
                    your home to their second life, so you can understand what your sorting is actually for.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Paper: fibres that get shorter every time</h2>
                <p className="mt-3 text-slate-600">
                    Paper is made of plant fibres, usually from wood. When old paper is recycled, it is mixed with water
                    and pulped back into a slurry, cleaned of ink and impurities, and pressed into new sheets. Each time
                    this happens, the fibres get a little shorter and weaker, which is why recycled paper is often used
                    for packaging, newspaper, and cardboard rather than fine writing paper — and why fresh fibre is
                    mixed in to keep the quality up.
                </p>
                <p className="mt-3 text-slate-600">
                    This is also why dry, clean paper matters so much. Wet paper grows mould and loses fibre strength;
                    food-stained paper contaminates the pulp; laminated or plastic-coated paper cannot be pulped
                    cleanly at all. A tonne of clean office paper and a tonne of wet, mixed paper are not the same raw
                    material, even though both are "paper" — and the price reflects that. On this site, newspaper is
                    listed at Rs. 80/kg and cardboard at Rs. 30/kg: newspaper is a cleaner, more uniform fibre, while
                    cardboard is bulkier and lower grade, which is why the two are priced differently.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Plastic: many materials under one name</h2>
                <p className="mt-3 text-slate-600">
                    "Plastic" is not one material but a family of them, each with its own chemistry. The bottles you
                    drink from, the bags you carry groceries in, the containers your food comes in, and the hard
                    plastic of a broken chair are all different types. Recycling starts by sorting them by type, because
                    different plastics melt at different temperatures and cannot simply be mixed together. After
                    sorting, plastic is washed, shredded into flakes, melted, and formed into pellets — the raw material
                    for new bottles, containers, fibres, and construction products.
                </p>
                <p className="mt-3 text-slate-600">
                    The difficulty of that first sorting step is why mixed plastic is worth less than sorted plastic.
                    Clear, clean bottles are the easiest to identify and process; thin films and bags tangle in sorting
                    machinery and are often handled separately or not at all; dirty or food-contaminated plastic needs
                    extra washing. Plastic is listed on this site at Rs. 40/kg as a general guide — a middle value that
                    reflects both its abundance and the real cost of sorting and cleaning it before it can be reused.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Metal: the material that never wears out</h2>
                <p className="mt-3 text-slate-600">
                    Metal is the star of recycling. Iron and steel can be melted and re-formed indefinitely without
                    losing their properties, and doing so uses far less energy than making new metal from ore. Copper
                    and aluminium are similar: an old copper wire, melted down, becomes copper as good as new. This is
                    why scrap metal has a real, stable market — mills and foundries buy it every day as a raw material,
                    not as waste.
                </p>
                <p className="mt-3 text-slate-600">
                    The value gap between metals comes from scarcity and usefulness. Iron is abundant and cheap to
                    produce, so scrap iron is listed at Rs. 110/kg on this site. Copper is scarcer, harder to mine, and
                    essential for wiring and electronics, so scrap copper is listed at Rs. 1800/kg. Electronics sit in
                    between at Rs. 200/kg as a general guide: an old phone contains small amounts of several metals,
                    including copper, but recovering them takes careful dismantling, and the devices also contain parts
                    that must be handled safely. That is why electronics should always be kept apart from general scrap
                    — they are not just another metal, they are a mixed product that needs its own handling.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Why your sorting helps the whole chain</h2>
                <p className="mt-3 text-slate-600">
                    Every step of recycling — pulping, shredding, melting — works better with clean, separated input.
                    Mixed waste costs more to sort, more of it is rejected, and more of it ends up buried or burned
                    instead of reused. A household that sorts paper, plastic, metal, and electronics into four groups is
                    doing the first, hardest step of recycling for free — and that is exactly why sorted scrap earns a
                    better offer. You are not just selling material; you are selling material that is ready to use.
                </p>
                <p className="mt-3 text-slate-600">
                    The next time you put a newspaper in a bundle, rinse a bottle, or set a copper wire aside from an
                    iron nail, remember what happens next: the paper becomes a new box, the bottle becomes a pellet for
                    a new product, and the metal becomes, quite literally, new metal. Recycling is not a slogan — it is
                    a supply chain, and your home is its first step.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                    <NavLink
                        to="/live-rates"
                        className="inline-block rounded-full bg-brand-green px-6 py-3 font-semibold text-white shadow transition hover:brightness-95"
                    >
                        View live rates
                    </NavLink>
                    <NavLink to="/recycling-guide" className="inline-block px-6 py-3 font-semibold text-brand-dark hover:text-brand-green">
                        Recycling guide →
                    </NavLink>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default MaterialsRecyclingExplained
