import React from 'react';

interface FormCellProps {
  content: string;
  span?: number;
}

function FormCell({ content, span }: FormCellProps) {
  return <div className={`mobile__cell ${span ? `mobile__cell_span${span}` : ''}`}>{content}</div>;
}

export default FormCell;
