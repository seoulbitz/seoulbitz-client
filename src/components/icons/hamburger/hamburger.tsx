import SVG, { SVGProps } from '@/components/styled-system/svg/svg';
import React, { FC } from 'react';

type HamburgerProps = SVGProps;

const Hamburger: FC<HamburgerProps> = (props) => {
  return (
    <SVG
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path fill="#000" d="M1 2h14v2H1zM1 7h14v2H1zM1 12h14v2H1z" />
    </SVG>
  );
};

export default Hamburger;
