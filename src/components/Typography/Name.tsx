import React, { ReactNode } from 'react';

const Name: React.FC<Props> = ({ children }) => {
  return (
    <span
      style={{
        fontSize: '1.3rem',
        fontWeight: '600',
        color: 'var(--main)',
        lineHeight: '1.2em',
      }}
    >
      {children}
    </span>
  );
};

type Props = {
  children: ReactNode;
};

export default Name;
