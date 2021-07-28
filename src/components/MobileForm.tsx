import React from 'react';

import FormCell from './MobileForm/FormCell';
import FormDelete from './MobileForm/FormDelete';
import FormField, { useFormField } from './MobileForm/FormField';

const format = '+7(___)___-__-__';

function MobileForm() {
  const { matchLength } = useFormField(format);
  const [text, setText] = React.useState('');
  console.log(text);

  const handleClick = (char: string) => {
    if (text.length && text.length >= matchLength) return;
    setText((prev) => prev.concat(char));
  };

  const handleDelete = () => {
    setText((prev) => prev.slice(0, -1));
  };

  return (
    <>
      <FormField value={text} format={format} />
      <span className="mobile__description">
        и с Вами свяжется наш менеджер для дальнейшей консультации
      </span>
      <div className="mobile__panel">
        <FormCell content="1" handleClick={handleClick} />
        <FormCell content="2" handleClick={handleClick} />
        <FormCell content="3" handleClick={handleClick} />
        <FormCell content="4" handleClick={handleClick} />
        <FormCell content="5" handleClick={handleClick} />
        <FormCell content="6" handleClick={handleClick} />
        <FormCell content="7" handleClick={handleClick} />
        <FormCell content="8" handleClick={handleClick} />
        <FormCell content="9" handleClick={handleClick} />
        <FormDelete content="Стереть" handleDelete={handleDelete} />
        <FormCell content="0" handleClick={handleClick} />
      </div>
    </>
  );
}

export default MobileForm;
