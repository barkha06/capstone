import React from "react";
//import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Why is Penetration Testing Important?
        </h1>
        <p className="primary-text">       
          Penetration testing, or pen testing, is essential for cybersecurity because 
          it allows organizations to proactively discover vulnerabilities in their systems 
          and networks, taking steps to prevent data breaches and enhance security. 
        </p>
        <p className="primary-text">
          It aids compliance, improves security measures, and builds trust with stakeholders.
           Additionally, it raises security awareness, validates investments, and offers a 
           cost-effective means of preventing security incidents.
        </p>
        
      </div>
    </div>
  );
};

export default About;
