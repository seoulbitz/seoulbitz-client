import { theme } from '@/styles/theme';
import Link from 'next/link';
import React, { FC, useState } from 'react';
import A from '../styled-system/a/a';
import Div from '../styled-system/div/div';
import Input from '../styled-system/input/input';
import Span from '../styled-system/span/span';

const RadioState = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Div width={1} marginTop="24px" display="flex" justifyContent="flex-start">
      <Div
        onClick={handleClick}
        display="flex"
        justifyContent="center"
        alignItems="center"
        verticalAlign="middle"
        width="16px"
        height="16px"
        border="1px solid #0511F2"
        borderRadius="100%">
        <Div
          onClick={handleClick}
          display="block"
          width="10px"
          height="10px"
          borderRadius="100%"
          backgroundColor={isClicked ? ' #ffffff' : '#0511F2'}></Div>
      </Div>
      <Span
        marginLeft="8px"
        fontFamily={theme.fonts.futura}
        fontSize="14px"
        lineHeight="18px"
        fontWeight="500">
        I agree to Seoulbitz’s
        <Link href="/" passHref>
          <A
            marginLeft="4px"
            color="#0511F2"
            fontFamily={theme.fonts.futura}
            fontSize="14px"
            lineHeight="18px"
            fontWeight="500">
            Terms and condition
          </A>
        </Link>
      </Span>
    </Div>
  );
};

export const Radio: FC = () => {
  return <RadioState />;
};
