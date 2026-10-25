import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo2 from '../../assets/logo2.jpeg'

// All items are kept and always rendered in the DOM (never conditionally
// mounted) so crawlers index every internal link regardless of hover/open
// state — only visibility/animation is toggled with CSS.
const desktopMenus = [
    {
        id: 'services',
        label: 'Services',
        items: [
            { label: 'How it works', to: '/how-it-works', description: 'How selling scrap generally works' },
            { label: 'Live rates', to: '/live-rates', description: 'Check today’s scrap prices' },
            { label: 'Lahore rates', to: '/lahore-pickup', description: 'Lahore rates and materials' },
            { label: 'Business rates', to: '/business-pickup', description: 'Sorting and rates for shops and offices' },
            { label: 'Sell scrap', to: '/sell-scrap', description: 'Materials, rates and sorting tips' },
            { label: 'Pricing', to: '/pricing', description: 'Simple rates and service options' },
        ],
    },
    {
        id: 'solutions',
        label: 'Solutions',
        items: [
            { label: 'For homes', to: '/sell-scrap', description: 'Household junk and scrap clearout' },
            { label: 'For shops', to: '/business-pickup', description: 'Sorting and rates for stores' },
            { label: 'For offices', to: '/business-pickup', description: 'Bulk waste and office clearout' },
            { label: 'Get started', to: '/get-started', description: 'How to use this site' },
        ],
    },
    {
        id: 'learn',
        label: 'Learn',
        items: [
            { label: 'Safety', to: '/safety', description: 'Safe handling tips' },
            { label: 'FAQ', to: '/faq', description: 'Answers to common questions' },
            { label: 'About', to: '/about', description: 'Our mission and story' },
            { label: 'Coverage', to: '/coverage', description: 'Cities covered by this site' },
            { label: 'Recycling guide', to: '/recycling-guide', description: 'How to sort scrap properly' },
            { label: 'How scrap rates work', to: '/how-scrap-rates-work', description: 'Why rates change and how to judge an offer' },
            { label: 'Sort scrap at home', to: '/sort-scrap-at-home', description: 'A simple home sorting system' },
            { label: 'Materials explained', to: '/materials-recycling-explained', description: 'Paper, plastic and metal recycling' },
        ],
    },
    {
        id: 'company',
        label: 'Company',
        items: [
            { label: 'Contact', to: '/contact', description: 'Reach our team' },
            { label: 'Terms', to: '/terms', description: 'Terms for this informational site' },
            { label: 'Privacy', to: '/privacy', description: 'Data and privacy policy' },
            { label: 'Cookie Policy', to: '/cookie-policy', description: 'How this site uses cookies' },
        ],
    },
]

const copy = {
    en: {
        sell: 'Sell scrap',
        partner: 'Get started',
        langToggle: 'اردو',
    },
    ur: {
        sell: 'ردی بیچیں',
        partner: 'شروع کریں',
        langToggle: 'English',
    },
}

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false)
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [activeMenu, setActiveMenu] = useState<string | null>(null)
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({})
    const [lang, setLang] = useState<'en' | 'ur'>('en')
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
    const t = copy[lang]

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        document.body.style.overflow = drawerOpen ? 'hidden' : ''
        return () => {
            document.body.style.overflow = ''
        }
    }, [drawerOpen])

    // Small delay before closing a dropdown so moving the mouse from the
    // trigger into the panel doesn't feel twitchy.
    const openMenu = (id: string) => {
        if (closeTimer.current) clearTimeout(closeTimer.current)
        setActiveMenu(id)
    }
    const scheduleClose = () => {
        closeTimer.current = setTimeout(() => setActiveMenu(null), 120)
    }

    const toggleSection = (id: string) => {
        setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }))
    }

    return (
        <>
            <nav
                className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md transition-all duration-300 ${
                    scrolled ? 'border-slate-200 shadow-[0_4px_24px_rgba(11,61,46,0.08)]' : 'border-transparent'
                }`}
            >
                <div
                    className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 ${
                        scrolled ? 'py-3' : 'py-4'
                    }`}
                >
                    {/* Logo */}
                    <NavLink to="/" className="flex shrink-0 items-center gap-2">
                        <img src={logo2} alt="RaddiGo Logo" className="h-10 w-10 rounded-full object-cover" />
                        <span className="font-heading text-xl font-bold tracking-tight text-brand-dark">RaddiGo</span>
                    </NavLink>

                    {/* Desktop nav — grouped dropdowns, all links always in the DOM */}
                    <div className="hidden items-center gap-1 lg:flex">
                        {desktopMenus.map((menu) => (
                            <div
                                key={menu.id}
                                className="relative"
                                onMouseEnter={() => openMenu(menu.id)}
                                onMouseLeave={scheduleClose}
                            >
                                <button
                                    className={`flex items-center gap-1 rounded-full px-3 py-2 text-[15px] font-medium transition-colors ${
                                        activeMenu === menu.id ? 'text-brand-green' : 'text-slate-600 hover:text-brand-dark'
                                    }`}
                                    aria-expanded={activeMenu === menu.id}
                                >
                                    {menu.label}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                                            activeMenu === menu.id ? 'rotate-180' : ''
                                        }`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Always mounted; only opacity/transform/pointer-events change */}
                                <div
                                    className={`absolute left-0 top-full pt-2 transition-all duration-200 ${
                                        activeMenu === menu.id
                                            ? 'pointer-events-auto translate-y-0 opacity-100'
                                            : 'pointer-events-none -translate-y-1 opacity-0'
                                    }`}
                                >
                                    <div className="w-80 rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_20px_60px_rgba(11,61,46,0.16)]">
                                        <div className="grid gap-1">
                                            {menu.items.map((item) => (
                                                <NavLink
                                                    key={item.to + item.label}
                                                    to={item.to}
                                                    className="block rounded-xl px-3 py-2.5 transition hover:bg-brand-light"
                                                >
                                                    <div className="text-sm font-semibold text-brand-dark">{item.label}</div>
                                                    <div className="mt-0.5 text-xs text-slate-500">{item.description}</div>
                                                </NavLink>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right cluster */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setLang(lang === 'en' ? 'ur' : 'en')}
                            className="hidden rounded-full px-3 py-2 text-sm font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-brand-dark sm:inline-block"
                        >
                            {t.langToggle}
                        </button>

                        <NavLink
                            to="/sell-scrap"
                            className="hidden rounded-full bg-brand-green px-4 py-2 text-sm font-semibold text-white transition hover:brightness-95 md:inline-block"
                        >
                            {t.sell}
                        </NavLink>
                        <NavLink
                            to="/get-started"
                            className="hidden rounded-full border border-brand-dark px-4 py-2 text-sm font-semibold text-brand-dark transition hover:bg-brand-dark hover:text-white lg:inline-block"
                        >
                            {t.partner}
                        </NavLink>

                        <button
                            aria-label="Open menu"
                            aria-expanded={drawerOpen}
                            onClick={() => setDrawerOpen(true)}
                            className="inline-flex items-center justify-center rounded-full p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile drawer — every section and link stays in the DOM;
                collapsed groups use max-height/opacity, not unmounting. */}
            <div
                className={`fixed inset-0 z-[60] transition-opacity duration-300 lg:hidden ${
                    drawerOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
                }`}
            >
                <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setDrawerOpen(false)} />
                <div
                    className={`absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
                        drawerOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                        <NavLink to="/" onClick={() => setDrawerOpen(false)} className="flex items-center gap-2">
                            <img src={logo2} alt="RaddiGo Logo" className="h-9 w-9 rounded-full object-cover" />
                            <span className="font-heading text-lg font-bold text-brand-dark">RaddiGo</span>
                        </NavLink>
                        <button
                            aria-label="Close menu"
                            onClick={() => setDrawerOpen(false)}
                            className="rounded-full p-2 text-slate-500 hover:bg-slate-100"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex gap-2 px-5 pt-4">
                        <NavLink
                            to="/sell-scrap"
                            onClick={() => setDrawerOpen(false)}
                            className="flex-1 rounded-full bg-brand-green px-4 py-2.5 text-center text-sm font-semibold text-white"
                        >
                            {t.sell}
                        </NavLink>
                        <NavLink
                            to="/get-started"
                            onClick={() => setDrawerOpen(false)}
                            className="flex-1 rounded-full border border-brand-dark px-4 py-2.5 text-center text-sm font-semibold text-brand-dark"
                        >
                            {t.partner}
                        </NavLink>
                    </div>

                    <div className="flex-1 overflow-y-auto px-5 py-4">
                        {desktopMenus.map((menu) => {
                            const isOpen = !!openSections[menu.id]
                            return (
                                <div key={menu.id} className="mb-2 rounded-2xl border border-slate-100 bg-slate-50/60">
                                    <button
                                        onClick={() => toggleSection(menu.id)}
                                        className="flex w-full items-center justify-between px-4 py-3 text-left text-[15px] font-semibold text-brand-dark"
                                        aria-expanded={isOpen}
                                    >
                                        <span>{menu.label}</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {/* Kept mounted at all times; only height/opacity animate */}
                                    <div
                                        className={`grid overflow-hidden px-4 transition-all duration-300 ${
                                            isOpen ? 'grid-rows-[1fr] pb-3 opacity-100' : 'grid-rows-[0fr] opacity-0'
                                        }`}
                                    >
                                        <div className="min-h-0 space-y-1">
                                            {menu.items.map((item) => (
                                                <NavLink
                                                    key={item.to + item.label}
                                                    to={item.to}
                                                    onClick={() => setDrawerOpen(false)}
                                                    className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-white hover:text-brand-green"
                                                >
                                                    {item.label}
                                                </NavLink>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                        <button
                            onClick={() => setLang(lang === 'en' ? 'ur' : 'en')}
                            className="mt-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600"
                        >
                            {t.langToggle}
                        </button>
                    </div>

                    <div className="border-t border-slate-100 px-5 py-4 text-center text-sm text-slate-500">
                        Rates and recycling guides for Lahore scrap sellers.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar