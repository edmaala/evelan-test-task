import React, { ReactNode } from 'react';
import classes from './UserCardsGridLayout.module.css';

const UserCardsGridLayout: React.FC<Props> = ({ children }) => {
  return <ul className={classes.userCardGrid}>{children}</ul>;
};

type Props = {
  children: ReactNode;
};

export default UserCardsGridLayout;
