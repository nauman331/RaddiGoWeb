import React from 'react'
import Heroimg from '../assets/hero.jpeg'
import WaitlistForm from './Waitlistform'

const rates = [
    { label: 'Newspaper', value: 'Rs. 80/kg' },
    { label: 'Plastic', value: 'Rs. 40/kg' },
    { label: 'Iron', value: 'Rs. 110/kg' },
    { label: 'Electronics', value: 'Rs. 200/kg' },
    { label: 'Copper', value: 'Rs. 1800/kg' },
]

const Hero: React.FC = () => {
    return (
        <React.Fragment>
            <header className="relative overflow-hidden bg-[linear-gradient(135deg,#f3f8f5_0%,#ffffff_100%)] pt-12 pb-20 lg:pt-20 lg:pb-28">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,168,89,0.12),transparent_40%)]" />
                <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 rounded-full border border-brand-green/20 bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-brand-green shadow-sm">
                            <span aria-hidden="true">●</span> Launching soon in Lahore
                        </div>
                        <h1 className="text-4xl font-heading font-bold leading-tight text-brand-dark lg:text-6xl">
                            Book scrap pickup in minutes <br />
                            <span className="text-brand-green">and get paid instantly.</span>
                        </h1>
                        <p className="max-w-2xl text-lg text-slate-600">
                            RaddiGo brings the convenience of modern on-demand services to scrap collection in Pakistan. Book
                            pickup, get transparent pricing, and receive instant payment for newspapers, plastic, metal, and
                            electronics.
                        </p>

                        <ul className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
                            {['Doorstep pickup', 'Verified captains', 'Instant cash'].map((item) => (
                                <li
                                    key={item}
                                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-sm"
                                >
                                    <span className="text-brand-green" aria-hidden="true">✓</span> {item}
                                </li>
                            ))}
                        </ul>

                        <WaitlistForm id="waitlist" source="hero" />
                        <p className="text-sm text-slate-500">Over 500 homes and businesses have already joined the waitlist.</p>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 rounded-full bg-brand-green/20 opacity-30 blur-3xl" aria-hidden="true" />
                        <div className="absolute inset-0 rounded-[2rem] border border-brand-green/20" aria-hidden="true" />
                        <img
                            src={Heroimg}
                            alt="RaddiGo scrap pickup service in Lahore"
                            className="relative rounded-[2rem] border-4 border-white shadow-2xl"
                            fetchPriority="high"
                            loading="eager"
                            decoding="async"
                        />
                    </div>
                </div>
            </header>

            {/* Live rate ticker. Text is duplicated once for a seamless CSS
                loop; the duplicate is aria-hidden so screen readers only
                announce the rates once. Respects prefers-reduced-motion. */}
            <div
                className="group overflow-hidden whitespace-nowrap bg-brand-dark py-3 [--marquee-state:running] motion-reduce:[--marquee-state:paused]"
                role="marquee"
                aria-label="Latest scrap rates"
            >
                <div className="inline-block animate-marquee font-mono text-sm tracking-wider text-white [animation-play-state:var(--marquee-state)] group-hover:[--marquee-state:paused]">
                    <span aria-hidden={false}>
                        🚨 Latest scrap rates:{' '}
                        {rates.map((r, i) => (
                            <React.Fragment key={r.label}>
                                {r.label} <span className="text-green-400">{r.value}</span>
                                {i < rates.length - 1 ? ' • ' : ''}
                            </React.Fragment>
                        ))}
                    </span>
                    <span aria-hidden="true">
                        {' • '}
                        {rates.map((r, i) => (
                            <React.Fragment key={`${r.label}-dup`}>
                                {r.label} <span className="text-green-400">{r.value}</span>
                                {i < rates.length - 1 ? ' • ' : ''}
                            </React.Fragment>
                        ))}
                    </span>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Hero