import React from "react";
import ProfilePic from "../Assets/john-doe-image.jpg";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Safety and Responsibiliy</p>
        <h1 className="primary-heading">What do we ensure?</h1>
        <p className="primary-text">
          This tool will only be used for pentesting hosts for professional purpose.
          The tool will not be used to serve the malicious hackers and would 
          ensure there is no breach in data.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        
        
        
      </div>
    </div>
  );
};

export default Testimonial;
