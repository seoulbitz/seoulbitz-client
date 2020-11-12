import React, { FC } from 'react';
import Div from '../../styled-system/div/div';
import OutlinedTag from './outlined-tag/outlined-tag';
import SolidTag from './solid-tag/solid-tag';

export type TagProps = {
  variant?: 'solid' | 'outlined';
  onClick?: (event: MouseEvent) => void;
};

const Tag: FC<TagProps> = ({ variant = 'outlined', ...rest }) => {
  if (variant === 'outlined') {
    return <OutlinedTag {...rest} />;
  }
  if (variant === 'solid') {
    return <SolidTag {...rest} />;
  }

  return null;
};

export default Tag;
