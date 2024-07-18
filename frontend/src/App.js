import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ContactPage from './components/pages/ContactPage';
import LogInPage from './components/pages/LogInPage';
import ShopPage from './components/pages/ShopPage';
import BasketPage from './components/pages/BasketPage';
import MenuBar from './components/MenuBar';
import ProductPage from './components/pages/ProductPage';
import SignUpPage from './components/pages/SignUpPage';
import GooglePage from './components/pages/GooglePage';

function App() {
  return (
    <Router>
      <div style={styles}>
        <MenuBar />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path="/auth/google" element={<GooglePage />} />
      </Routes>
    </Router>
  );
}

const styles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

export default App;
