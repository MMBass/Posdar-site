import React, { useContext, useEffect } from 'react';
import './Banner.css';
import { BannerContext } from "../../context/BannerContext";
import { HiX } from 'react-icons/hi';

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
      <strong onClick={() => closeBanner()}> <HiX></HiX></strong>
      <p>{message[1]}</p>
    </div>
  );
};

export default Banner;