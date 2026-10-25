import React from 'react'
import { useLocation } from 'react-router-dom'

// Per-route SEO tags for the SPA shell. index.html carries one static
// title/description/canonical for the home page; without this, every route
// would declare the homepage as its canonical, and Google would treat all
// pages as duplicates of home. This keeps each route's title, description
// and canonical accurate. No booking, app or service promises anywhere:
// this is an informational rates-and-guides site.
const ROUTE_SEO: Record<string, { title: string; description: string }> = {
    '/': {
        title: 'RaddiGo – Lahore Scrap Rates & Recycling Guide | Newspaper, Plastic, Iron & Copper Prices',
        description:
            'RaddiGo is an informational site for Lahore scrap sellers: per-kg scrap rates for newspapers, books, cardboard, plastic, iron, copper and electronics, plus sorting and recycling guides.',
    },
    '/how-it-works': {
        title: 'How Scrap Selling Works | RaddiGo',
        description:
            'How selling scrap generally works: check the rate, sort and weigh honestly, compare offers, then sell. An informational guide — no booking, no app.',
    },
    '/live-rates': {
        title: 'Live Scrap Rates in Lahore | RaddiGo',
        description:
            'Per-kg scrap rates for newspapers, plastic, iron, copper, cardboard and electronics in Lahore. Rates are indicative and change with the market.',
    },
    '/safety': {
        title: 'Scrap Handling Safety Tips | RaddiGo',
        description:
            'Safety tips for handling scrap at home: gloves, sorting hazards, electronics and batteries, and heavy lifting.',
    },
    '/get-started': {
        title: 'How to Use This Site | RaddiGo',
        description:
            "How to use RaddiGo's rates and guides: find a material, check its rate, sort it, and compare offers before you sell.",
    },
    '/about': {
        title: 'About RaddiGo | RaddiGo',
        description:
            'RaddiGo is an informational site for Lahore scrap sellers: per-kg rates and recycling guides. It does not offer pickup booking.',
    },
    '/lahore-pickup': {
        title: 'Lahore Scrap Rates | RaddiGo',
        description:
            'Lahore scrap rates and materials: newspapers, plastic, metal and electronics per kg, plus sorting tips.',
    },
    '/business-pickup': {
        title: 'Business Scrap Rates | RaddiGo',
        description:
            'Sorting and rates for shops, offices and warehouses: bulk scrap, material separation, and per-kg rates.',
    },
    '/sell-scrap': {
        title: 'Sell Scrap: Materials & Rates | RaddiGo',
        description:
            'Materials, rates and sorting tips for selling scrap: paper, cardboard, plastic, iron, copper and electronics.',
    },
    '/pricing': {
        title: 'Scrap Pricing Explained | RaddiGo',
        description:
            'How scrap pricing works: per-kg rates, what affects the rate, and a worked example. Rates are indicative and change with the market.',
    },
    '/coverage': {
        title: 'Coverage: Lahore Focus | RaddiGo',
        description:
            'RaddiGo focuses on Lahore scrap rates and does not yet publish rates for other cities.',
    },
    '/recycling-guide': {
        title: 'Recycling Guide | RaddiGo',
        description:
            'How to sort scrap properly: paper, cardboard, plastic, metal and electronics recycling explained.',
    },
    '/contact': {
        title: 'Contact RaddiGo | RaddiGo',
        description:
            'Contact RaddiGo by email at hello@raddigo.pk. This site is informational and does not take bookings.',
    },
    '/faq': {
        title: 'Frequently Asked Questions | RaddiGo',
        description:
            'Answers to common questions about scrap rates, materials, sorting, and what this site does and does not offer.',
    },
    '/terms': {
        title: 'Terms of Service | RaddiGo',
        description:
            'Terms for using RaddiGo, an informational scrap-rates and recycling-guide site.',
    },
    '/privacy': {
        title: 'Privacy Policy | RaddiGo',
        description:
            'How RaddiGo handles analytics, cookies, and Google advertising, including opt-outs.',
    },
    '/cookie-policy': {
        title: 'Cookie Policy | RaddiGo',
        description:
            'What cookies this site uses — necessary, analytics and advertising cookies — and how to control them.',
    },
    '/how-scrap-rates-work': {
        title: 'How Scrap Rates Work | RaddiGo',
        description:
            'Why scrap rates change and how to judge an offer: market, material quality, and quantity.',
    },
    '/sort-scrap-at-home': {
        title: 'Sort Scrap at Home | RaddiGo',
        description:
            'A simple home sorting system for paper, plastic, metal and electronics to get fair value.',
    },
    '/materials-recycling-explained': {
        title: 'Materials Recycling Explained | RaddiGo',
        description:
            'Paper, plastic and metal recycling explained: what each material is, how it is recycled, and how to sort it.',
    },
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
    let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
    if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
    }
    el.setAttribute('content', content)
}

function upsertCanonical(href: string) {
    let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!el) {
        el = document.createElement('link')
        el.setAttribute('rel', 'canonical')
        document.head.appendChild(el)
    }
    el.setAttribute('href', href)
}

const RouteSeo: React.FC = () => {
    const location = useLocation()
    React.useEffect(() => {
        const path = location.pathname
        const seo = ROUTE_SEO[path] ?? ROUTE_SEO['/']
        const url = `https://www.raddigo.tech${path === '/' ? '/' : path}`
        document.title = seo.title
        upsertMeta('name', 'description', seo.description)
        upsertMeta('property', 'og:title', seo.title)
        upsertMeta('property', 'og:description', seo.description)
        upsertMeta('property', 'og:url', url)
        upsertMeta('property', 'twitter:title', seo.title)
        upsertMeta('property', 'twitter:description', seo.description)
        upsertMeta('property', 'twitter:url', url)
        upsertCanonical(url)
    }, [location.pathname])
    return null
}

export default RouteSeo
