import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { Suspense } from 'react'

const Home = React.lazy(() => import("./Routes/Home.tsx"));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<App />} />
          <Route index element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          }/>
        </Route>
      </Routes>
    </BrowserRouter>
    <App />
  </StrictMode>,
)
