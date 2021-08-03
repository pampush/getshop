import React from 'react';
import { Link } from 'react-router-dom';

import qrCode from '../assets/images/qr.jpg';
import useNavigationLink from '../hooks/useNavigationLink';

/**
 *
 * @returns
 */
function Banner() {
  const { elemRef } = useNavigationLink<HTMLAnchorElement>(
    [
      [1, 1],
      [1, 2],
      [1, 3],
      [2, 1],
      [2, 3],
      [3, 1],
      [3, 2],
      [3, 3],
    ],
    'global__active',
  );

  return (
    <div className="banner main__banner">
      <h2 className="banner__title banner__title_wrapper">
        Исполните мечту вашего малыша! Подарите ему собаку!
      </h2>

      <div className="banner__content banner__content_wrapper">
        <img className="banner__image" height="126px" width="126px" src={qrCode}></img>
        <div className="banner__details">Сканируйте QR-код или нажмите OK</div>
      </div>

      <Link ref={elemRef} className="btn banner__submit" to="/mobile">
        OK
      </Link>
    </div>
  );
}

export default Banner;
