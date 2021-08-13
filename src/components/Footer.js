
import React from 'react';
import './Footer.css';
import Resume from './AbuhadeerHassanResume.pdf';
import LinkedIn from '../images/social-linkedin-outline.png';
import CodepenIcon from '../images/codepenIcon.png';
import github from '../images/social-github-outline.png';

const Footer = () => {

  return (
    <div id ="Footer" class="footerStyle">
      <div class="footerDiv">
        <a href="" title ="home">Home</a><br/>
        <a href="#About" title ="About">About</a><br/>
        <a href="#ProgramingTools" title ="ProgramingTools">Tools</a><br/>
        <a href="#Software" title ="Software">Software</a><br/>
        <a href="#Apps" title ="Apps">App's</a><br/>
        <a href="#Contact" title ="Contact">Contact</a><br/>
      </div>
      <div class="footerDiv">
        <h6>Links</h6>
        <a href="https://tajow.ca/" target="_blank">Tajow</a><br/>
        <a href="http://www.canadianhospitalityservices.com/" target="_blank">Canadian Hospitality Services</a><br/>
        <a href="http://www.phoenix-swaida.com/" target="_blank">Phoenix Swaida</a><br/>
        <a href="http://cdtechnology.ca/" target="_blank">CDT</a><br/>
      </div>
      <div class="footerDiv">
        <h6>Download</h6>
        <a href="https://play.google.com/store/apps/details?id=com.cdt.just_math" target="_blank">Just Math</a><br/>
        <a class="animate__flash" href={Resume} target="_blank">Resume</a><br/>
      </div>
      <div class="footerDiv">
        <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BpT3ljQA4RGOVJhzKKWtinQ%3D%3D" target="_blank">
          <img class="socialIcons" src={LinkedIn} alt="linkedIn"/>
        </a><br/>
        <a href="https://codepen.io/HassanHadeer" target="_blank">
          <img class="socialIcons" src={CodepenIcon} alt="Code Pen"/>
        </a><br/>
        <a href="https://github.com/hassanhadeer" target="_blank">
          <img class="socialIcons" src={github} alt="Git hub"/>
        </a><br/><br/>
      </div>
    </div>
  )
}

export default Footer
