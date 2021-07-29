import React, { Ref } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as CloseIcon } from '../assets/images/close.svg';
import NavigationLink from '../components/NavigationLink';
import Aside from '../components/Aside';
import QRBlock from '../components/QRBlock';
import ArrowNavigation from '../contexts/ArrowNavigation';

function FinalPage() {
  return (
    <div className="final">
      <ArrowNavigation initialActiveElement={[2, 2]} gridSize={[3, 3]}>
        <NavigationLink<HTMLAnchorElement>
          navPosition={[
            [1, 1],
            [1, 2],
            [1, 3],
            [2, 1],
            [2, 3],
            [3, 1],
            [3, 2],
            [3, 3],
          ]}>
          {(ref: Ref<HTMLAnchorElement>) => (
            <Link ref={ref} className="btn btn__close" to="/" tabIndex={0}>
              <CloseIcon />
            </Link>
          )}
        </NavigationLink>
      </ArrowNavigation>
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
