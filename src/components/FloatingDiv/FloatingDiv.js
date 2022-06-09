import React, {useContext} from 'react';
import './FloatiingDiv.css';
import {themeContext} from "../../util/Context";

const FloatingDiv = ({image, txt1, txt2}) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="floating-div">
      <img src={image} alt=""/>
      <span>
        {txt1}
        <br/>
        {txt2}
      </span>
    </div>
  );
}

export default FloatingDiv;