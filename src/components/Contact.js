
import React from 'react';
import './Contact.css';

const Contact = () => {

  return (
  <div id = "Contact" class="contactStyle">
    <div >
      <iframe class="map" 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d186904.77250529063!2d-81.38870427255542!3d42.94904690920015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ef20ea88d9b0b%3A0x28c7d7699a056b95!2sLondon%2C%20ON!5e0!3m2!1sen!2sca!4v1599526447883!5m2!1sen!2sca">
      </iframe>
    </div>
    <div class="contactDetails">
      <h3>Hassan Hadeer</h3>
      <p>London Ontario</p>
      <p>Canada</p>
      <p>+1(519)697-7700</p>
      <a href="mailto:contact@hassanhadeer.com" target="_top" ><p>contact@hassanhadeer.com</p></a> 
    </div>
  </div>
  )
}

export default Contact
