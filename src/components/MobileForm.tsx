import React from 'react';
import { navigationPosition } from '../contexts/ArrowNavigation';

import FormCell from './MobileForm/FormCell';
import FormDelete from './MobileForm/FormDelete';
import FormField, { useFormField } from './MobileForm/FormField';

interface MobileFormProps {
  text: string;
  changeText: React.Dispatch<React.SetStateAction<string>>;
  format: string;
}

function MobileForm({ text, changeText, format }: MobileFormProps) {
  const { matchLength } = useFormField(format);

  const handleClick = (char: string) => {
    if (text.length && text.length >= matchLength) return;
    changeText((prev) => prev.concat(char));
  };

  const handleDelete = () => {
    changeText((prev) => prev.slice(0, -1));
  };


  return (
    <>
      <FormField value={text} format={format} />
      <span className="mobile__description">
        и с Вами свяжется наш менеджер для дальнейшей консультации
      </span>
      <div className="mobile__panel">
        <FormCell content="1" handleClick={handleClick} navPosition={[1, 1]} />
        <FormCell content="2" handleClick={handleClick} navPosition={[1, 2]} />
        <FormCell content="3" handleClick={handleClick} navPosition={[1, 3]} />
        <FormCell content="4" handleClick={handleClick} navPosition={[2, 1]} />
        <FormCell content="5" handleClick={handleClick} navPosition={[2, 2]} />
        <FormCell content="6" handleClick={handleClick} navPosition={[2, 3]} />
        <FormCell content="7" handleClick={handleClick} navPosition={[3, 1]} />
        <FormCell content="8" handleClick={handleClick} navPosition={[3, 2]} />
        <FormCell content="9" handleClick={handleClick} navPosition={[3, 3]} />
        <FormDelete
          content="Стереть"
          handleDelete={handleDelete}
          navPosition={
            [
              [4, 1],
              [4, 2],
            ] as navigationPosition[]
          }
        />
        <FormCell content="0" handleClick={handleClick} navPosition={[4, 3]} />
      </div>
    </>
  );
}

export default MobileForm;
