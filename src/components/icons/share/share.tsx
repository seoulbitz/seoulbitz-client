import SVG, { SVGProps } from '@/components/styled-system/svg/svg';
import React, { FC } from 'react';

const Share: FC<SVGProps> = (props) => {
  return (
    <SVG
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M14.878 6.413a2.417 2.417 0 003.274.933 2.385 2.385 0 00.94-3.253 2.417 2.417 0 00-3.275-.933 2.385 2.385 0 00-.94 3.253zM6.148 14.821a2.4 2.4 0 002.407-2.392 2.4 2.4 0 00-2.407-2.392A2.4 2.4 0 003.74 12.43a2.4 2.4 0 002.408 2.392zM16.984 22a2.4 2.4 0 002.408-2.392 2.4 2.4 0 00-2.408-2.392 2.4 2.4 0 00-2.407 2.392A2.4 2.4 0 0016.984 22zM7.755 13.227l7.61 5.14M7.755 11.632l7.61-5.144"
        stroke="#000"
        strokeWidth={1.5}
        strokeMiterlimit={10}
      />
    </SVG>
  );
};

export default Share;
