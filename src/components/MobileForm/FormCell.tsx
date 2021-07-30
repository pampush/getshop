import React, { Ref } from 'react';

import { navigationPosition } from '../../contexts/ArrowNavigation';
import NavigationLink from '../NavigationLink';

interface FormCellProps {
  content: string;
  handleClick: (char: string) => void;
  navPosition: navigationPosition | Array<navigationPosition>;
}

/**
 * Component for user input. Button wrapped up with the NavigationLink HOC to apply keyboard
 * navigation
 * @param param0 
 * @returns 
 */
function FormCell({ content, handleClick, navPosition }: FormCellProps) {
  const onClick = () => {
    handleClick(content);
  };

  return (
    <NavigationLink<HTMLButtonElement> navPosition={navPosition}>
      {(ref: Ref<HTMLButtonElement>) => (
        <button ref={ref} className="mobile__cell" onClick={onClick} aria-label={content}>
          {content}
        </button>
      )}
    </NavigationLink>
  );
}

export default FormCell;
