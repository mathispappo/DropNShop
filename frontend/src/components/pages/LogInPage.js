import React, { useState }  from 'react';
import '../../css/LogInPage.css';
import backgroundImage from '../../assets/background/login.png';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (evt) => {
    evt.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.accessToken) {
        localStorage.setItem('jwt', data.accessToken);
        console.log('Logged in:', data);
      }
    })
    .catch(error => console.error('Error logging in:', error));
  };


// AJOUTER le lien vers /auth/google pour le bouton

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="form-section">
          <h1>Welcome back</h1>
          <p>Enter the information you entered while registering</p>
          <form>
            <label htmlFor="email">Username</label>
            <input type="text" id="email" name="email" value={username} onChange={e => setUsername(e.target.value)} required />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} required/>
            <button onClick={handleLogin} type="submit" className="login-button">LOGIN</button>
          </form>
          <div className="alternative-login">
            <div className="divider">
              <span></span>
            </div>
            <button className="google-login">
              <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google logo" />
              Sign in with Google
            </button>
          </div>
          <p className="signup-link">
            Don't have an account? <a href="/signup">Sign up for free</a>
          </p>
        </div>
        <div className="image-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="overlay">
            <div className="content">
              <h2>Digital platform for</h2>
              <h2>infinite shopping possibilities</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
