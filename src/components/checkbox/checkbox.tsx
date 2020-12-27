import React, { FC } from 'react';
import styled from '@emotion/styled';
import Div from '../styled-system/div/div';

// TODO: Refactor this component to use styled-system elemtns
// TODO: Replace any type
const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input`
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

const StyledCheckbox = styled.div<any>`
  width: 16px;
  height: 16px;
  border: 1px solid #0511f2;
  border-radius: 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: ${(props) => (props.checked ? 'block' : 'none')};
  }
`;

const Checkbox: FC<any> = ({ className, value, ...props }) => {
  return (
    <CheckboxContainer className={className}>
      <HiddenCheckbox type="checkbox" checked={value} {...props} />
      <StyledCheckbox checked={value}>
        <Div
          width="10px"
          height="10px"
          borderRadius="10px"
          background="#0511f2"
        />
      </StyledCheckbox>
    </CheckboxContainer>
  );
};

export default Checkbox;
