import React from 'react';
import { Link } from 'react-router-dom';

import MobileForm from '../components/MobileForm';
import { ReactComponent as CloseIcon } from '../assets/images/close.svg';

function MobilePage() {
  return (
    <div className="mobile">
      <Link className="btn mobile__close" tabIndex={1} to="/main">
        <CloseIcon />
      </Link>
      <div className="mobile__wrapper">
        <h2 className="mobile__title">Введите ваш номер мобильного телефона</h2>
        <MobileForm />
        <div>
          <label className="checkbox">
            <input type="checkbox" className="checkbox__input"></input>
            <span className="checkbox__checkmark"></span>
            Согласие на обработку персональных данных
          </label>
        </div>
        <Link className="btn mobile__submit" tabIndex={1} to="/main">
          Подтвердить номер
        </Link>
      </div>
    </div>
  );
}

export default MobilePage;
