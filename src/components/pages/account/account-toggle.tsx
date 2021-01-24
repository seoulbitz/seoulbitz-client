import Div from '@/components/styled-system/div/div';
import { theme } from '@/styles/theme';
import React, { FC, useState } from 'react';

type AccountToggleProps = {
  onChange?: (value: 'locations' | 'articles') => void;
};

export const AccountToggle: FC<AccountToggleProps> = ({ onChange }) => {
  const [state, setState] = useState<'locations' | 'articles'>('locations');

  const handleLocationsClick = () => {
    setState('locations');
    if (onChange) {
      onChange('locations');
    }
  };

  const handleArticlesClick = () => {
    setState('articles');
    if (onChange) {
      onChange('articles');
    }
  };

  return (
    <Div
      display="flex"
      justifyContent="center"
      alignItems="center"
      border="1px solid #000000"
      borderRadius="29px"
      width="176px"
      height="48px">
      <Div
        display="flex"
        justifyContent="center"
        alignItems="center"
        onClick={handleLocationsClick}
        width="82px"
        height="40px"
        margin="2px 2px 2px 2px"
        borderRadius="100px"
        cursor="default"
        backgroundColor={state === 'locations' ? '#0511F2' : 'initial'}
        textAlign="center"
        fontFamily={theme.fonts.futura}
        fontSize="16px"
        lineHeight="20px"
        fontWeight="500"
        color={state === 'locations' ? '#FFFFFF' : 'rgb(0 0 0 / 0.3)'}>
        Locations
      </Div>
      <Div
        display="flex"
        justifyContent="center"
        alignItems="center"
        onClick={handleArticlesClick}
        width="82px"
        height="40px"
        margin="2px 2px 2px 2px"
        borderRadius="100px"
        cursor="default"
        backgroundColor={state === 'articles' ? '#0511F2' : 'initial'}
        textAlign="center"
        fontFamily={theme.fonts.futura}
        fontSize="16px"
        lineHeight="20px"
        fontWeight="500"
        color={state === 'articles' ? '#FFFFFF' : 'rgb(0 0 0 / 0.3)'}>
        Articles
      </Div>
    </Div>
  );
};
