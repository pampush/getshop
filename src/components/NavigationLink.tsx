import React, { Ref } from 'react';

import { useArrowNavigation, navigationPosition } from '../contexts/ArrowNavigation';

interface NavigationLinkProps<T> {
  children: (ref: Ref<T>) => JSX.Element | JSX.Element[];
  navPosition: navigationPosition | Array<navigationPosition>;
}

function NavigationLink<T extends HTMLElement>({ children, navPosition }: NavigationLinkProps<T>) {
  const elemRef = React.useRef<T>(null);
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
