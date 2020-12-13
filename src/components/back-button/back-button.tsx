import { theme } from '@/styles/theme';
import React, { FC } from 'react';
import ArrowLeft from '../icons/arrow-left/arrow-left';
import Button from '../styled-system/button/button';
import Span from '../styled-system/span/span';

type BackButtonProps = {
  text: string;
};

const BackButton: FC<BackButtonProps> = ({ text }) => {
  return (
    <Button
      padding="0px"
      margin="0px"
      border="0px"
      background="unset"
      cursor="pointer">
      <ArrowLeft verticalAlign="middle" />
      <Span
        fontFamily={theme.fonts.futura}
        fontSize="16px"
        fontWeight="700"
        lineHeight="20px"
        verticalAlign="middle"
        marginLeft="8px">
        {text}
      </Span>
    </Button>
  );
};

export default BackButton;
