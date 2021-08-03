import React from 'react';

export type navigationPosition = number[];

interface ArrowNavigationContextProps {
  activeElement: navigationPosition;
  setActiveElement: React.Dispatch<React.SetStateAction<navigationPosition>>;
  comparePositions: (
    pos1: navigationPosition | Array<navigationPosition>,
    active: navigationPosition,
  ) => boolean;
}

export const ArrowNavigationContext = React.createContext<ArrowNavigationContextProps>({
  activeElement: [],
  setActiveElement: (prev) => prev,
  comparePositions: (pos1, active) => pos1[0] === active[0] && pos1[1] === active[2],
});

interface ArrowNavigationProps {
  children: JSX.Element[] | JSX.Element;
  initialActiveElement: navigationPosition;
  gridSize: number[];
}

/**
 * Context for keyboard navigation.
 * All navigable elements has position in grid. This context change activeElement position by every arrow key event,
 * trigger children rerender and then compare new aciveElement position with assigned children positions.
 * @param param0
 * @returns
 */
function ArrowNavigationProvider({
  children,
  initialActiveElement,
  gridSize,
}: ArrowNavigationProps) {
  const [activeElement, setActiveElement] =
    React.useState<navigationPosition>(initialActiveElement);

  console.log(activeElement);

  /**
   *
   * @param pos1
   * @param active
   * @returns
   */
  const comparePositions = (
    pos1: navigationPosition | Array<navigationPosition>,
    active: navigationPosition,
  ): boolean => {
    let result = false;

    if (!(pos1[0] && pos1[1] && active[0] && active[1])) return false;

    for (let i = 0; i < pos1.length; i++) {
      const curr = pos1[i];
      if (Array.isArray(curr)) result = curr[0] === active[0] && curr[1] === active[1];
      else result = pos1[0] === active[0] && pos1[1] === active[1];

      if (result) return true;
    }

    return result;
  };

  /**
   *
   * @param pos
   * @returns
   */
  const boundsCheck = (pos: number[]) => {
    return gridSize[0] >= pos[0] && gridSize[1] >= pos[1] && pos[0] > 0 && pos[1] > 0;
  };

  React.useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      switch (e.key) {
        case 'Up':
        case 'ArrowUp':
          setActiveElement((prev) =>
            boundsCheck([prev[0] - 1, prev[1]]) ? [prev[0] - 1, prev[1]] : prev,
          );
          break;
        case 'Down':
        case 'ArrowDown':
          setActiveElement((prev) =>
            boundsCheck([prev[0] + 1, prev[1]]) ? [prev[0] + 1, prev[1]] : prev,
          );
          break;
        case 'Left':
        case 'ArrowLeft':
          setActiveElement((prev) =>
            boundsCheck([prev[0], prev[1] - 1]) ? [prev[0], prev[1] - 1] : prev,
          );
          break;
        case 'Right':
        case 'ArrowRight':
          setActiveElement((prev) =>
            boundsCheck([prev[0], prev[1] + 1]) ? [prev[0], prev[1] + 1] : prev,
          );
          break;

        default:
          break;
      }
    }

    globalThis.addEventListener('keydown', handleKeyDown);

    return () => {
      globalThis.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <ArrowNavigationContext.Provider
      value={{
        activeElement,
        setActiveElement,
        comparePositions,
      }}>
      {children}
    </ArrowNavigationContext.Provider>
  );
}

export const useArrowNavigation = () => React.useContext(ArrowNavigationContext);

export default ArrowNavigationProvider;
