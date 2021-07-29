import React, { Ref } from 'react';
import { Link } from 'react-router-dom';

import MobileForm from '../components/MobileForm';
import { ReactComponent as CloseIcon } from '../assets/images/close.svg';
import QRImage from '../assets/images/mobile-qr.png';
import ArrowNavigationProvider from '../contexts/ArrowNavigation';
import { useFormField } from '../components/MobileForm/FormField';
import Checkbox from '../components/Checkbox';
import NavigationLink from '../components/NavigationLink';

const format = '+7(___)___-__-__';

function MobilePage() {
  const [text, setText] = React.useState('');
  const [policyAgree, setPolicyAgree] = React.useState(false);
  const [errors] = React.useState('');

  const { matchLength } = useFormField(format);

  return (
    <ArrowNavigationProvider initialActiveElement={[1, 1]} gridSize={[6, 4]}>
      <div className="mobile">
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
            <Link ref={ref} className="btn mobile__close" to="/" tabIndex={0}>
              <CloseIcon />
            </Link>
          )}
        </NavigationLink>

        <div className="mobile__wrapper">
          <h2 className="mobile__title">Введите ваш номер мобильного телефона</h2>
          <MobileForm text={text} changeText={setText} format={format} />

          {!errors && (
            <Checkbox
              label="Согласие на обработку персональных данных"
              navPosition={[
                [5, 1],
                [5, 2],
                [5, 3],
              ]}
              policyAgree={policyAgree}
              handleChange={() => setPolicyAgree((prev) => !prev)}
            />
          )}

          <NavigationLink<HTMLAnchorElement>
            navPosition={[
              [6, 1],
              [6, 2],
              [6, 3],
            ]}>
            {(ref: Ref<HTMLAnchorElement>) => {
              const res =
                text.length === matchLength && policyAgree ? (
                  <Link ref={ref} className="btn mobile__submit" to="/" tabIndex={0}>
                    Подтвердить номер
                  </Link>
                ) : (
                  <Link
                    ref={ref}
                    className="btn mobile__submit mobile__submit_disable"
                    to="/mobile"
                    tabIndex={0}>
                    Подтвердить номер
                  </Link>
                );
              return res;
            }}
          </NavigationLink>
        </div>

        <div className="mobile__qr">
          <img src={QRImage} height={200} width={300}></img>
        </div>
      </div>
    </ArrowNavigationProvider>
  );
}

export default MobilePage;
