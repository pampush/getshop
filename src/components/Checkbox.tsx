import React, { KeyboardEvent } from 'react';

import { useArrowNavigation, navigationPosition } from '../contexts/ArrowNavigation';

interface CheckboxProps {
  label: string;
  navPosition: navigationPosition | Array<navigationPosition>;
  policyAgree: boolean;
  handleChange: () => void;
}

/**
 * Custom checkbox. Also triggered by Enter key.\
 * Not wrapped up in NavigationLink to not apply global__active style 
 * @param param0
 * @returns
 */
function Checkbox({ label, navPosition, policyAgree, handleChange }: CheckboxProps) {
  const elemRef = React.useRef<HTMLLabelElement>(null);
  const { activeElement, comparePositions } = useArrowNavigation();

  // NavigationLink component logic
  React.useEffect(() => {
    if (!elemRef) return;
    if (comparePositions(navPosition, activeElement)) {
      elemRef.current?.focus();
    }
  }, [activeElement]);

  const handleClick = (e: KeyboardEvent<HTMLLabelElement>) => {
    if (e.key === 'Enter') handleChange();
  };

  return (
    <div className="mobile__checkbox-container">
      <label
        ref={elemRef}
        className="checkbox mobile__checkbox"
        tabIndex={0}
        onKeyDown={handleClick}>
        <input
          type="checkbox"
          className="checkbox__input"
          checked={policyAgree}
          onChange={handleChange}></input>
        <span className="checkbox__checkmark"></span>
      </label>
      <span>{label}</span>
    </div>
  );
}

export default Checkbox;
