import React from 'react';
import './Works.css';
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Facebook from '../../img/Facebook.png';
import Shopify from '../../img/Shopify.png';

const Works = () => {
  return (
    <div className="works">
      <div className="awesome">
        <span>Works for all of these</span>
        <span>Brand & Clients</span>
        <span>Something in here that description my own works
          <br/>
          And something i don't know what it is
          <br/>
          And something i don't know what it is but longer
          <br/>
          And something i don't know why
        </span>
        <button className="button s-button">Hire me</button>
        <div className="blur s-blur1" style={{
          background: "#ABF1FF94"
        }}/>
      </div>

      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} alt=""/>
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt=""/>
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt=""/>
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt=""/>
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt=""/>
          </div>

          <div className="w-backCircle blueCircle"/>
          <div className="w-backCircle yellowCircle"/>
        </div>
      </div>
    </div>
  );
}

export default Works;