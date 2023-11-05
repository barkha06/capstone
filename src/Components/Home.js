import React from "react";
import BannerBackground from "../Assets/home-banner-background.jpeg";
//import BannerImage from "../Assets/home-banner-image.jpg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Home = () => {
  return (

    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        
        <div className="home-text-section">
          <h1 className="primary-heading">
            Automating the testing of host systems
          </h1>
          <p className="primary-text">
            
            Here the application checks for vulnerabilties and exploits using 
            Artificial Intelligence.
          </p>
          
        </div>
        <div className="home-image-section">
          <img src={BannerBackground} alt="" />
        </div>
        
      </div>
      <Link to="/test">
      <button className='red-button'> Pentest Tool </button>
      </Link>
    </div>
  );
};

export default Home;
