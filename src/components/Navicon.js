
import React from 'react';
import './Navicon.css';

const Navicon = (props) => {

  return (
    <div id='navicon' class ='mobile_icon' onClick={() => props.tog('')}>
      <div id='bar' class ='bar1'></div>
      <div id='bar' class ='bar2'></div>
      <div id='bar' class ='bar3'></div>
    </div>
  )
}

export default Navicon