import React from 'react';
import { Link } from 'react-router-dom';

import MobileForm from '../components/MobileForm';
import { ReactComponent as CloseIcon } from '../assets/images/close.svg';
import QRImage from '../assets/images/mobile-qr.png';

import { useFormField } from '../components/MobileForm/FormField';

const format = '+7(___)___-__-__';

function MobilePage() {
  const [text, setText] = React.useState('');
  const [policyAgree, setPolicyAgree] = React.useState(false);
  const [errors] = React.useState('');

  const { matchLength } = useFormField(format);

  return (
    <div className="mobile">
      <Link className="btn mobile__close" to="/main" tabIndex={0}>
        <CloseIcon />
      </Link>

      <div className="mobile__wrapper">
        <h2 className="mobile__title">Введите ваш номер мобильного телефона</h2>
        <MobileForm text={text} changeText={setText} format={format} />

        {!errors && (
          <div className="mobile__checkbox-container">
            <label className="checkbox mobile__checkbox" tabIndex={0}>
              <input
                type="checkbox"
                className="checkbox__input"
                checked={policyAgree}
                onChange={() => setPolicyAgree((prev) => !prev)}></input>
              <span className="checkbox__checkmark"></span>
            </label>
            <span>Согласие на обработку персональных данных</span>
          </div>
        )}

        <Link
          className={`btn mobile__submit ${
            text.length !== matchLength || !policyAgree ? 'mobile__submit_disable' : ''
          }`}
          to="/main"
          tabIndex={0}>
          Подтвердить номер
        </Link>
      </div>

      <div className="mobile__qr">
        <img src={QRImage} height={200} width={300}></img>
      </div>
    </div>
  );
}

export default MobilePage;
