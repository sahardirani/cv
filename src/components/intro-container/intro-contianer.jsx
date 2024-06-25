import React from "react";
import saharImage from "../../images/sahar.jpeg";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import './intro-container.css';

const IntroContainer = () => {
  return (
    <div className="home-container">
      <div className="content">
        <div className="left-content">
          <h1 className="h1-intro">Hi, I am Sahar Dirani</h1>
          <h1 className="animation">WEB DEVELOPER.</h1>
          <p>I am a passionate Computer Scientist Graduate from the Lebanese American University seeking a development role. I am ready to apply robust programming knowledge to solve complex 
              problems, aiming for impactful contributions and growth. Brings a blend of team collaboration and strong communication skills, 
              enhancing group dynamics and project clarity. Proficient in analytical thinking and organizational strategies for efficient project 
              management. Displays leadership with a strategic approach to planning, aiming to contribute significantly and foster personal and 
              professional growth. 
          </p>
          
        </div>
        <div className="right-content">
          <img src={saharImage} alt="Profile" className="profile-pic" />
          <div className="social-media">
            <a href="https://www.instagram.com/sahardirani_" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/sahar-dirani" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon" />
            </a>
            <a href="https://github.com/sahardirani" target="_blank" rel="noopener noreferrer">
              <FaGithub className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroContainer;