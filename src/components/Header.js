import React from 'react';
import config from '../../config';
import icon from '../assets/images/icon.png';

export default function Header() {
  return (
    <div id="header">
      <span className="icon">
        <img src={icon} alt="" />
      </span> 
      {/* <h1>{config.heading}</h1> */}
      <p>{config.subHeading}</p>
    </div>
  );
}
