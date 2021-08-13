
import React from 'react';
import './Software.css';
import Illustrator from '../images/illustrator.png';
import Photoshop from '../images/photoshop.png';
import XD from '../images/xd.png';
import VisualStudio from '../images/visualStudio.png';
import VsCode from '../images/vscode.png';
import AndroidStudio from '../images/androidStudio.png';
import Autocad from '../images/Autocad.png';

const Software = () => {
  return (
    <div id="Software" class ="SoftwareStyle">
      <h3>Good level with</h3><br /><br />
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={Illustrator} class="d-block w-100" alt="illustrator"/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Illustrator</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img src={Photoshop} class="d-block w-100" alt="photoshop"/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Photoshop</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img src={XD} class="d-block w-100" alt="XD"/>
            <div class="carousel-caption d-none d-md-block">
              <h5>XD</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img src={VisualStudio} class="d-block w-100" alt="VisualStudio"/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Visual Studio</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img src={VsCode} class="d-block w-100" alt="VsCode"/>
            <div class="carousel-caption d-none d-md-block">
              <h5>VS Code</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img src={AndroidStudio} class="d-block w-100" alt="Android Studio"/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Android Studio</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img src={Autocad} class="d-block w-100" alt="Autocad"/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Autocad</h5>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Software
