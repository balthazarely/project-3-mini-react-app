import React from 'react';
import logo from '../Artboard2.png'; // Tell Webpack this JS file uses this image


function Logo() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}

export default Logo;
