import React, { FC } from 'react';
import styled from '@emotion/styled';
import Div, { DivProps } from '../../../styled-system/div/div';
import Span from '../../../styled-system/span/span';

const StyledDiv = styled(Div)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  padding: 5px 18px;
  background-color: #ff0d77;
`;

const StyledSpan = styled(Span)`
  line-height: 18px;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
`;

type SolidTagProps = {
  onClick?: (event: MouseEvent) => void;
};

const SolidTag: FC<SolidTagProps> = ({ onClick }) => {
  return (
    <StyledDiv>
      <StyledSpan>Coffee</StyledSpan>
    </StyledDiv>
  );
};

export default SolidTag;
