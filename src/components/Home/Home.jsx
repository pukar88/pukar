import React, { useState } from 'react';
import './Home.css';
import Img from '../../assets/Img.png';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <section className="home">
        <div className="home-content">
          <h1>Hi, I am Pukar Bartaula</h1>
          <h2>Student</h2>
          <p>
            My name is Pukar Bartaula. I am originally from Ratuwamai-8, Damrabhitta, Morang, a beautiful place in eastern Nepal. Currently, I am living in Kathmandu for my Bachelor’s education.

            I am passionate about learning new technologies and continuously improving my skills. My hometown has deeply influenced my values, and I carry that sense of community and resilience with me wherever I go.

            In my free time, I enjoy exploring new ideas, working on creative projects, and connecting with people who share similar interests.
          </p>

          {/* 🔻 Download Button 🔻 */}
          <a href="/Pukar_CV.pdf" download className="home-btn">
            Download CV
          </a>
        </div>

        <div className="home-img">
          <img
            src={Img}
            alt="Pukar Bartaula"
            width={400}
            style={{ cursor: 'pointer' }}
            onClick={() => setIsModalOpen(true)}
          />
        </div>
      </section>

      {/* 🔳 Fullscreen Image Modal */}
      {isModalOpen && (
        <div className="modal" onClick={() => setIsModalOpen(false)}>
          <img src={Img} alt="Fullscreen" className="modal-img" />
        </div>
      )}
    </div>
  );
};

export default Home;
