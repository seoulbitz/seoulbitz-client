import React, { FC } from 'react';
import styled from '@emotion/styled';
import Div, { DivProps } from '../../../styled-system/div/div';
import Span from '../../../styled-system/span/span';

const StyledDiv = styled(Div)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #ffffff;
  border-radius: 100px;
  padding: 3px 16px;
`;

const StyledSpan = styled(Span)`
  line-height: 18px;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
`;

type OutlinedTagProps = {
  onClick?: (event: MouseEvent) => void;
};

const OutlinedTag: FC<OutlinedTagProps> = ({ onClick }) => {
  return (
    <StyledDiv>
      <StyledSpan>Coffee</StyledSpan>
    </StyledDiv>
  );
};

export default OutlinedTag;
