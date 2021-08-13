
import React from 'react';
import './ToTop.css';
import ToTopIcon from '../images/arrow-up-c.png';

const ToTop = () => {
  return (
  <div class="toTop">
    <a href="#">
      <img class="toTopIcon" src={ToTopIcon} title="To Top"/>
    </a>
  </div>
  )
}

export default ToTop
