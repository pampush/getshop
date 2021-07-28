import React from 'react';

import { useArrowNavigation, navigationPosition } from '../../contexts/ArrowNavigation';

interface FormCellProps {
  content: string;
  handleClick: (char: string) => void;
  navPosition: navigationPosition | Array<navigationPosition>;
}

function FormCell({ content, handleClick, navPosition }: FormCellProps) {
  const elemRef = React.useRef<HTMLButtonElement>(null);
  const { activeElement, comparePositions } = useArrowNavigation();

  React.useEffect(() => {
    if (!elemRef) return;
    if (comparePositions(navPosition, activeElement)) {
      elemRef.current?.focus();
      elemRef.current?.classList.add('global__active');
    } else elemRef.current?.classList.remove('global__active');
  }, [activeElement]);

  const onClick = () => {
    handleClick(content);
  };

  return (
    <button ref={elemRef} className="mobile__cell" onClick={onClick}>
      {content}
    </button>
  );
}

export default FormCell;
