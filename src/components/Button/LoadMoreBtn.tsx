import React from 'react';
import classes from './LoadMoreBtn.module.css';

const LoadMoreBtn: React.FC<Props> = ({ onClick, disabled }) => {
  return (
    <button
      disabled={disabled}
      className={classes.loadMoreBtn}
      onClick={onClick}
    >
      Load More
    </button>
  );
};

type Props = {
  onClick: () => void;
  disabled: boolean;
};

export default LoadMoreBtn;
