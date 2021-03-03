import Div from '@/components/styled-system/div/div';
import { theme } from '@/styles/theme';
import React, { FC, useState } from 'react';
import { TFunction } from 'next-i18next';
import { i18n, withTranslation } from '../../../../i18n';

type AccountToggleProps = {
  onChange?: (value: 'locations' | 'articles') => void;
  readonly t: TFunction;
};

export const AccountToggle: FC<AccountToggleProps> = ({ onChange, t }) => {
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
        {i18n.language === 'en' ? 'Locations' : '로케이션'}
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
        {i18n.language === 'en' ? 'Articles' : '아티클'}
      </Div>
    </Div>
  );
};

export default withTranslation('common')(AccountToggle);
