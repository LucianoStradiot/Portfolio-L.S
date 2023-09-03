import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Views/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Home />
    <Footer />
  </React.StrictMode>
);
