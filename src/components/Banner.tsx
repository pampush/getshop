import React from 'react';

import qrCode from '../assets/images/qr.jpg';

function Banner() {
  return (
    <div className="banner">
      <div className="banner__title"></div>
      <div className="banner__content">
        <img height="126px" width="126px" src={qrCode}></img>
        <span className="banner__details"></span>
      </div>
      <div className="banner__controls"></div>
    </div>
  );
}

export default Banner;
