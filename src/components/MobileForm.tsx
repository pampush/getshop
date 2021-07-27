import React from 'react';

import FormCell from './MobileForm/FormCell';

function MobileForm() {
  return (
    <div className="mobile__panel">
      <FormCell content="1" />
      <FormCell content="2" />
      <FormCell content="3" />
      <FormCell content="4" />
      <FormCell content="5" />
      <FormCell content="6" />
      <FormCell content="7" />
      <FormCell content="8" />
      <FormCell content="9" />
      <FormCell content="СТЕРЕТЬ" span={2}/>
      <FormCell content="0" />
    </div>
  );
}

export default MobileForm;
