import Div from '@/components/styled-system/div/div';
import Span from '@/components/styled-system/span/span';
import { theme } from '@/styles/theme';
import React, { FC } from 'react';

type LocationTitle = {
  enTitle: string;
  koTitle: string;
};

const LocationTitle: FC<LocationTitle> = ({ enTitle, koTitle }) => {
  return (
    <Div color="#080CCE">
      <Span
        fontFamily={theme.fonts.nanumSquare}
        fontSize="28px"
        lineHeight="34px"
        fontWeight="800">
        {koTitle}
      </Span>
      <Span
        fontFamily={theme.fonts.futura}
        fontSize="28px"
        lineHeight="34px"
        fontWeight="700">
        {enTitle}
      </Span>
    </Div>
  );
};

export default LocationTitle;
