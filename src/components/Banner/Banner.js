import React, { useContext, useEffect, useState } from 'react';
import './Banner.css';
import { BannerContext } from "../../context/BannerContext";

function Banner() {
  const { message, setMessage } = useContext(BannerContext);

  useEffect(() => {
    setTimeout(() => {
      closeBanner();
    }, 3000);
  });

  function closeBanner() {
    setMessage(["darkgray", ""]);
  }

  if (message[1].length < 1) {
    return null;
  }

  return (
    <div id="Banner" style={{ backgroundColor: message[0] }}>
      <strong onClick={() => closeBanner()}>X</strong>
      <p>{message[1]}</p>
    </div>
  );
};

export default Banner;