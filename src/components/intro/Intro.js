import React, {useContext} from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import Instagram from '../../img/instagram.png';
import LinkedIn from '../../img/linkedin.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumb from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glasses from '../../img/glassesimoji.png';
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import {themeContext} from "../../util/Context";

const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{
            color: darkMode ? 'white' : ''
          }}>Hi! I am</span>
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
        <img src={Vector1} alt=""/>
        <img src={Vector2} alt=""/>
        <img src={boy} alt=""/>

        <img src={glasses} alt=""/>

        <div style={{top: '-4%', left: '68%'}} className="floating-div">
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer"/>
        </div>
        <div style={{top: '18rem', left: '0rem'}} className="floating-div">
          <FloatingDiv image={thumb} txt1="Best Design" txt2="Award"/>
        </div>
        <div className="blur" style={{background: "rgb(238 210 255"}}/>
        <div className="blur" style={{
          background: '#C1F5FF',
          top: '17rem',
          width: '21rem',
          height: '11rem',
          left: '-9rem'
        }}/>
      </div>
    </div>
  );
}

export default Intro;