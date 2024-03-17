import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Spidal from './components/Spidal';
import Contact from './components/Contact.jsx'
import Kiriazi from './pages/Kiriazi.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/kiriazi" element={<Kiriazi />} />
      </Routes>
    </BrowserRouter>
    <Spidal />
    <Footer />
  </React.StrictMode>,
)
