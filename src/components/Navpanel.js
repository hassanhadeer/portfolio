
import React from 'react';
import './Navpanel.css';

const Navpanel = (props) => {

  return (
    <div id = 'Nav_panel' class ="nav_panel">
      <div onClick={()=> props.tog('')}>
        <a class ="link_style" href="#" title="Home">Home</a><br/>
      </div>
      <div onClick={()=> props.tog('')}>
        <a class ="link_style" href="#About" title="About">About</a><br/>
      </div>
      <div onClick={()=> props.tog('')}>
        <a class ="link_style" href="#ProgramingTools" title="ProgramingTools">Tools</a><br/>
      </div>
      <div onClick={()=> props.tog('')}>
        <a class ="link_style" href="#Software" title="Software">Software</a><br/>
      </div>
      <div onClick={()=> props.tog('')}>
        <a class ="link_style" href="#Apps" title="Apps">App's</a><br/>
      </div>
      <div onClick={()=> props.tog('')}>
        <a class ="link_style" href="#Contact" title="Contact">Contact</a><br/>
      </div>
    </div>
  )
}

export default Navpanel
