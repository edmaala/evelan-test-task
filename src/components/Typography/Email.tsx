import React, { ReactNode } from 'react';

const Email: React.FC<Props> = ({ children }) => {
  return (
    <p
      style={{
        fontSize: '1rem',
        fontWeight: '600',
        color: 'var(--purple)',
        lineHeight: '1.2em',
      }}
    >
      {children}
    </p>
  );
};

type Props = {
  children: ReactNode;
};

export default Email;
