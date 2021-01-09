import SVG, { SVGProps } from '@/components/styled-system/svg/svg';
import React, { FC } from 'react';

type SearchProps = SVGProps;

const Search: FC<SearchProps> = (props) => {
  return (
    <SVG
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <circle cx={10.5} cy={10.5} r={8.5} stroke="#0511F2" />
      <path stroke="#0511F2" d="M16.854 16.146l6 6" />
    </SVG>
  );
};

export default Search;
