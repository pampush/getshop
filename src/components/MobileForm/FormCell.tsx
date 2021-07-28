import React, { Ref } from 'react';

import { navigationPosition } from '../../contexts/ArrowNavigation';
import NavigationLink from '../NavigationLink';

interface FormCellProps {
  content: string;
  handleClick: (char: string) => void;
  navPosition: navigationPosition | Array<navigationPosition>;
}

function FormCell({ content, handleClick, navPosition }: FormCellProps) {
  const onClick = () => {
    handleClick(content);
  };

  return (
    <NavigationLink<HTMLButtonElement> navPosition={navPosition}>
      {(ref: Ref<HTMLButtonElement>) => (
        <button ref={ref} className="mobile__cell" onClick={onClick}>
          {content}
        </button>
      )}
    </NavigationLink>
  );
}

export default FormCell;
