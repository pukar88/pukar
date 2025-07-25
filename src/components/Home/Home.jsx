import React, { useState } from 'react';
import './Home.css';
import Img from '../../assets/Img.png';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

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
            onClick={() => setIsLiked(!isLiked)}
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

          {/* Photo on the right */}
          <img
            src={Img}
            alt="Pukar Bartaula"
            width={400}
            style={{ 
              cursor: 'pointer',
              display: 'block'
            }}
            onClick={() => setIsModalOpen(true)}
          />
        </div>
      </section>

      {isModalOpen && (
        <div className="modal" onClick={() => setIsModalOpen(false)}>
          <img src={Img} alt="Fullscreen" className="modal-img" />
        </div>
      )}
    </div>
  );
};

export default Home;