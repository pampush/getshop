import React from 'react';

interface FormCellProps {
  content: string;
  handleClick: (char: string) => void;
}

function FormCell({ content, handleClick }: FormCellProps) {
  const onClick = () => {
    handleClick(content);
  };

  return (
    <button className={`mobile__cell`} onClick={onClick}>
      {content}
    </button>
  );
}

export default FormCell;
