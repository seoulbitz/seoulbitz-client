import React, { FC } from 'react';
import styled from '@emotion/styled';
import Div from '../styled-system/div/div';

// TODO: Refactor this component to use styled-system elemtns
// TODO: Replace any type
const RadioContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenRadio = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledRadio = styled.div<any>`
  width: 16px;
  height: 16px;
  border: 1px solid #0511f2;
  border-radius: 16px;
  margin-right: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: ${(props) => (props.checked ? 'block' : 'none')};
  }
`;

const Radio: FC<any> = ({ className, value, ...props }) => {
  return (
    <RadioContainer className={className}>
      <HiddenRadio type="radio" checked={value} {...props} />
      <StyledRadio checked={value}>
        <Div
          width="10px"
          height="10px"
          borderRadius="10px"
          background="#0511f2"
        />
      </StyledRadio>
    </RadioContainer>
  );
};

export default Radio;
