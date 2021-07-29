import React, { Ref } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as CloseIcon } from '../assets/images/close.svg';
import NavigationLink from '../components/NavigationLink';
import Aside from '../components/Aside';
import QRBlock from '../components/QRBlock';

function FinalPage() {
  return (
    <div className="final">
      <NavigationLink<HTMLAnchorElement>
        navPosition={[
          [1, 4],
          [2, 4],
          [3, 4],
          [4, 4],
          [5, 4],
          [6, 4],
        ]}>
        {(ref: Ref<HTMLAnchorElement>) => (
          <Link ref={ref} className="btn btn__close" to="/" tabIndex={0}>
            <CloseIcon />
          </Link>
        )}
      </NavigationLink>
      <Aside modifier="aside__final">
        <div className="final__title">Заявка принята</div>
        <div className="final__description">
          Держите телефон под рукой.
          <br /> Cкоро с Вами свяжется наш менеджер.{' '}
        </div>
      </Aside>

      <div className="mobile__qr">
        <QRBlock />
      </div>
    </div>
  );
}

export default FinalPage;
