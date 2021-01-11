import SVG, { SVGProps } from '@/components/styled-system/svg/svg';
import React, { FC } from 'react';

const Bookmark: FC<SVGProps> = (props) => {
  return (
    <SVG
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <g clipPath="url(#prefix__clip0)" strokeWidth={1.5} strokeMiterlimit={10}>
        <path
          d="M19.17 21.127V2.867a.136.136 0 00-.137-.136H4.955a.137.137 0 00-.137.136v18.259a.137.137 0 00.205.118l6.849-3.92a.137.137 0 01.134 0l6.96 3.92a.137.137 0 00.203-.119z"
          stroke="#000"
        />
        <path d="M11.994 6.505v7.302M15.645 10.156H8.343" stroke="#0511F2" />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path
            fill="#fff"
            transform="translate(4.09 2)"
            d="M0 0h15.809v20H0z"
          />
        </clipPath>
      </defs>
    </SVG>
  );
};

export default Bookmark;
