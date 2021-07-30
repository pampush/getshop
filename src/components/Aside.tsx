import React from 'react';

interface AsideProps {
  children: JSX.Element | Array<JSX.Element | null>;
  modifier?: string;
}

/**
 * 
 * @param param0 modifier - additional BEM modifier class
 * @returns 
 */
function Aside({ children, modifier }: AsideProps) {
  return <div className={`aside ${modifier ? modifier : ''}`}>{children}</div>;
}

export default Aside;
