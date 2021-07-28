import React from 'react';

interface FormDeleteProps {
  content: string;  
  handleDelete: () => void;
}

function FormDelete({ content, handleDelete }: FormDeleteProps) {
  return (
    <div
      className={`mobile__cell mobile__cell_span2`}
      onClick={handleDelete}>
      {content}
    </div>
  );
}

export default FormDelete;
