import React from 'react';
import HomeBackground from "../../assets/background.png"
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div style={HomeStyles}>
      <div style={positionStyles}>
        <div style={collectionStyles}>COLLECTION</div>
        <div style={collumnStyles}>
          <div style={applianceStyles}>HOME APPLIANCE</div>
          <div style={sellingStyles}>BEST SELLING</div>
          <div style={sellingStyles}>PRODUCT</div>
          <Link to="/shop" style={shopStyles}>SHOP NOW</Link>
        </div>
      </div>
    </div>
  );
}

const HomeStyles = {
  display: 'flex',
  flexDirection: 'row',
  width: '100vw',
  height: '100vh',
  backgroundImage: `url(${HomeBackground})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}

const positionStyles = {
  margin: '13% 0 0 13%',
  display: 'flex',
}

const collectionStyles = {
  writingMode: 'vertical-rl',
  transform: 'rotate(180deg)',
  height: '210px',
  width: '30px',
  fontSize: '20px',
  letterSpacing: '9px'
}

const collumnStyles = {
  display: 'flex',
  flexDirection: 'column',
}

const applianceStyles = {
  color: 'orange',
  display: 'flex',
  fontSize: '35px',
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 'lighter',
}

const sellingStyles = {
  color: '#253C4A',
  display: 'flex',
  fontSize: '50px',
  fontWeight: 'bold',
}

const shopStyles = {
  background: '#253C4A',
  borderRadius: '50px',
  width: '150px',
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  color: 'white',
  textDecoration: 'none',
  fontWeight: 'bold',
  margin: '20px 0 0 0',
}

export default HomePage;
