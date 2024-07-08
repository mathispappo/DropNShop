import React from 'react';
import '../../css/SignUpPage.css';
import backgroundImage from '../../assets/background/login.png';

function SignUpPage() {
  return (
    <div className="sign-up-page">
      <div className="sign-up-container">
        <div className="form-section">
          <h1>Join us</h1>
          <p>Enter your details to create an account</p>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
            <button type="submit" className="sign-up-button">SIGN UP</button>
          </form>
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
