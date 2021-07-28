import React, { Ref } from 'react';
import { Link } from 'react-router-dom';

import qrCode from '../assets/images/qr.jpg';
import NavigationLink from './NavigationLink';

function Banner() {
  return (
    <div className="banner main__banner">
      <h2 className="banner__title banner__title_wrapper">
        Исполните мечту вашего малыша! Подарите ему собаку!
      </h2>

      <div className="banner__content banner__content_wrapper">
        <img className="banner__image" height="126px" width="126px" src={qrCode}></img>
        <div className="banner__details">Сканируйте QR-код или нажмите OK</div>
      </div>
      <NavigationLink<HTMLAnchorElement>
        navPosition={[
          [1, 2],
          [2, 1],
          [2, 3],
          [3, 2],
        ]}>
        {(ref: Ref<HTMLAnchorElement>) => (
          <Link ref={ref} className="btn banner__submit" to="/mobile">
            OK
          </Link>
        )}
      </NavigationLink>
    </div>
  );
}

export default Banner;
