
import React from 'react';
import $ from 'jquery';
import Navicon from './Navicon.js';
import Navpanel from './Navpanel.js';
import Logo from './Logo.js';
import './Navigation.css';

const Navigation = () => {

  let isOpen = false;

  function toggle() {
    if(!isOpen) {
      $('#Nav_panel').animate({top: 15}, 850, 'swing');
      $('.bar1').attr('style', 'transform: translateY(21px) rotate(-45deg); transition: transform .35s;');
      $('.bar2').attr('style','opacity:0;');
      $('.bar3').attr('style','transform: translateY(0px) rotate(45deg); transition: transform .42s;');
    }
    else {
      $('#Nav_panel').animate({top: -360}, 350, 'swing');
      $('.bar1').attr('style', 'transform: translateY(0px) rotate(0deg); transition: transform .35s;');
      $('.bar2').attr('style', 'opacity: 1;');
      $('.bar3').attr('style', 'transform: translateY(0px) rotate(0deg); transition: transform .35s;');
    }
    isOpen = !isOpen;
  } // toggle()

  return (
    <div>
      <Logo />
      <div id='Navbar'>
        <a href="" title ="home">Home</a>
        <a href="#About" title ="About">About</a>
        <a href="#ProgramingTools" title ="ProgramingTools">Tools</a>
        <a href="#Software" title ="Software">Software</a>
        <a href="#Apps" title ="Apps">App's</a>
        <a href="#Contact" title ="Contact">Contact</a>
      </div>
      <div id = 'Mobile_nav' >
        <Navicon tog={toggle} />
        <Navpanel tog={toggle} />
      </div>
    </div>
  )
}

export default Navigation
