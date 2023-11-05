import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Quality</span>
          <span>Help</span>
          <span>Safety and Responsibiliy</span>
          <span>Research</span>
          
          <span>Work</span>
        </div>
        <div className="footer-section-columns">
          <span> CONTACT :</span>
          <span>anavi.20029@gmail.com</span>
          <span>barkhagoyal2002@gmail.com</span>
          <span>udupa.anish@gmail.com</span>
          <span>sanjanapaik1804@gmail.com</span>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
