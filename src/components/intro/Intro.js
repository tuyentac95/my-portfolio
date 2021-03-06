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
import {motion} from 'framer-motion';

const Intro = () => {

  const transition = {duration: 2, type: 'spring'}

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

        <motion.img
          initial={{left: '-36%'}}
          whileInView={{left: '-24%'}}
          transition={transition}
          src={glasses} alt=""/>

        <motion.div
          initial={{top: '-4%', left: '-68%'}}
          whileInView={{left: '68%'}}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer"/>
        </motion.div>

        <motion.div
          initial={{top: '18rem', left: '9rem'}}
          whileInView={{left: '0rem'}}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv image={thumb} txt1="Best Design" txt2="Award"/>
        </motion.div>
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