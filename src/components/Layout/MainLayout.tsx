import React, { ReactNode } from 'react';
import classes from './MainLayout.module.css';

const MainLayout: React.FC<Props> = ({ children }) => {
  return <main className={classes.mainLayout}>{children}</main>;
};

type Props = {
  children: ReactNode;
};

export default MainLayout;
