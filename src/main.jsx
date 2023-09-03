import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Recovery from './routes/RecoveryPage.jsx'
import CloudPage from './routes/CloudPage.jsx'
import ContactPage from './routes/ContactPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />} />
    <Route path='/cloud' element={<CloudPage />} />
    <Route path='/recovery' element={<Recovery />} />
    <Route path='/contact' element={<ContactPage />} />

  </Routes>
  </BrowserRouter>,
)
