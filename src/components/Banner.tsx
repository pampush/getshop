import React from 'react';

import qrCode from '../assets/images/qr.jpg';

function Banner() {
  return (
    <div className="banner main__banner">
      <div className="banner__title banner__title_wrapper">
        Исполните мечту вашего малыша! Подарите ему собаку!
      </div>

      <div className="banner__content banner__content_wrapper">
        <img className="banner__image" height="126px" width="126px" src={qrCode}></img>
        <div className="banner__details">Сканируйте QR-код или нажмите OK</div>
      </div>

      <a className="banner__submit" tabIndex={1}>
        OK
      </a>
    </div>
  );
}

export default Banner;
