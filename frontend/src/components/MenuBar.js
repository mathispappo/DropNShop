import React from 'react';
import { Link } from 'react-router-dom';

function MenuBar() {
  return (
    <div style={menuStyle}>
      <div style={leftMenuStyle}>
        <Link to="/" style={menuButtonStyle}>&#9776; Home</Link>
      </div>
      <div style={centerMenuStyle}>
        <Link to="/shop" style={linkStyle}>Shop</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
        <Link to="/panier" style={linkStyle}>Basker</Link>
      </div>
      <div style={rightMenuStyle}>
        <button style={searchButtonStyle}>🔍 Search</button>
        <Link to="/login" style={loginStyle}>Log in</Link>
      </div>
    </div>
  );
}

const menuStyle = {
  display: 'flex',
  position: 'fixed',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: 'white',
  borderRadius: '50px',
  padding: '10px 5%',
  margin: '80px 0 0 0',
  width: '85%',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
};

const leftMenuStyle = {
  display: 'flex',
  alignItems: 'center',
};

const centerMenuStyle = {
  display: 'flex',
  justifyContent: 'center',
  flex: 1,
};

const rightMenuStyle = {
  display: 'flex',
  alignItems: 'center',
};

const menuButtonStyle = {
  background: 'none',
  border: 'none',
  fontSize: '20px',
  cursor: 'pointer',
  textDecoration: 'none',
  color: '#253C4A',
};

const linkStyle = {
  fontSize: '20px',
  color: '#253C4A',
  textDecoration: 'none',
  margin: '0 15px',
};

const searchButtonStyle = {
  background: 'none',
  border: 'none',
  fontSize: '20px',
  cursor: 'pointer',
  marginRight: '15px',
};

const loginStyle = {
  backgroundColor: 'black',
  color: 'white',
  border: 'none',
  borderRadius: '25px',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  textDecoration: 'none',
};

export default MenuBar;
