import SVG from '@/components/styled-system/svg/svg';
import * as React from 'react';

const Close: React.FC = (props) => {
  return (
    <SVG
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path fill="#080CCE" d="M.28 12.301L12.3.281l1.415 1.413-12.02 12.021z" />
      <path fill="#080CCE" d="M1.694.28l12.02 12.02-1.413 1.415L.28 1.695z" />
    </SVG>
  );
};

export default Close;
