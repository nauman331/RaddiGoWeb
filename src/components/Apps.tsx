import React from 'react'
import gpBadge from '../assets/google-play-badge.svg'
import appBadge from '../assets/app-store-badge.svg'
import WaitlistForm from './Waitlistform'

const perks = [
    {
        title: 'Book in one tap',
        description: 'Pick your area, choose a time slot, and confirm — no phone calls, no back-and-forth.',
        icon: (
            <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2m-9 0h10a2 2 0 012 2v9a2 2 0 01-2 2H7a2 2 0 01-2-2v-9a2 2 0 012-2z" />
        ),
    },
    {
        title: 'See rates before you commit',
        description: 'Live per-kg pricing for every material, updated daily, shown before your captain arrives.',
        icon: <path d="M9 8h6m-6 4h6m-6 4h4M5 4h14v16H5z" />,
    },
    {
        title: 'Track your captain',
        description: 'Real-time location and ETA once a captain accepts your pickup, just like a ride-hailing app.',
        icon: <path d="M12 21c-4-4-7-7.5-7-11a7 7 0 1114 0c0 3.5-3 7-7 11z M12 8v3M10.5 9.5h3" />,
    },
    {
        title: 'Get paid the moment it ends',
        description: 'Cash in hand, or instant transfer via JazzCash and EasyPaisa — your choice at checkout.',
        icon: <path d="M3 10h18M6 15h3M3 6h18v12H3z" />,
    },
]

const platforms = [
    { label: 'Android', note: 'Google Play · Coming soon' },
    { label: 'iOS', note: 'App Store · Coming soon' },
]

const Apps: React.FC = () => {
    return (
        <section className="bg-[linear-gradient(135deg,#f8fcfa_0%,#eef7f1_100%)] py-20" aria-labelledby="apps-heading">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                    {/* Left: the pitch + real conversion form */}
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">Coming soon</p>
                        <h2 id="apps-heading" className="mt-3 text-3xl font-heading font-bold text-brand-dark lg:text-4xl">
                            The RaddiGo app, built for how Pakistan actually recycles
                        </h2>
                        <p className="mt-4 max-w-xl text-lg text-slate-600">
                            No walk-in scrap yards, no guessing the rate, no waiting around. The app puts booking, pricing, and
                            payment in one place — and gets you notified the moment it's live in your city.
                        </p>

                        <ul className="mt-8 grid gap-5 sm:grid-cols-2">
                            {perks.map((perk) => (
                                <li key={perk.title} className="flex gap-3">
                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={1.8}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-4.5 w-4.5"
                                            aria-hidden="true"
                                        >
                                            {perk.icon}
                                        </svg>
                                    </span>
                                    <div>
                                        <h3 className="font-semibold text-brand-dark">{perk.title}</h3>
                                        <p className="mt-0.5 text-sm text-slate-600">{perk.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_40px_rgba(11,61,46,0.08)]">
                            <h3 className="font-semibold text-brand-dark">Be first to know when we launch</h3>
                            <p className="mt-1 text-sm text-slate-600">Join 500+ people already on the list — no spam, one launch email.</p>
                            <div className="mt-4">
                                <WaitlistForm source="apps" ctaLabel="Notify me" placeholder="Your email or WhatsApp" />
                            </div>
                        </div>

                        <div className="mt-6 flex flex-wrap items-center gap-4">
                            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                                <img src={gpBadge} alt="RaddiGo on Google Play" className="h-12 object-contain" loading="lazy" decoding="async" />
                            </a>
                            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                                <img src={appBadge} alt="RaddiGo on the App Store" className="h-12 object-contain" loading="lazy" decoding="async" />
                            </a>
                        </div>
                    </div>

                    {/* Right: platform status card + QR, distinct from the phone
                        mockup in AppExperience below so the two sections don't repeat */}
                    <div className="rounded-[1.75rem] border border-slate-200 bg-brand-dark p-8 text-white shadow-2xl lg:sticky lg:top-24">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">Launch status</p>
                        <h3 className="mt-3 text-2xl font-heading font-bold">Built. Being tested. Almost yours.</h3>
                        <p className="mt-2 text-sm text-slate-300">
                            Our team is finishing pickup scheduling and payment integrations for JazzCash and EasyPaisa ahead of
                            the Lahore launch.
                        </p>

                        <div className="mt-6 space-y-3">
                            {platforms.map((p) => (
                                <div
                                    key={p.label}
                                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                                >
                                    <span className="font-semibold">{p.label}</span>
                                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200">
                                        {p.note}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                            {/* Decorative QR-style pattern — swap for a real generated QR pointing to your app/waitlist link before shipping */}
                            <svg viewBox="0 0 80 80" className="h-16 w-16 shrink-0 text-white" aria-hidden="true">
                                <rect width="80" height="80" rx="8" fill="white" fillOpacity="0.08" />
                                {[
                                    [4, 4], [4, 12], [4, 20], [12, 4], [20, 4], [20, 12],
                                    [56, 4], [56, 12], [56, 20], [64, 4], [72, 4], [72, 12], [72, 20],
                                    [4, 56], [4, 64], [4, 72], [12, 72], [20, 72], [20, 64],
                                    [36, 36], [44, 36], [36, 44], [44, 44], [52, 52], [60, 60], [36, 60], [60, 36], [28, 28], [52, 28], [28, 52],
                                ].map(([x, y]) => (
                                    <rect key={`${x}-${y}`} x={x} y={y} width="6" height="6" fill="currentColor" />
                                ))}
                            </svg>
                            <div>
                                <p className="text-sm font-semibold">Scan to join early access</p>
                                <p className="text-xs text-slate-400">Or use the form on the left — same waitlist.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Apps