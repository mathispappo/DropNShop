import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ContactPage from './components/pages/ContactPage';
import AccountPage from './components/pages/AccountPage';
import ShopPage from './components/pages/ShopPage';
import PanierPage from './components/pages/PanierPage';
import MenuBar from './components/MenuBar';
import ProductPage from './components/pages/ProductPage';

function App() {
  return (
    <Router>
      <div style={styles}>
        <MenuBar />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/panier" element={<PanierPage />} />
        <Route path='/product1' element={<ProductPage />} />
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
