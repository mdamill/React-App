import React from 'react';
import logo from '../images/Amil.svg'; // or Amil.png

function Logo({ width = "100px" }) {
  return <img src={logo} alt="Logo" style={{ width }} />;
}

export default Logo;
