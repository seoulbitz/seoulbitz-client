import { theme } from '@/styles/theme';
import React, { useState } from 'react';
import Minus from '../icons/minus/minus';
import Plus from '../icons/plus/plus';
import Div from '../styled-system/div/div';
import P from '../styled-system/p/p';

const FAQItem = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Div
        cursor="pointer"
        onClick={handleClick}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        borderBottom={isOpen ? '0px' : '1px solid #000000'}
        padding="22px 0">
        <Div
          fontFamily={theme.fonts.futura}
          fontSize={'16px'}
          lineHeight={'20px'}
          fontWeight="500"
          color={isOpen ? '#0511F2' : '#000000'}>
          Pater noster qui es in caelis
        </Div>
        <Div display="flex" alignItems="flex-end" verticalAlign="text-top">
          {isOpen ? <Minus /> : <Plus />}
        </Div>
      </Div>
      {isOpen && (
        <Div paddingBottom={['24px', null, '32px']} borderBottom="1px solid">
          <P
            margin="0px"
            fontFamily={theme.fonts.adelle}
            fontSize="16px"
            lineHeight="24px"
            fontWeight="400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna.
          </P>
        </Div>
      )}
    </>
  );
};

export default FAQItem;
