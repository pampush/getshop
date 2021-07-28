import React from 'react';

interface FormDeleteProps {
  content: string;
  handleDelete: () => void;
}

function FormDelete({ content, handleDelete }: FormDeleteProps) {
  return (
    <button className={`mobile__cell mobile__cell_span2`} onClick={handleDelete}>
      {content}
    </button>
  );
}

export default FormDelete;
