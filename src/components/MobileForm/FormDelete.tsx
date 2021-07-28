import React from 'react';

import { useArrowNavigation, navigationPosition } from '../../contexts/ArrowNavigation';

interface FormDeleteProps {
  content: string;
  handleDelete: () => void;
  navPosition: navigationPosition | Array<navigationPosition>;
}

function FormDelete({ content, handleDelete, navPosition }: FormDeleteProps) {
  const elemRef = React.useRef<HTMLButtonElement>(null);
  const { activeElement, comparePositions } = useArrowNavigation();

  React.useEffect(() => {
    if (!elemRef) return;
    if (comparePositions(navPosition, activeElement)) {
      elemRef.current?.focus();
      elemRef.current?.classList.add('global__active');
    } else elemRef.current?.classList.remove('global__active');
  }, [activeElement]);

  return (
    <button ref={elemRef} className="mobile__cell mobile__cell_span2" onClick={handleDelete}>
      {content}
    </button>
  );
}

export default FormDelete;
