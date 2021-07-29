import React, { Ref } from 'react';
import { Link, useHistory } from 'react-router-dom';

import MobileForm from '../components/MobileForm';
import { ReactComponent as CloseIcon } from '../assets/images/close.svg';
import Aside from '../components/Aside';
import ArrowNavigationProvider from '../contexts/ArrowNavigation';
import { useFormField } from '../components/MobileForm/FormField';
import Checkbox from '../components/Checkbox';
import NavigationLink from '../components/NavigationLink';
import QRBlock from '../components/QRBlock';
import { verify } from '../services/verifyNumberAPI';
import Notification from '../components/Notification';

const format = '+7(___)___-__-__';

function MobilePage() {
  const [text, setText] = React.useState('');
  const [policyAgree, setPolicyAgree] = React.useState(false);
  const [errors, setErrors] = React.useState('');
  const history = useHistory();

  const { matchLength } = useFormField(format);

  async function handleSubmit() {
    try {
      const res = await verify(text, 'RU');
      if (res.valid) history.push('/final');
    } catch (error) {
      setErrors(error.message);
      console.error(error.message);
    }
  }

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
            <Link ref={ref} className="btn btn__close" to="/" tabIndex={0}>
              <CloseIcon />
            </Link>
          )}
        </NavigationLink>

        <Aside>
          <h2 className="mobile__title">Введите ваш номер мобильного телефона</h2>

          <MobileForm text={text} changeText={setText} format={format} errors={errors }/>

          {!errors ? (
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
          ) : (
            <Notification
              onClose={() => setErrors('')}
              duration={3000}
              content={errors}
              type="error"
            />
          )}

          <NavigationLink<HTMLButtonElement>
            navPosition={[
              [6, 1],
              [6, 2],
              [6, 3],
            ]}>
            {(ref: Ref<HTMLButtonElement>) => {
              const res =
                text.length === matchLength && policyAgree ? (
                  <button
                    ref={ref}
                    className="btn mobile__submit"
                    onClick={handleSubmit}
                    tabIndex={0}>
                    Подтвердить номер
                  </button>
                ) : (
                  <button
                    ref={ref}
                    className="btn mobile__submit mobile__submit_disable"
                    tabIndex={0}>
                    Подтвердить номер
                  </button>
                );

              return res;
            }}
          </NavigationLink>
        </Aside>

        <div className="mobile__qr">
          <QRBlock />
        </div>
      </div>
    </ArrowNavigationProvider>
  );
}

export default MobilePage;
