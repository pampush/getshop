import React from 'react';

import { navigationPosition } from '../../contexts/ArrowNavigation';
import useNavigationLink from '../../hooks/useNavigationLink';

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
  const { elemRef } = useNavigationLink<HTMLButtonElement>(navPosition, 'global__active');

  const onClick = () => {
    handleClick(content);
  };

  return (
    <button ref={elemRef} className="mobile__cell" onClick={onClick} aria-label={content}>
      {content}
    </button>
  );
}

export default FormCell;
