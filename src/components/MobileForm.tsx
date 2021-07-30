import React, { KeyboardEvent } from 'react';
import { navigationPosition } from '../contexts/ArrowNavigation';

import FormCell from './MobileForm/FormCell';
import FormDelete from './MobileForm/FormDelete';
import FormField, { useFormField } from './MobileForm/FormField';

interface MobileFormProps {
  text: string;
  changeText: React.Dispatch<React.SetStateAction<string>>;
  format: string;
  errors: string;
}

/**
 * Container for form components.\
 * Loop through 1-9 FromCell is possible, but I don't care
 *
 * @param param0
 * @returns
 */
function MobileForm({ text, changeText, format, errors }: MobileFormProps) {
  const { matchLength } = useFormField(format);

  const handleClick = (char: string) => {
    if (text.length && text.length >= matchLength) return;

    changeText((prev) => prev.concat(char));
  };

  const handleDelete = () => {
    changeText((prev) => prev.slice(0, -1));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Backspace') handleDelete();
    if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(e.key)) handleClick(e.key);
  };

  return (
    <>
      <div className={`mobile__field ${errors ? 'mobile__field_error' : ''}`}>
        <FormField value={text} format={format} />
      </div>

      <span className="mobile__description">
        и с Вами свяжется наш менеджер для дальнейшей консультации
      </span>

      <div className="mobile__panel" onKeyDown={handleKeyDown}>
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
