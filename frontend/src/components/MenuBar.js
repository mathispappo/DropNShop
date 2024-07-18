import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BiHome } from "react-icons/bi";


const MenuBar = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
          const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/me`, {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          });
          if (response.ok) {
            const data = await response.json();
            setUsername(data.username);
          } else {
            console.error('Failed to fetch user data');
          }
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);


  return (
    <div style={menuStyle}>
      <div style={leftMenuStyle}>
        <Link to="/" style={menuButtonStyle}>
          <BiHome />
          Home
        </Link>
      </div>
      <div style={centerMenuStyle}>
        <Link to="/shop" style={linkStyle}>Shop</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
        <Link to="/basket" style={linkStyle}>Basket</Link>
      </div>
      <div style={rightMenuStyle}>
        <button style={searchButtonStyle}>🔍 Search</button>
        <Link to="/login" style={loginStyle}>{username ? `Hello, ${username}` : 'Login'}</Link>
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
  padding: '0 0 0 120px',
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
