// Welcome.js
import React from 'react';

const Welcome = () => {
  return (
    <div className="welcome-container">
      <h2>Welcome! You're logged in</h2>
      <div className="photo-container">
        <img 
          src="https://via.placeholder.com/300" // Replace with your actual photo URL
          alt="Welcome"
          className="welcome-photo"
        />
      </div>
      <p>Enjoy your stay!</p>
    </div>
  );
};

export default Welcome;