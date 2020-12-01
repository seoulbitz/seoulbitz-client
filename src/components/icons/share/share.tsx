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
        d="M14.648 6.804a2.31 2.31 0 003.13.891 2.28 2.28 0 00.897-3.109 2.31 2.31 0 00-3.13-.891 2.28 2.28 0 00-.897 3.109zM6.305 14.84a2.294 2.294 0 002.3-2.287 2.294 2.294 0 00-2.3-2.286 2.294 2.294 0 00-2.301 2.286 2.294 2.294 0 002.3 2.286zM16.662 21.7a2.294 2.294 0 002.3-2.286 2.294 2.294 0 00-2.3-2.286 2.294 2.294 0 00-2.301 2.286 2.294 2.294 0 002.3 2.286zM7.84 13.316l7.274 4.911M7.84 11.792l7.274-4.916"
        stroke="#000"
        strokeWidth={1.5}
        strokeMiterlimit={10}
      />
    </SVG>
  );
};

export default Share;
