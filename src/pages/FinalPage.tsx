import React from 'react';

import Aside from '../components/Aside';
import CloseButton from '../components/CloseButton';
import QRBlock from '../components/QRBlock';
import ArrowNavigation from '../contexts/ArrowNavigation';

function FinalPage() {
  return (
    <div className="final">
      <ArrowNavigation initialActiveElement={[2, 2]} gridSize={[3, 3]}>
        <CloseButton
          navPosition={[
            [1, 1],
            [1, 2],
            [1, 3],
            [2, 1],
            [2, 3],
            [3, 1],
            [3, 2],
            [3, 3],
          ]}
        />
      </ArrowNavigation>
      <Aside modifier="aside__final">
        <div className="final__title">Заявка принята</div>
        <div className="final__description">
          Держите телефон под рукой.
          <br /> Cкоро с Вами свяжется наш менеджер.
        </div>
      </Aside>

      <div className="mobile__qr">
        <QRBlock />
      </div>
    </div>
  );
}

export default FinalPage;
