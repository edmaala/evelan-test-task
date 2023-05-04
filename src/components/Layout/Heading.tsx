import React, { ReactNode } from 'react';
import classes from './Heading.module.css';

const Heading: React.FC<Props> = ({ children }) => {
  return (
    <header className={classes.heading}>
      <h1>{children}</h1>
    </header>
  );
};

type Props = {
  children: ReactNode;
};

export default Heading;
