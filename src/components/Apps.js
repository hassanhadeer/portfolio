
import React from 'react'
import './Apps.css';
import rightArrow from '../images/arrow-right-a.png'
import Tajow from '../images/Tajow.png';
import CHS from '../images/CHS.png';
import underConstruction from '../images/underConstruction.png';
import JustMath from '../images/JustMath.png';

const Apps = () => {
  return (
    <div id="Apps" class="appsStyle">
      <h3>Some of my works</h3><br /><br />

      <div class="card">
        <div class="cardImage">
          <img src={Tajow} title="Tajow"/>
        </div>
        <div class="cardText">
          <h3>Tajow</h3>
          <p>Online Store</p>
        </div>
        <div class="arrowBox">
          <img class="rightArrow" src={rightArrow} title="Right Arrow"/>
        </div>
        <div class="targetLink">
          <a href="https://tajow.ca/" target="_blank">Visit now</a>
        </div>
      </div>

      <div class="card">
        <div class="cardImage">
          <img src={CHS} title="Canadian Hospitality Services"/>
        </div>
        <div class="cardText">
          <h3>CHS</h3>
          <p>Hospitality Service Company</p>
        </div>
        <div class="arrowBox">
          <img class="rightArrow" src={rightArrow} title="Right Arrow"/>
        </div>
        <div class="targetLink">
          <a href="http://www.canadianhospitalityservices.com/" target="_blank">Visit now</a>
        </div>
      </div>

      <div class="card">
        <div class="cardImage">
          <img src={underConstruction} title="phoenix-swaida"/>
        </div>
        <div class="cardText">
          <h3>Phoenix</h3>
          <p>Phoenix-Swaida,Interior design</p>
        </div>
        <div class="arrowBox">
          <img class="rightArrow" src={rightArrow} title="Right Arrow"/>
        </div>
        <div class="targetLink">
          <a href="http://www.phoenix-swaida.com/" target="_blank">Visit now</a>
        </div>
      </div>

      <div class="card">
        <div class="cardImage">
          <img src={underConstruction} title="Canadian Development Technology"/>
        </div>
        <div class="cardText">
          <h3>CDT</h3>
          <p>Web Development</p>
        </div>
        <div class="arrowBox">
          <img class="rightArrow" src={rightArrow} title="Right Arrow"/>
        </div>
        <div class="targetLink">
          <a href="http://cdtechnology.ca/" target="_blank">Visit now</a>
        </div>
      </div>

      <div class="card">
        <div class="cardImage">
          <img src={JustMath} title="Just Math"/>
        </div>
        <div class="cardText">
          <h3>Just Math</h3>
          <p>Android App</p>
        </div>
        <div class="arrowBox">
          <img class="rightArrow" src={rightArrow} title="Right Arrow"/>
        </div>
        <div class="targetLink">
          <a href="https://play.google.com/store/apps/details?id=com.cdt.just_math" target="_blank">Install now</a>
        </div>
      </div>
    </div>
  )
}

export default Apps
