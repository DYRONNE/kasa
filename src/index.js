import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/index';
import Info from './pages/info/info';
import NotFound from './pages/404/NotFound';
import Logement from './pages/logement/logement';
import Header from './components/Header/header'; 
import Footer from './components/Footer/footer';
import './App.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <div className="main-content">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="/404" element={<NotFound />} /> {/* Route pour la page 404 */}
          <Route path="*" element={<NotFound />} /> {/* Capturer toutes les autres routes non définies */}
        </Routes>
      </div>
      <Footer />
    </Router>
  </React.StrictMode>
);
