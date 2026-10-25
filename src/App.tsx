import './index.css'
import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import RouteSeo from './components/RouteSeo'

const Home = lazy(() => import('./pages/Home'))
const HowItWorks = lazy(() => import('./pages/HowItWorks'))
const LiveRates = lazy(() => import('./pages/LiveRates'))
const Safety = lazy(() => import('./pages/Safety'))
const GetStarted = lazy(() => import('./pages/GetStarted'))
const About = lazy(() => import('./pages/About'))
const LahorePickup = lazy(() => import('./pages/LahorePickup'))
const BusinessPickup = lazy(() => import('./pages/BusinessPickup'))
const SellScrap = lazy(() => import('./pages/SellScrap'))
const Pricing = lazy(() => import('./pages/Pricing'))
const Coverage = lazy(() => import('./pages/Coverage'))
const RecyclingGuide = lazy(() => import('./pages/RecyclingGuide'))
const Contact = lazy(() => import('./pages/Contact'))
const FAQPage = lazy(() => import('./pages/FAQPage'))
const Terms = lazy(() => import('./pages/Terms'))
const Privacy = lazy(() => import('./pages/Privacy'))
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'))
const HowScrapRatesWork = lazy(() => import('./pages/HowScrapRatesWork'))
const SortScrapAtHome = lazy(() => import('./pages/SortScrapAtHome'))
const MaterialsRecyclingExplained = lazy(() => import('./pages/MaterialsRecyclingExplained'))

const App: React.FC = () => {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-slate-600">Loading...</div>}>
      <RouteSeo />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/how-it-works' element={<HowItWorks />} />
        <Route path='/live-rates' element={<LiveRates />} />
        <Route path='/safety' element={<Safety />} />
        <Route path='/get-started' element={<GetStarted />} />
        <Route path='/about' element={<About />} />
        <Route path='/lahore-pickup' element={<LahorePickup />} />
        <Route path='/business-pickup' element={<BusinessPickup />} />
        <Route path='/sell-scrap' element={<SellScrap />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/coverage' element={<Coverage />} />
        <Route path='/recycling-guide' element={<RecyclingGuide />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/faq' element={<FAQPage />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/cookie-policy' element={<CookiePolicy />} />
        <Route path='/how-scrap-rates-work' element={<HowScrapRatesWork />} />
        <Route path='/sort-scrap-at-home' element={<SortScrapAtHome />} />
        <Route path='/materials-recycling-explained' element={<MaterialsRecyclingExplained />} />
      </Routes>
    </Suspense>
  )
}

export default App