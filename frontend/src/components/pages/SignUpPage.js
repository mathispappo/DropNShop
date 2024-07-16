import React, { useState }  from 'react';
import '../../css/SignUpPage.css';
import backgroundImage from '../../assets/background/login.png';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = (evt) => {
    evt.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, username, password }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.accessToken) {
          localStorage.setItem('jwt', data.accessToken);
          console.log('Registered:', data);
          setSuccessMessage('Account created successfully!');
          setErrorMessage('');
        }
      })
      .catch(error => {
        console.error('Error registering:', error);
        setErrorMessage('An error occurred during registration.');
        setSuccessMessage('');
      });
  };

// AJOUTER le lien vers /auth/google pour le bouton

  return (
    <div className="sign-up-page">
      <div className="sign-up-container">
        <div className="form-section">
          <h1>Join us</h1>
          <p>Enter your details to create an account</p>
          <form>
            <label htmlFor="name">Username</label>
            <input type="text" id="name" name="name" value={username} onChange={e => setUsername(e.target.value)} required />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} required />
            <button type="submit" className="sign-up-button" onClick={handleRegister} >SIGN UP</button>
          </form>
          {successMessage && <p className="success-message">{successMessage}</p>}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div className="alternative-login">
            <div className="divider">
              <span></span>
            </div>
            <button className="google-login">
              <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google logo" />
              Sign up with Google
            </button>
          </div>
          <p className="login-link">
            Already have an account? <a href="/login">Log in</a>
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

export default SignUpPage;
