import React from 'react';

import useNavigationLink from '../hooks/useNavigationLink';

interface SubmitButtonProps {
  handleSubmit: () => void;
  disabled: boolean;
}

function SubmitButton({ handleSubmit, disabled }: SubmitButtonProps) {
  const { elemRef: btnRef } = useNavigationLink<HTMLButtonElement>(
    [
      [6, 1],
      [6, 2],
      [6, 3],
    ],
    'global__active',
  );

  return (
    <>
      {disabled ? (
        <button
          ref={btnRef}
          className={`btn mobile__submit ${disabled ? '' : 'mobile__submit_disable'} `}
          onClick={handleSubmit}
          tabIndex={0}>
          Подтвердить номер
        </button>
      ) : (
        <button className="btn mobile__submit mobile__submit_disable" tabIndex={0} disabled>
          Подтвердить номер
        </button>
      )}
    </>
  );
}

export default SubmitButton;
