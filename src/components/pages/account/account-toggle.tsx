import Div from '@/components/styled-system/div/div';
import { theme } from '@/styles/theme';
import React, { useState } from 'react';

const DefaultLocations = () => {
  return (
    <Div
      padding="13px 15px"
      fontFamily={theme.fonts.futura}
      fontSize="14px"
      lineHeight="18px"
      fontWeight="500"
      color="#0511F2">
      Locations
    </Div>
  );
};

const ClickedLocations = () => {
  return (
    <Div
      margin="2px"
      borderRadius="100px"
      backgroundColor="#0511F2"
      padding="11px"
      fontFamily={theme.fonts.futura}
      fontSize="14px"
      lineHeight="18px"
      fontWeight="500"
      color="#ffffff">
      Locations
    </Div>
  );
};

const DefaultArticles = () => {
  return (
    <Div
      padding="13px 15px"
      fontFamily={theme.fonts.futura}
      fontSize="14px"
      lineHeight="18px"
      fontWeight="500"
      color="#0511F2">
      Articles
    </Div>
  );
};

const ClickedArticles = () => {
  return (
    <Div
      margin="2px"
      borderRadius="100px"
      backgroundColor="#0511F2"
      padding="11px"
      fontFamily={theme.fonts.futura}
      fontSize="14px"
      lineHeight="18px"
      fontWeight="500"
      color="#ffffff">
      Articles
    </Div>
  );
};

export const AccountToggle = () => {
  const [state, setState] = useState<'locations' | 'articles'>('locations');

  const handleLocationsClick = () => setState('locations');

  const handleArticlesClick = () => setState('articles');

  return (
    <Div
      display="flex"
      justifyContent="center"
      border="2px solid #0511F2"
      borderRadius="29px"
      width="176px"
      height="56px">
      <Div
        display="flex"
        justifyContent="center"
        alignItems="center"
        onClick={handleLocationsClick}
        width="82px"
        height="48px"
        margin="2px 2px 2px 2px"
        borderRadius="100px"
        cursor="pointer"
        backgroundColor={state === 'locations' ? '#0511F2' : 'initial'}
        textAlign="center"
        fontFamily={theme.fonts.futura}
        fontSize="16px"
        lineHeight="20px"
        fontWeight="500"
        color={state === 'locations' ? '#FFFFFF' : '#0511F2'}>
        Locations
      </Div>
      <Div
        display="flex"
        justifyContent="center"
        alignItems="center"
        onClick={handleArticlesClick}
        width="82px"
        height="48px"
        margin="2px 2px 2px 2px"
        borderRadius="100px"
        cursor="pointer"
        backgroundColor={state === 'articles' ? '#0511F2' : 'initial'}
        textAlign="center"
        fontFamily={theme.fonts.futura}
        fontSize="16px"
        lineHeight="20px"
        fontWeight="500"
        color={state === 'articles' ? '#FFFFFF' : '#0511F2'}>
        Articles
      </Div>
    </Div>
  );
};
