import React from 'react';
import Image from 'next/image';

const Avatar: React.FC<Props> = ({ src, alt }) => {
  return (
    <Image
      src={src}
      alt={alt}
      height={60}
      width={60}
      style={{ clipPath: 'circle(45%)' }}
    />
  );
};

type Props = {
  src: string;
  alt: string;
};

export default Avatar;
