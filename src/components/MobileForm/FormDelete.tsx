import React, { Ref } from 'react';

import { navigationPosition } from '../../contexts/ArrowNavigation';
import NavigationLink from '../NavigationLink';

interface FormDeleteProps {
  content: string;
  handleDelete: () => void;
  navPosition: navigationPosition | Array<navigationPosition>;
}

function FormDelete({ content, handleDelete, navPosition }: FormDeleteProps) {
  return (
    <NavigationLink<HTMLButtonElement> navPosition={navPosition}>
      {(ref: Ref<HTMLButtonElement>) => (
        <button
          ref={ref}
          className="mobile__cell mobile__cell_span2"
          onClick={handleDelete}
          aria-label={content}>
          {content}
        </button>
      )}
    </NavigationLink>
  );
}

export default FormDelete;
