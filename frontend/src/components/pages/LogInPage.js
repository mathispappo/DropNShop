import React from 'react';
import '../../css/LogInPage.css';
import backgroundImage from '../../assets/background/login.png';

function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="form-section">
          <h1>Welcome back</h1>
          <p>Enter the information you entered while registering</p>
          <form>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
            <div className="remember-forgot">
              <label>
                <input type="checkbox" name="remember" /> Remember me
              </label>
              <a href="/forgot-password">Forget password?</a>
            </div>
            <button type="submit" className="login-button">LOGIN</button>
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
