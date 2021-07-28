import React from 'react';

import { useArrowNavigation, navigationPosition } from '../contexts/ArrowNavigation';

interface CheckboxProps {
  label: string;
  navPosition: navigationPosition | Array<navigationPosition>;
  policyAgree: boolean;
  handleChange: () => void;
}

function Checkbox({ label, navPosition, policyAgree, handleChange }: CheckboxProps) {
  const elemRef = React.useRef<HTMLLabelElement>(null);
  const { activeElement, comparePositions } = useArrowNavigation();

  React.useEffect(() => {
    if (!elemRef) return;
    if (comparePositions(navPosition, activeElement)) {
      console.log('e');
      elemRef.current?.focus();
    }
  }, [activeElement]);

  return (
    <div className="mobile__checkbox-container">
      <label ref={elemRef} className="checkbox mobile__checkbox" tabIndex={0}>
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
