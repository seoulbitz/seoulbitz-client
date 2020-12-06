import { theme } from '@/styles/theme';
import styled from '@emotion/styled';
import React, { FC } from 'react';
import StyledSystemButton, {
  ButtonProps as StyledSystemButtonProps
} from '../styled-system/button/button';

type ButtonProps = {
  variant?: 'black' | 'blue' | 'mixed' | 'warning';
} & StyledSystemButtonProps;

const BaseButton = styled(StyledSystemButton)`
  cursor: pointer;
`;

const DisabledButton = styled(BaseButton)`
  cursor: default;
`;

const BlackButton = styled(BaseButton)`
  &:hover {
    color: #ffffff;
    background-color: #000000;
  }
`;

const BlueButton = styled(BaseButton)`
  &:hover {
    color: #ffffff;
    background-color: #0511f2;
  }
`;

const MixedButton = styled(BaseButton)`
  &:hover {
    color: #ffffff;
    background-color: #ff0e66;
  }
`;

const WarningButton = styled(BaseButton)`
  &:hover {
    color: #ffffff;
    background-color: #f43333;
  }
`;

const Button: FC<ButtonProps> = ({ variant = 'black', ...rest }) => {
  if (rest.disabled) {
    return (
      <DisabledButton
        display="block"
        width="100%"
        fontSize="16px"
        lineHeight="22px"
        color="##D1D1D1"
        padding="12px 22px"
        backgroundColor="unset"
        border="1px solid ##D1D1D1"
        fontFamily={theme.fonts.futura}
        fontWeight="700"
        {...rest}
      />
    );
  }

  if (variant === 'black') {
    return (
      <BlackButton
        display="block"
        width="100%"
        fontSize="16px"
        lineHeight="22px"
        color="#000000"
        padding="12px 22px"
        backgroundColor="unset"
        border="1px solid #000000"
        fontFamily={theme.fonts.futura}
        fontWeight="700"
        {...rest}
      />
    );
  }

  if (variant === 'blue') {
    return (
      <BlueButton
        display="block"
        width="100%"
        fontSize="16px"
        lineHeight="22px"
        color="#0511F2"
        padding="12px 22px"
        backgroundColor="unset"
        border="1px solid #0511F2"
        fontFamily={theme.fonts.futura}
        fontWeight="700"
        {...rest}
      />
    );
  }

  if (variant === 'mixed') {
    return (
      <MixedButton
        display="block"
        width="100%"
        fontSize="16px"
        lineHeight="22px"
        color="#FF0E66"
        padding="12px 22px"
        backgroundColor="unset"
        border="1px solid #0511F2"
        fontFamily={theme.fonts.futura}
        fontWeight="700"
        {...rest}
      />
    );
  }

  if (variant === 'warning') {
    return (
      <WarningButton
        display="block"
        width="100%"
        fontSize="16px"
        lineHeight="22px"
        color="#F43333"
        padding="12px 22px"
        backgroundColor="unset"
        border="1px solid #F43333"
        fontFamily={theme.fonts.futura}
        fontWeight="700"
        {...rest}
      />
    );
  }

  return <StyledSystemButton {...rest} />;
};

export default Button;
