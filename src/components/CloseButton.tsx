import React from 'react';
import { ReactComponent as CloseIcon } from '../assets/images/close.svg';
import { Link } from 'react-router-dom';

import useNavigationLink from '../hooks/useNavigationLink';
import { navigationPosition } from '../contexts/ArrowNavigation';

interface CloseButtonProps {
  navPosition: navigationPosition | navigationPosition[];
}

function CloseButton({ navPosition }: CloseButtonProps) {
  const { elemRef: closeRef } = useNavigationLink<HTMLAnchorElement>(
    navPosition,
    'global__active',
  );

  return (
    <Link ref={closeRef} className="btn btn__close" to="/" tabIndex={0}>
      <CloseIcon />
    </Link>
  );
}

export default CloseButton;
