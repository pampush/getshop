import React, { Ref } from 'react';

import { useArrowNavigation, navigationPosition } from '../contexts/ArrowNavigation';

interface NavigationLinkProps<T> {
  children: (ref: Ref<T>) => JSX.Element | JSX.Element[];
  navPosition: navigationPosition | Array<navigationPosition>;
}

/**
 * Main HOC for keyboard navigation.\
 * It wraps any HTMLElement.\
 * If context ActivePosition and wrapped element navPosition are equal then
 * focus and apply styles on it 
 * @param param0 
 * @returns 
 */
function NavigationLink<T extends HTMLElement>({ children, navPosition }: NavigationLinkProps<T>) {
  const elemRef = React.useRef<T | null>(null);
  const { activeElement, comparePositions } = useArrowNavigation();

  React.useEffect(() => {
    if (!elemRef) return;
    if (comparePositions(navPosition, activeElement)) {
      elemRef.current?.focus();
      elemRef.current?.classList.add('global__active');
    } else elemRef.current?.classList.remove('global__active');
  }, [activeElement]);

  return <>{children(elemRef)}</>;
}

export default NavigationLink;
