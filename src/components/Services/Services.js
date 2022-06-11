import React, {useContext} from 'react';
import './Service.css';
import Heart from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from "../Card/Card";
import {themeContext} from "../../util/Context";
import {motion} from "framer-motion";

const Services = () => {

  const transition = {
    duration: 1,
    type: 'spring'
  }

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id='Services'>
      <div className="awesome">
        <span style={{
          color: darkMode ? 'white' : ''
        }}>My Awesome</span>
        <span>services</span>
        <span>Something in here that description my own services
          <br/>
          And something i don't know what it is
        </span>
        <button className="button s-button">Download CV</button>
        <div className="blur s-blur1" style={{
          background: "#ABF1FF94"
        }}/>
      </div>

      <div className="cards">
        <motion.div
          initial={{left: '34rem', top: '1rem'}}
          whileInView={{left: '28rem'}}
          transition={transition}
        >
          <Card emoji={Heart}
                heading={'Design'}
                detail={"Figma, Sketch, Photoshop, Adobe"}/>
        </motion.div>

        <motion.div
          initial={{left: '-4rem', top: '12rem'}}
          whileInView={{left: '5rem'}}
          transition={transition}
        >
          <Card emoji={Glasses}
                heading={'Developer'}
                detail={"Java, Scala, Javascript"}/>
        </motion.div>

        <motion.div
          initial={{left: '12rem', top: '19rem'}}
          whileInView={{left: '24rem'}}
          transition={transition}
        >
          <Card emoji={Humble}
                heading={'UI/UX'}
                detail={"Something in UI UX but i don't know "}/>
        </motion.div>

        <div className="blur s-blur2" style={{
          background: "var(--purple)"
        }}/>
      </div>
    </div>
  );
}

export default Services;