import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling
import node from "./assets/node.png";

import react from "./assets/react.png";
import mongoDB from "./assets/mongoDB.png";


const LogoDisplay = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="hoverable-div"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p>Hover over this div to see logos:</p>
      {isHovered && (
        <div className="logo-container bg-black">
        
        </div>
      )}
    </div>
  );
};

export default LogoDisplay;
