import SVG, { SVGProps } from '@/components/styled-system/svg/svg';
import React, { FC } from 'react';

const ArrowRight: FC<SVGProps> = (props) => {
  return (
    <SVG
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path stroke="#080CCE" strokeWidth={2} d="M4.293 15.293l8-8M12.293 8.707l-8-8" />
    </SVG>
  );
};

export default ArrowRight;
