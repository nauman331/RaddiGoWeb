import React from 'react'
import gpBadge from '../assets/google-play-badge.svg'
import appBadge from '../assets/app-store-badge.svg'
const Apps: React.FC = () => {
    return (
        <section className="bg-[linear-gradient(135deg,#f8fcfa_0%,#eef7f1_100%)] py-16">
            <div className="mx-auto max-w-6xl px-6">
                <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(11,61,46,0.08)]">
                    <div className="grid gap-8 px-8 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-14">
                        <div className="flex flex-col justify-center">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">Coming soon</p>
                            <h2 className="mt-3 text-3xl font-heading font-bold text-brand-dark">A smoother app experience for every pickup</h2>
                            <p className="mt-4 max-w-2xl text-lg text-slate-600">We are building a simple, modern mobile experience for booking scrap pickups, checking live rates, and receiving secure payment updates in real time.</p>
                            <div className="mt-8 flex flex-col flex-wrap gap-3 sm:flex-row">
                                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                                    <img src={gpBadge} alt="RaddiGo on Google Play" className="h-12 object-contain" />
                                </a>
                                <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                                    <img src={appBadge} alt="RaddiGo on the App Store" className="h-12 object-contain" />
                                </a>
                            </div>
                        </div>
                        <div className="rounded-[1.5rem] bg-brand-dark p-8 text-white">
                            <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">Why users love it</p>
                                <ul className="mt-5 space-y-3 text-sm text-slate-200">
                                    <li>• One-tap booking for scrap pickup</li>
                                    <li>• Transparent pricing in the app</li>
                                    <li>• Live updates from pickup to payment</li>
                                    <li>• Cleaner and faster than phone-based collection</li>
                                </ul>
                                <a href="#waitlist" className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-green px-4 py-2 text-sm font-semibold text-white">Join early access</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Apps