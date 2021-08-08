import React, { useContext, useState } from 'react';
import './Banner.css';
import {BannerContext} from "../../BannerContext";

function Banner() {
  const {message, setMessage} = useContext(BannerContext);
  
  if(message[1].length < 1){
    return null;
  }

  return (
    <div id="Banner" style={{backgroundColor:message[0]}}>
          <strong onClick={()=>setMessage(["darkgray",""])}>X</strong> 
          <p>{message[1]}</p>
    </div>
  );
};

export default Banner;