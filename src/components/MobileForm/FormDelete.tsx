import React from 'react';

import { navigationPosition } from '../../contexts/ArrowNavigation';
import useNavigationLink from '../../hooks/useNavigationLink';

interface FormDeleteProps {
  content: string;
  handleDelete: () => void;
  navPosition: navigationPosition | Array<navigationPosition>;
}

/**
 * Differs from FormCell component. Button wrapped up with the NavigationLink HOC to apply keyboard
 * navigation
 * @param param0
 * @returns
 */
function FormDelete({ content, handleDelete, navPosition }: FormDeleteProps) {
  const { elemRef } = useNavigationLink<HTMLButtonElement>(navPosition, 'global__active');

  return (
    <button
      ref={elemRef}
      className="mobile__cell mobile__cell_span2"
      onClick={handleDelete}
      aria-label={content}>
      {content}
    </button>
  );
}

export default FormDelete;
