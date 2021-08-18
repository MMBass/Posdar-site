import React, { useContext, useEffect, useState } from 'react';
import './Banner.css';
import { BannerContext } from "../../BannerContext";

function Banner() {
  const { message, setMessage } = useContext(BannerContext);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      closeBanner();
    }, 3000);
  });


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setScroll(window.pageYOffset > 140);
  };

  function closeBanner() {
    setMessage(["darkgray", ""]);
  }

  if (message[1].length < 1) {
    return null;
  }

  return (
    <div id="Banner" className={scroll ? "b-scroll" : ""} style={{ backgroundColor: message[0] }}>
      <strong onClick={() => closeBanner()}>X</strong>
      <p>{message[1]}</p>
    </div>
  );
};

export default Banner;