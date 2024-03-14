import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Kiriazi from './pages/Kiriazi.jsx'
import Samsung from './pages/Samsung.jsx'
import Lg from './pages/LG.jsx'
import White from './pages/White.jsx'
import Header from './components/Header';
import Footer from './components/Footer';
import Spidal from './components/Spidal';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/kiriazi" element={<Kiriazi />} />
        <Route path="/lg" element={<Lg />} />
        <Route path="/samsung" element={<Samsung />} />
        <Route path="/white-whale" element={<White />} />
      </Routes>
    </BrowserRouter>
    <Spidal />
    <Footer />
  </React.StrictMode>,
)
