import SVG, { SVGProps } from '@/components/styled-system/svg/svg';
import React, { FC } from 'react';

type HeartProps = {
  fillColor?: string;
};

const Heart: FC<HeartProps> = ({ fillColor = '#8288F9', ...rest }) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}>
      <path
        d="M21.5 9.102a5.207 5.207 0 00-2.712-4.543A4.638 4.638 0 0016.528 4c-.788.01-1.611.178-2.416.711C13.305 5.244 12 7 12 7s-1.348-1.755-2.154-2.288a4.076 4.076 0 00-2.374-.71c-1.173 0-2.609.566-3.54 1.522A5.043 5.043 0 002.5 9.102a5.184 5.184 0 001.763 3.891l7.583 7.73a.234.234 0 00.261.053.237.237 0 00.079-.054l3.992-4.07 3.872-3.948a5.129 5.129 0 001.45-3.602z"
        stroke={fillColor}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Heart;
