import SVG from '@/components/styled-system/svg/svg';
import * as React from 'react';

const Close: React.FC = (props) => {
  return (
    <SVG
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fill="#080CCE"
        d="M1.28 13.301L13.3 1.281l1.415 1.413-12.02 12.021z"
      />
      <path
        fill="#080CCE"
        d="M2.694 1.28l12.02 12.02-1.413 1.415L1.28 2.695z"
      />
    </SVG>
  );
};

export default Close;
