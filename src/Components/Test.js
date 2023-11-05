// Test.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Test() {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = () => {
    alert(`You entered: ${inputText}`);
  };

  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Enter the IP Address</h1>
       <div className="box-container">
        <input
          className="custom-input"
          type="text"
          placeholder="Example: 0.0.0.0"
          value={inputText}
          onChange={handleInputChange}
        />
        <br />
        <Link to="/loading">
        <button onClick={handleSubmit} className="custom-input" style={{'width':'100px','color':'black','margin-left':'600px','margin-top':'70px'}}>SUBMIT</button>
        </Link>
        </div>
    </div>
  );
}

export default Test;
