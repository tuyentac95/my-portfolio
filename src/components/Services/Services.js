import React from 'react';
import './Service.css';
import Heart from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from "../Card/Card";

const Services = () => {
  return (
    <div className="services">
      <div className="awesome">
        <span>My Awesome</span>
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
        <div style={{
          left: '30rem'
        }}>
          <Card emoji={Heart}
                heading={'Design'}
                detail={"Figma, Sketch, Photoshop, Adobe"}/>
        </div>

        <div style={{
          left: '8rem',
          top: '12rem'
        }}>
          <Card emoji={Glasses}
                heading={'Developer'}
                detail={"Java, Scala, Javascript"}/>
        </div>

        <div style={{
          left: '27rem',
          top: '19rem'
        }}>
          <Card emoji={Humble}
                heading={'UI/UX'}
                detail={"Something in UI UX but i don't know "}/>
        </div>

        <div className="blur s-blur2" style={{
          background: "var(--purple)"
        }}/>
      </div>
    </div>
  );
}

export default Services;