import React from 'react';

const Separator = ({ className = '', ...props }) => {
  return (
    <hr
      className={`border-t border-neutral-700 my-4 ${className}`}
      {...props}
    />
  );
};

export { Separator };
