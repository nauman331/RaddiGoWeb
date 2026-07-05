import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo2 from '../../assets/logo2.jpeg'
import gpBadge from '../../assets/google-play-badge.svg'
import appBadge from '../../assets/app-store-badge.svg'

const desktopMenus = [
    {
        id: 'services',
        label: 'Services',
        items: [
            { label: 'How it works', to: '/how-it-works', description: 'See the full pickup journey' },
            { label: 'Live rates', to: '/live-rates', description: 'Check today’s scrap prices' },
            { label: 'Lahore pickup', to: '/lahore-pickup', description: 'Doorstep pickup in Lahore' },
            { label: 'Business pickup', to: '/business-pickup', description: 'Support for shops and offices' },
            { label: 'Sell scrap', to: '/sell-scrap', description: 'Easy scrap selling in one click' },
            { label: 'Pricing', to: '/pricing', description: 'Simple rates and service options' }
        ]
    },
    {
        id: 'solutions',
        label: 'Solutions',
        items: [
            { label: 'For homes', to: '/sell-scrap', description: 'Household junk and scrap clearout' },
            { label: 'For shops', to: '/business-pickup', description: 'Recurring pickups for stores' },
            { label: 'For offices', to: '/business-pickup', description: 'Bulk waste and office clearout' },
            { label: 'For partners', to: '/get-started', description: 'Join the captain network' }
        ]
    },
    {
        id: 'learn',
        label: 'Learn',
        items: [
            { label: 'Safety', to: '/safety', description: 'Secure pickup and handling' },
            { label: 'FAQ', to: '/faq', description: 'Answers to common questions' },
            { label: 'About', to: '/about', description: 'Our mission and story' },
            { label: 'Coverage', to: '/coverage', description: 'Cities and service zones' },
            { label: 'Recycling guide', to: '/recycling-guide', description: 'How to sort scrap properly' }
        ]
    },
    {
        id: 'company',
        label: 'Company',
        items: [
            { label: 'Contact', to: '/contact', description: 'Reach our team' },
            { label: 'Terms', to: '/terms', description: 'Service terms and conditions' },
            { label: 'Privacy', to: '/privacy', description: 'Data and privacy policy' }
        ]
    }
]

const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false)
    const [activeMenu, setActiveMenu] = useState<string | null>(null)
    const [mobileSections, setMobileSections] = useState<Record<string, boolean>>({})

    const toggleMobileSection = (id: string) => {
        setMobileSections((prev) => ({ ...prev, [id]: !prev[id] }))
    }

    return (
        <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <NavLink to="/" className="flex items-center gap-2">
                    <img src={logo2} alt="RaddiGo Logo" className="h-12 w-12 rounded-full object-cover" />
                    <span className="text-2xl font-heading font-bold tracking-tight text-brand-dark">RaddiGo</span>
                </NavLink>

                <div className="hidden items-center gap-1 text-sm font-semibold text-slate-600 md:flex">
                    {desktopMenus.map((menu) => (
                        <div
                            key={menu.id}
                            className="relative py-3"
                            onMouseEnter={() => setActiveMenu(menu.id)}
                            onMouseLeave={() => setActiveMenu(null)}
                        >
                            <button className="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-brand-green">
                                {menu.label}
                            </button>
                            {activeMenu === menu.id && (
                                <div className="absolute left-0 top-full pt-2">
                                    <div className="w-80 rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_20px_60px_rgba(11,61,46,0.16)]">
                                        <div className="grid gap-2">
                                            {menu.items.map((item) => (
                                                <NavLink
                                                    key={item.to}
                                                    to={item.to}
                                                    className="block rounded-xl px-3 py-3 transition hover:bg-brand-light"
                                                >
                                                    <div className="font-semibold text-brand-dark">{item.label}</div>
                                                    <div className="mt-1 text-sm text-slate-500">{item.description}</div>
                                                </NavLink>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    <div className="hidden items-center gap-2 sm:flex">
                        <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="px-1 py-0">
                            <img src={gpBadge} alt="Get it on Google Play" className="h-7 object-contain" />
                        </a>
                        <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="px-1 py-0">
                            <img src={appBadge} alt="Download on the App Store" className="h-7 object-contain" />
                        </a>
                    </div>
                    <NavLink to="/get-started" className="hidden rounded-full bg-brand-dark px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 md:inline-block">
                        Become a partner
                    </NavLink>

                    <button
                        aria-label="Toggle menu"
                        aria-expanded={open}
                        onClick={() => setOpen(!open)}
                        className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 md:hidden"
                    >
                        {open ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {open && (
                <div className="border-t border-slate-100 bg-white md:hidden">
                    <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-4">
                        {desktopMenus.map((menu) => (
                            <div key={menu.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                                <button
                                    onClick={() => toggleMobileSection(menu.id)}
                                    className="flex w-full items-center justify-between rounded-xl px-2 py-2 text-left font-semibold text-brand-dark"
                                >
                                    <span>{menu.label}</span>
                                    <span className="text-lg">{mobileSections[menu.id] ? '−' : '+'}</span>
                                </button>
                                {mobileSections[menu.id] && (
                                    <div className="mt-2 space-y-2 px-2 pb-1">
                                        {menu.items.map((item) => (
                                            <NavLink
                                                key={item.to}
                                                to={item.to}
                                                onClick={() => setOpen(false)}
                                                className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-white hover:text-brand-green"
                                            >
                                                {item.label}
                                            </NavLink>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <NavLink to="/get-started" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-brand-dark px-4 py-2 text-center text-sm font-semibold text-white">Become a partner</NavLink>
                        <div className="flex items-center gap-3 pt-2">
                            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                                <img src={gpBadge} alt="Get it on Google Play" className="h-9 object-contain" />
                            </a>
                            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                                <img src={appBadge} alt="Download on the App Store" className="h-9 object-contain" />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar