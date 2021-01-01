import Span from '@/components/styled-system/span/span';
import { theme } from '@/styles/theme';
import React, { FC } from 'react';

type LocationSubtitle = {
  subtitle: string;
};

const LocationSubtitle: FC<LocationSubtitle> = ({ subtitle }) => {
  return (
    <Span
      fontFamily={theme.fonts.futura}
      fontWeight="500"
      fontSize="16px"
      lineHeight="20px"
      color="#000000">
      {subtitle}
    </Span>
  );
};

export default LocationSubtitle;
