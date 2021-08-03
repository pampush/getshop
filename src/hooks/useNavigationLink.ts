import React from 'react';

import { useArrowNavigation, navigationPosition } from '../contexts/ArrowNavigation';

type navPositionType = navigationPosition | Array<navigationPosition>;

const useNavigationLink = <T extends HTMLElement>(
  navPosition: navPositionType,
  style = 'global',
) => {
  const elemRef = React.useRef<T | null>(null);
  const { activeElement, comparePositions } = useArrowNavigation();

  React.useEffect(() => {
    if (!elemRef) return;
    console.log(navPosition, activeElement);

    if (comparePositions(navPosition, activeElement)) {
      console.log(elemRef.current);

      elemRef.current?.focus();
      elemRef.current?.classList.add(style);
    } else elemRef.current?.classList.remove(style);
  }, [activeElement]);

  return { elemRef };
};

export default useNavigationLink;
