import React from 'react';

import { useArrowNavigation } from '../../contexts/ArrowNavigation';

interface FormCellProps {
  content: string;
  handleClick: (char: string) => void;
  navPosition: number[];
}

function FormCell({ content, handleClick, navPosition }: FormCellProps) {
  const { activeElement, comparePositions } = useArrowNavigation();
  console.log(activeElement, navPosition);

  const onClick = () => {
    handleClick(content);
  };

  return (
    <button
      className={`mobile__cell ${
        comparePositions(activeElement, navPosition) ? 'global__active' : ''
      }`}
      onClick={onClick}>
      {content}
    </button>
  );
}

export default FormCell;
