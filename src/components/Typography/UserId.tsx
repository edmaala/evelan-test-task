import React, { ReactNode } from 'react';

const UserId: React.FC<Props> = ({ children }) => {
  return (
    <span
      style={{ fontSize: '0.8rem', color: 'var(--green)', lineHeight: '1.2em' }}
    >
      ID# {children}
    </span>
  );
};

type Props = {
  children: ReactNode;
};

export default UserId;
