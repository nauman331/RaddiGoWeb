import './index.css'
import React, { lazy, Suspense } from 'react'
const Home = lazy(() => import('./pages/Home'))
import { Route, Routes } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Suspense>
  )
}

export default App