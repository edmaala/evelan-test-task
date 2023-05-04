import Image from 'next/image';
import React from 'react';
import classes from './Loader.module.css';
import LoaderSvg from '../../assets/loading-vector.svg';

const Loader: React.FC = () => {
  return (
    <Image
      className={classes.loader}
      src={LoaderSvg}
      alt='Loading spinner'
      height={58}
      width={58}
    />
  );
};

export default Loader;
