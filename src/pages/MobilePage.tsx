import React from 'react';
import { Link } from 'react-router-dom';

import MobileForm from '../components/MobileForm';
import { ReactComponent as CloseIcon } from '../assets/images/close.svg';

function MobilePage() {
  return (
    <div className="mobile">
      <Link className="btn mobile__close" to="/main" tabIndex={0}>
        <CloseIcon />
      </Link>
      <div className="mobile__wrapper">
        <h2 className="mobile__title">Введите ваш номер мобильного телефона</h2>
        <MobileForm />
        <div className="mobile__checkbox-container">
          <label className="checkbox mobile__checkbox" tabIndex={0}>
            <input type="checkbox" className="checkbox__input" hidden></input>
            <span className="checkbox__checkmark"></span>
          </label>
          <span>Согласие на обработку персональных данных</span>
        </div>
        <Link className="btn mobile__submit" to="/main" tabIndex={0}>
          Подтвердить номер
        </Link>
      </div>
    </div>
  );
}

export default MobilePage;
