import React from 'react'
import './Home.css'
import Img from '../../assets/Img.png'

const Home = () => {
  return (
    <div>
      <section className="home">
        <div className="home-content">
            <h1>Hi, i am Pukar Bartaula</h1>
            <h2>student</h2>
            <p>
                My name is Pukar Bartaula. I am originally from Ratuwamai-8, Damrabhitta, Morang, a beautiful place in eastern Nepal. Currently, I am living in Kathmandu for my Bachelor’s education.

I am passionate about learning new technologies and continuously improving my skills. My hometown has deeply influenced my values, and I carry that sense of community and resilience with me wherever I go.

In my free time, I enjoy exploring new ideas, working on creative projects, and connecting with people who share similar interests.
            </p>
            <button className="home-btn"> Download CV</button>
        </div>
        <div className="home-img">
            <img src={Img} alt="Trisa Paudel" width={400} />
        </div>
      </section>
    </div>
  );
};

export default Home