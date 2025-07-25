import React, { useState } from 'react';
import './Home.css';
import Img from '../../assets/Img.png';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div>
      <section className="home">
        <div className="home-content">
          <h1>Hi, I am Pukar Bartaula</h1>
          <h2>Student</h2>
          <p>
            My name is Pukar Bartaula. I am originally from Ratuwamai-8, Damrabhitta, Morang, 
            a beautiful place in eastern Nepal. Currently, I am living in Kathmandu for my Bachelor's education.
            I am passionate about learning new technologies and continuously improving my skills.
            My hometown has deeply influenced my values, and I carry that sense of community and 
            resilience with me wherever I go.
            In my free time, I enjoy exploring new ideas, working on creative projects, 
            and connecting with people who share similar interests.
          </p>

          <a href="\Screenshot (109).png" download className="home-btn">
            Download CV
          </a>
        </div>

        <div className="home-img" style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end'
        }}>
          {/* Like button on the left */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '32px',
              color: isLiked ? '#ff2d55' : '#000000',
              marginRight: '20px',
              transition: 'transform 0.2s ease',
              alignSelf: 'center'
            }}
            aria-label={isLiked ? 'Unlike photo' : 'Like photo'}
          >
            {isLiked ? '❤️' : '🖤'}
          </button>

          {/* Photo on the right with fullscreen toggle */}
          <img
            src={Img}
            alt="Pukar Bartaula"
            width={400}
            style={{ 
              cursor: 'pointer',
              display: 'block',
              position: isFullscreen ? 'fixed' : 'static',
              top: isFullscreen ? '0' : 'auto',
              left: isFullscreen ? '0' : 'auto',
              width: isFullscreen ? '100vw' : '400px',
              height: isFullscreen ? '100vh' : 'auto',
              objectFit: isFullscreen ? 'contain' : 'cover',
              zIndex: isFullscreen ? '1000' : 'auto',
              backgroundColor: isFullscreen ? 'rgba(0,0,0,0.9)' : 'transparent',
              padding: isFullscreen ? '20px' : '0',
              transition: 'all 0.3s ease'
            }}
            onClick={toggleFullscreen}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
