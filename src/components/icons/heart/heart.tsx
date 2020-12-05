import SVG, { SVGProps } from '@/components/styled-system/svg/svg';
import React, { FC } from 'react';

const Heart: FC<SVGProps> = (props) => {
  return (
    <SVG
      width={22}
      height={20}
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M21.045 6.532a5.493 5.493 0 00-2.861-4.793A4.894 4.894 0 0015.8 1.15c-.832.01-1.7.187-2.55.75-.85.563-2.227 2.414-2.227 2.414S9.6 2.463 8.75 1.9c-.85-.563-1.646-.75-2.505-.75-1.237 0-2.752.598-3.735 1.607A5.32 5.32 0 001 6.532a5.47 5.47 0 001.86 4.106l8 8.154a.246.246 0 00.276.056.25.25 0 00.082-.056l4.212-4.294 4.085-4.165a5.41 5.41 0 001.53-3.801z"
        stroke="#8288F9"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinejoin="round"
      />
    </SVG>
  );
};

export default Heart;
