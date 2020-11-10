import React, { FC } from 'react';
import Div, { DivProps } from '../../../styled-system/div/div';
import Span from '../../../styled-system/span/span';

const OutlinedTag: FC<any> = (props) => {
  return (
    <Div
      display="flex"
      alignItems="center"
      justifyContent="center"
      border="2px solid #ffffff"
      borderRadius="100px"
      padding="3px 16px">
      <Span lineHeight="18px" fontSize="14px" fontWeight="500" color="#ffffff">
        Coffee
      </Span>
    </Div>
  );
};

export default OutlinedTag;
