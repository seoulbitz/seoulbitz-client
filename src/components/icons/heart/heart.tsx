import * as React from 'react';
import SVG from '@/components/styled-system/svg/svg';

type HeartProps = {
  fillColor?: string;
};

const Heart: React.FC<HeartProps> = ({ fillColor = '#8288F9', ...rest }) => {
  return (
    <SVG
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}>
      <g clipPath="url(#prefix__clip0)">
        <path
          d="M22.045 8.532a5.493 5.493 0 00-2.861-4.793A4.894 4.894 0 0016.8 3.15c-.832.01-1.7.187-2.55.75-.85.563-2.227 2.414-2.227 2.414S10.6 4.463 9.75 3.9c-.85-.563-1.646-.75-2.505-.75-1.237 0-2.752.598-3.735 1.607A5.321 5.321 0 002 8.532a5.47 5.47 0 001.86 4.106l8 8.154a.246.246 0 00.276.056.25.25 0 00.082-.056l4.212-4.294 4.085-4.165a5.41 5.41 0 001.53-3.801z"
          stroke={fillColor}
          strokeWidth={1.5}
          strokeMiterlimit={10}
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path
            fill="#fff"
            transform="translate(1.25 2.4)"
            d="M0 0h21.545v19.216H0z"
          />
        </clipPath>
      </defs>
    </SVG>
  );
};

export default Heart;
