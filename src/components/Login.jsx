import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import mountEverest from "C:/Users/LENOVO/OneDrive/Desktop/Mount-Everest.webp";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    if (email === 'pukarbartaula@gmail.com' && password === '9816322799') {
      setIsLoggedIn(true);
    } else {
      setError('Invalid email or password');
    }
  };

  if (isLoggedIn) {
    return (
      <div className="login">
        <div className="login-container" style={{ textAlign: 'center' }}>
          <h2>Thank you for logging in!</h2>
          <img 
            src={mountEverest} 
            alt="Mount Everest" 
            style={{ 
              width: '250px',
              height: '250px',
              objectFit: 'cover',
              borderRadius: '8px',
              margin: '20px 0'
            }}
          />
          <button 
            onClick={() => setIsLoggedIn(false)}
            style={{
              padding: '10px 20px',
              backgroundColor: '#f0f0f0',
              border: '1px solid #ccc',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  // Your original login form (completely unchanged)
  return (
    <div className="login">
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;