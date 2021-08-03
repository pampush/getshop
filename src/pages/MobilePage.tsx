import React from 'react';
import { useHistory } from 'react-router-dom';

import MobileForm from '../components/MobileForm';

import Aside from '../components/Aside';
import ArrowNavigationProvider from '../contexts/ArrowNavigation';
import { useFormField } from '../components/MobileForm/FormField';
import Checkbox from '../components/Checkbox';
import QRBlock from '../components/QRBlock';
import { verify } from '../services/verifyNumberAPI';
import Notification from '../components/Notification';
import CloseButton from '../components/CloseButton';
import SubmitButton from '../components/SubmitButton';

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
        <CloseButton
          navPosition={[
            [1, 4],
            [2, 4],
            [3, 4],
            [4, 4],
            [5, 4],
            [6, 4],
          ]}
        />

        <Aside>
          <h2 className="mobile__title">Введите ваш номер мобильного телефона</h2>

          <MobileForm text={text} changeText={setText} format={format} errors={errors} />

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

          <SubmitButton
            handleSubmit={handleSubmit}
            disabled={text.length === matchLength && policyAgree}
          />
        </Aside>

        <div className="mobile__qr">
          <QRBlock />
        </div>
      </div>
    </ArrowNavigationProvider>
  );
}

export default MobilePage;
