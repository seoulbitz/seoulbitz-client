import React, { FC } from 'react';
import Div, { DivProps } from '../../styled-system/div/div';

type GridProps = DivProps;

export const Grid: FC<GridProps> = ({ children, ...rest }) => {
  return (
    <Div
      padding={['0px 10px', '0px 12px']}
      maxWidth={[null, null, '888px']}
      margin={[null, null, '0px auto']}
      display="flex"
      flexWrap="wrap"
      flexDirection="row"
      {...rest}>
      {children}
    </Div>
  );
};

type CellProps = DivProps;

export const Cell: FC<CellProps> = ({ children, ...rest }) => {
  return (
    <Div padding={['0px 10px', '0px 12px']} {...rest}>
      {children}
    </Div>
  );
};
