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
          d="M18.81 21.15V3.824a.13.13 0 00-.13-.13H5.322a.13.13 0 00-.13.13v17.324a.13.13 0 00.194.113l6.499-3.72a.13.13 0 01.127 0l6.604 3.72a.13.13 0 00.129-.001.13.13 0 00.064-.112z"
          stroke="#000"
        />
        <path d="M12 7.275v6.928M15.464 10.739H8.536" stroke="#0511F2" />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" transform="translate(4.5 3)" d="M0 0h15v18.977H0z" />
        </clipPath>
      </defs>
    </SVG>
  );
};

export default Bookmark;
