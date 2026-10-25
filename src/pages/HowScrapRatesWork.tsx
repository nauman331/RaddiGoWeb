import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const HowScrapRatesWork: React.FC = () => {
    return (
        <div className="bg-white font-sans text-slate-800 antialiased">
            <Navbar />
            <main className="mx-auto max-w-4xl px-6 py-16">
                <h1 className="text-3xl font-heading font-bold text-brand-dark">How scrap rates work in Pakistan</h1>
                <p className="mt-4 text-lg text-slate-600">
                    If you have ever sold old newspapers, plastic bottles, or a broken iron stand, you have probably
                    noticed something: the price is never a single fixed number. One buyer offers one amount, another
                    offers something different, and the same material can be worth more or less from one month to the
                    next. This guide explains, in plain terms, how scrap rates are set, what moves them, and how you can
                    use that knowledge to get a fair deal.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">What a scrap rate actually means</h2>
                <p className="mt-3 text-slate-600">
                    A scrap rate is a price per kilogram. When this site lists newspaper at Rs. 80/kg, plastic at
                    Rs. 40/kg, iron at Rs. 110/kg, electronics at Rs. 200/kg, copper at Rs. 1800/kg, and cardboard at
                    Rs. 30/kg, it means that one kilogram of that material, on its own, is being valued at that amount
                    as a guide. The total you receive is the weight of each material multiplied by its rate, added
                    together. That sounds simple, but three things complicate it: the material is rarely pure, the
                    weight is rarely exact, and the rate itself moves.
                </p>
                <p className="mt-3 text-slate-600">
                    Start with the material. A pile labelled "plastic" might contain bottles, bags, hard containers,
                    and broken toys — all plastic, but not all the same type, and not all equally easy to recycle.
                    Buyers who sort carefully can pay more for a clean, single-type load than for a mixed bag they have
                    to sort themselves. The same applies to paper: dry newspapers are straightforward to recycle, while
                    wet, food-stained, or laminated paper is not. This is why sorting at home matters so much, and why
                    the recycling guide on this site spends so much time on it.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Why rates change over time</h2>
                <p className="mt-3 text-slate-600">
                    Scrap is a raw material for industry. Paper mills buy old paper to make new paper; steel plants buy
                    scrap iron to melt into new steel; plastic recyclers buy old bottles to make pellets for new
                    products. When demand for those finished products rises, recyclers need more scrap, and rates tend
                    to rise. When demand falls, or when new raw material becomes cheaper, rates tend to fall. Transport
                    costs matter too: moving heavy scrap from a home to a sorting yard to a mill costs money, and that
                    cost is part of the price chain.
                </p>
                <p className="mt-3 text-slate-600">
                    This is also why copper is worth so much more than cardboard. Copper is a scarce, valuable metal
                    with many industrial uses, and recovering it from old wiring and pipes saves a great deal of mining
                    and refining. Cardboard, by contrast, is plentiful and cheap to produce new. The gap between
                    Rs. 1800/kg for copper and Rs. 30/kg for cardboard is not a mistake — it reflects how much the
                    recovered material is actually worth to the next buyer in the chain.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">What affects the offer you personally receive</h2>
                <p className="mt-3 text-slate-600">
                    Beyond the market rate, four things shape the offer for your particular pile. First, condition:
                    dry, clean, separated material is easier to weigh and easier to recycle, so it is usually valued
                    higher. Second, quantity: a larger, well-sorted load is simpler for a buyer to handle than a small
                    mixed pile. Third, accuracy of weighing: scrap is usually weighed on a scale, and the weight of
                    each material separately matters — if everything is weighed together as "mixed", the buyer will
                    usually price it at the lowest-value material in the mix, or close to it. Fourth, your own
                    information: a seller who knows the per-kg rate and has worked out the total in advance is much
                    harder to underpay than a seller who has no number in mind.
                </p>
                <p className="mt-3 text-slate-600">
                    A worked example makes this concrete. Suppose you have 10 kg of newspaper, 5 kg of plastic, and
                    4 kg of iron. At the rates on this site, that is 10 × Rs. 80 = Rs. 800, plus 5 × Rs. 40 = Rs. 200,
                    plus 4 × Rs. 110 = Rs. 440 — Rs. 1,440 in total. This is an example only, not a promise: your
                    buyer's offer may be higher or lower depending on condition, quantity, and the market on the day.
                    But having the number in your head before the buyer arrives changes the conversation completely.
                    You can ask why an offer differs, and you can compare it with another buyer's offer on the same
                    basis.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Common traps to watch for</h2>
                <p className="mt-3 text-slate-600">
                    The most common trap is the mixed pile: everything weighed together at one low rate, even though
                    part of it — copper wiring, for example — is worth far more. The second is wet material: paper and
                    cardboard gain weight when wet, which sounds like it would help the seller, but wet paper is damaged
                    paper, and buyers discount it heavily or refuse it. The third is the vague quote: "I will give you a
                    good price for everything" without naming a per-kg rate or showing a weight. A fair offer names the
                    rate, names the weight, and shows the total. If any of those three is missing, ask for it before
                    agreeing.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">How to use this site's rates</h2>
                <p className="mt-3 text-slate-600">
                    Treat the rates on this site as a starting point, not a guarantee. Check the rate for each material
                    you have, sort your scrap, weigh it if you can, work out the total, and then talk to a buyer. If
                    the offer is close to your calculation, it is probably fair. If it is far off, ask why — and compare
                    with another buyer before deciding. That is the whole point of publishing rates openly: a seller
                    who knows the number cannot easily be given a number that is far below it.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                    <NavLink
                        to="/live-rates"
                        className="inline-block rounded-full bg-brand-green px-6 py-3 font-semibold text-white shadow transition hover:brightness-95"
                    >
                        View live rates
                    </NavLink>
                    <NavLink to="/sort-scrap-at-home" className="inline-block px-6 py-3 font-semibold text-brand-dark hover:text-brand-green">
                        How to sort scrap at home →
                    </NavLink>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default HowScrapRatesWork
