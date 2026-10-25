import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const SortScrapAtHome: React.FC = () => {
    return (
        <div className="bg-white font-sans text-slate-800 antialiased">
            <Navbar />
            <main className="mx-auto max-w-4xl px-6 py-16">
                <h1 className="text-3xl font-heading font-bold text-brand-dark">How to sort scrap at home for better rates</h1>
                <p className="mt-4 text-lg text-slate-600">
                    Sorting scrap at home takes a few minutes a week, and it is the most reliable way to get a better
                    offer when you sell. Buyers pay for material they can weigh, grade, and pass on quickly. A mixed
                    pile forces the buyer to do the sorting — and the buyer will charge for that work by offering less.
                    This guide walks through a simple home sorting system that works in an ordinary Pakistani household.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Set up four containers</h2>
                <p className="mt-3 text-slate-600">
                    You do not need special bins. Four bags, boxes, or corners of a storeroom will do: one for paper and
                    cardboard, one for plastic, one for metal, and one for electronics and batteries. Label them, and
                    put them somewhere dry — a balcony corner, a store room, or under a staircase. The key habit is
                    simple: when something becomes scrap, it goes into its container immediately, not into a general
                    pile to be sorted "later". Later almost never comes, and the mixed pile is exactly what costs you
                    money.
                </p>
                <p className="mt-3 text-slate-600">
                    Keep the containers dry. Rain or a leaking tap can ruin a whole bag of paper in a day, and wet paper
                    loses most of its value. If your storage area gets damp, put paper and cardboard in a plastic bag
                    inside the container, or on a raised shelf. Plastic and metal tolerate damp better, but dry storage
                    is still better for all of them.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Paper and cardboard: dry, flat, bundled</h2>
                <p className="mt-3 text-slate-600">
                    Newspapers, old books, notebooks, and office paper go together, but keep them dry and reasonably
                    clean. Food-stained paper, tissue, and greasy pizza boxes are not good recycling material — keep
                    them out. Cardboard boxes should be flattened: flat boxes stack neatly, take less space, and are
                    easier to weigh. Tie newspapers into bundles with string or tape so they do not scatter. On this
                    site, newspaper is listed at Rs. 80/kg and cardboard at Rs. 30/kg — two different materials, two
                    different rates, so keep them in separate bundles even though they share a container.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Plastic: rinse, group, and keep it clean</h2>
                <p className="mt-3 text-slate-600">
                    Rinse bottles and food containers before they go in the plastic container — a quick rinse is enough;
                    they do not need to be spotless. Remove caps where you can, and keep thin shopping bags apart from
                    rigid bottles and containers, because they are different types of plastic and are handled
                    differently. Squeeze bottles flat to save space. Plastic is listed on this site at Rs. 40/kg as a
                    general guide, but clean, single-type plastic is easier for a buyer to value than a bag of mixed,
                    dirty plastic — and that difference shows up in the offer.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Metal: separate copper from iron, always</h2>
                <p className="mt-3 text-slate-600">
                    This is the single most valuable sorting habit. Iron is listed at Rs. 110/kg and copper at
                    Rs. 1800/kg on this site — a gap so large that mixing even a small amount of copper into an iron
                    pile throws real money away. Old wiring, copper pipes, and brass fittings go in their own bag, away
                    from iron nails, steel stands, and tin cans. Remove plastic handles, rubber seals, and other
                    non-metal parts where you can. Wear gloves: scrap metal has sharp edges, and rusted pieces can cut.
                    Keep heavy metal low in the container so nothing falls on a foot or a hand.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Electronics and batteries: apart from everything</h2>
                <p className="mt-3 text-slate-600">
                    Old chargers, cables, phones, and small appliances go in the electronics container — never in the
                    general scrap pile, and never with batteries mixed in loosely. Batteries deserve their own small
                    bag or box: do not puncture, crush, or burn them, do not open devices to remove a battery yourself
                    if you are unsure how, and keep damaged or swollen batteries away from heat and children.
                    Electronics are listed at Rs. 200/kg on this site as a general guide, but their real value depends
                    on the metals inside, which is another reason to keep them separate rather than letting them vanish
                    into a mixed load.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Before the buyer arrives</h2>
                <p className="mt-3 text-slate-600">
                    When a container is full, do three things. First, check the rate for each material on the live
                    rates page. Second, weigh each material separately if you have a scale — even a bathroom scale gives
                    a useful rough figure. Third, work out the total yourself: weight times rate, material by material.
                    When the buyer weighs the pile, watch the scale, ask for the rate and weight of each material
                    separately, and compare with your own numbers before agreeing. If an offer is far below your
                    calculation, ask why — and remember you can always compare with another buyer.
                </p>
                <p className="mt-3 text-slate-600">
                    Sorting is not glamorous work, but it is honest work, and it pays. A household that sorts
                    consistently will, over a year, earn noticeably more from the same scrap than a household that
                    throws everything into one pile — not because the scrap is different, but because the buyer can see
                    exactly what is being sold.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                    <NavLink
                        to="/live-rates"
                        className="inline-block rounded-full bg-brand-green px-6 py-3 font-semibold text-white shadow transition hover:brightness-95"
                    >
                        View live rates
                    </NavLink>
                    <NavLink to="/materials-recycling-explained" className="inline-block px-6 py-3 font-semibold text-brand-dark hover:text-brand-green">
                        Paper, plastic and metal recycling, explained →
                    </NavLink>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default SortScrapAtHome
