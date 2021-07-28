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
}

function ArrowNavigationProvider({ children, initialActiveElement }: ArrowNavigationProps) {
  const [activeElement, setActiveElement] =
    React.useState<navigationPosition>(initialActiveElement);


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

  React.useEffect(() => {
    globalThis.addEventListener('keydown', (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Up':
        case 'ArrowUp':
          setActiveElement((prev) => [prev[0] - 1, prev[1]]);
          break;
        case 'Down':
        case 'ArrowDown':
          setActiveElement((prev) => [prev[0] + 1, prev[1]]);
          break;
        case 'Left':
        case 'ArrowLeft':
          setActiveElement((prev) => [prev[0], prev[1] - 1]);
          break;
        case 'Right':
        case 'ArrowRight':
          setActiveElement((prev) => [prev[0], prev[1] + 1]);
          break;
        
        default:
          break;
      }
    });
  }, []);

  return (
    <ArrowNavigationContext.Provider value={{ activeElement, setActiveElement, comparePositions }}>
      {children}
    </ArrowNavigationContext.Provider>
  );
}

export const useArrowNavigation = () => React.useContext(ArrowNavigationContext);

export default ArrowNavigationProvider;
