
import React from 'react';
import './Header.css';
import Video from '../videos/headerVideo.mp4';

const Header = () => {
  
  return (
    <div id ="Header" >
      <video autoPlay loop muted class ='videoStyle'>
        <source src={Video} type='video/mp4' />
      </video>
    </div>
  )
}

export default Header