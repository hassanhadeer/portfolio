
import React from 'react';
import './ProgramingTools.css';
import HTMLIcon from '../images/html.png';
import CSSIcon from '../images/css.png';
import CIcon from '../images/c.png';
import JavaIcon from '../images/java.png';
import JavaScriptIcon from '../images/javaScript.png';
import JQueryIcon from '../images/jQuery.png';
import LinuxIcon from '../images/Linux.png';
import MVCIcon from '../images/MVC.png';
import NetcoreIcon from '../images/netcore.png';
import PHPIcon from '../images/PHP.png';
import SQLIcon from '../images/sql.png';
import ReactIcon from '../images/react.png';
import IOS from '../images/ios.png';
import PythonIcon from '../images/Python.png';

const ProgramingTools = () => {
  return (
    <div id ="ProgramingTools" class ="ProgramingToolsStyle">
      <h3>Programing Tools</h3>
      <img src={HTMLIcon} alt="HTML5" class="programTools"/>
      <img src={CSSIcon} alt="CSS" class="programTools"/>
      <img src={CIcon} alt="C#" class="programTools"/>
      <img src={JavaIcon} alt="Java" class="programTools"/>
      <img src={JavaScriptIcon} alt="JavaScript" class="programTools"/>
      <img src={JQueryIcon} alt="JQuery" class="programTools"/>
      <img src={LinuxIcon} alt="Linux" class="programTools"/>
      <img src={MVCIcon} alt="MVC" class="programTools"/>
      <img src={NetcoreIcon} alt="Netcore" class="programTools"/>
      <img src={PHPIcon} alt="PHP" class="programTools"/>
      <img src={SQLIcon} alt="SQL" class="programTools"/>
      <img src={ReactIcon} alt="React" class="programTools"/>
      <img src={IOS} alt="IOS" class="programTools"/>
      <img src={PythonIcon} alt="Python " class="programTools"/>
    </div>
  )
}

export default ProgramingTools
