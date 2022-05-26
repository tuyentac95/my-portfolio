import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import Instagram from '../../img/instagram.png';
import LinkedIn from '../../img/linkedin.png'

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi! I am</span>
          <span>Tuyen Pham</span>
          <span>Java Developer, Data Engineer</span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <img src={Github} alt=""/>
          <img src={Instagram} alt=""/>
          <img src={LinkedIn} alt=""/>
        </div>
      </div>
      <div className="i-right">
        Right side
      </div>
    </div>
  );
}

export default Intro;