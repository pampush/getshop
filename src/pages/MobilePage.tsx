import React from 'react';
import MobileForm from '../components/MobileForm';

function MobilePage() {
  return (
    <div className="mobile">
      <div className="mobile__wrapper">
        <h2 className="mobile__title">Введите ваш номер мобильного телефона</h2>
        <MobileForm />
      </div>
    </div>
  );
}

export default MobilePage;
