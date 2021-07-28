import React from 'react';

interface ArrowNavigationContextProps {
  activeElement: number[];
  setActiveElement: React.Dispatch<React.SetStateAction<number[]>>;
  comparePositions: (pos1: number[], pos2: number[]) => boolean;
}

export const ArrowNavigationContext = React.createContext<ArrowNavigationContextProps>({
  activeElement: [],
  setActiveElement: (prev) => prev,
  comparePositions: (pos1, pos2) => pos1[0] === pos2[0] && pos1[1] === pos2[2],
});

interface ArrowNavigationProps {
  children: JSX.Element[];
  initialActiveElement: number[];
}

function ArrowNavigationProvider({ children, initialActiveElement }: ArrowNavigationProps) {
  const [activeElement, setActiveElement] = React.useState<number[]>(initialActiveElement);

  const comparePositions = (pos1: number[], pos2: number[]): boolean => {
    const res =
      Boolean(pos1[0]) &&
      Boolean(pos1[1]) &&
      Boolean(pos2[0]) &&
      Boolean(pos2[1]) &&
      pos1[0] === pos2[0] &&
      pos1[1] === pos2[1];
    console.log(res);
    return res;
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
