import React, { FC } from 'react';
import Div, { DivProps } from '../../../styled-system/div/div';
import Span from '../../../styled-system/span/span';

// type SolidTagProps = {
//   onClick?: (event: MouseEvent) => void;
// };

const SolidTag: FC<any> = (props) => {
  return (
    <Div
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="100px"
      padding="5px 18px"
      backgroundColor="#ff0d77">
      <Span lineHeight="18px" fontSize="14px" fontWeight="500" color="#ffffff">
        Coffee
      </Span>
    </Div>
  );
};

export default SolidTag;
