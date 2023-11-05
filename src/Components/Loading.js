import React from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';
import './Loading.css'; // Import a CSS file for styling
import { Link } from 'react-router-dom';
function Loading() {
  return (
    <div className="loading-container">
      <p className="primary-heading">Processing your request</p>
      <div className="loading-spinner">
        <PropagateLoader
          size={25}
          aria-label="Processing your request"
          loading={true}
          color="#fe9e0d"
        />
      </div>
      <Link to="/report">
        <button  className="custom-input" style={{'width':'100px','color':'black','margin-left':'600px','margin-top':'70px'}}>NEXT</button>
        </Link>
    </div>
  );
}

export default Loading;
