import SVG, { SVGProps } from '@/components/styled-system/svg/svg';
import React, { FC } from 'react';

const MapMarker: FC<SVGProps> = (props) => {
  return (
    <SVG
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M19.559 8.949c0 4.137-3.385 10.344-7.56 10.344-4.176 0-7.56-6.207-7.56-10.344.095-2.024.934-3.931 2.34-5.328C8.188 2.224 10.056 1.445 12 1.445c1.942 0 3.81.78 5.217 2.176 1.408 1.397 2.246 3.304 2.342 5.328h.001z"
        fill="#080CCE"
        stroke="#080CCE"
        strokeMiterlimit={10}
      />
      <path
        d="M8.128 17.603L12 22.295l3.872-4.693H8.128z"
        fill="#080CCE"
        stroke="#080CCE"
        strokeMiterlimit={10}
      />
      <path
        d="M11.921 14.31c2.674 0 4.84-2.26 4.84-5.049 0-2.788-2.166-5.048-4.84-5.048-2.673 0-4.84 2.26-4.84 5.048 0 2.788 2.167 5.048 4.84 5.048z"
        fill="#777AE4"
      />
      <path
        d="M11.921 13.392c2.188 0 3.96-1.85 3.96-4.131s-1.772-4.13-3.96-4.13c-2.187 0-3.96 1.849-3.96 4.13 0 2.281 1.773 4.13 3.96 4.13z"
        stroke="#fff"
        strokeWidth={2}
      />
    </SVG>
  );
};

export default MapMarker;
