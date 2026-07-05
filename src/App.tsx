import './index.css'
import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'))
const HowItWorks = lazy(() => import('./pages/HowItWorks'))
const LiveRates = lazy(() => import('./pages/LiveRates'))
const Safety = lazy(() => import('./pages/Safety'))
const GetStarted = lazy(() => import('./pages/GetStarted'))
const Terms = lazy(() => import('./pages/Terms'))
const Privacy = lazy(() => import('./pages/Privacy'))

const App: React.FC = () => {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-slate-600">Loading...</div>}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/how-it-works' element={<HowItWorks />} />
        <Route path='/live-rates' element={<LiveRates />} />
        <Route path='/safety' element={<Safety />} />
        <Route path='/get-started' element={<GetStarted />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/privacy' element={<Privacy />} />
      </Routes>
    </Suspense>
  )
}

export default App