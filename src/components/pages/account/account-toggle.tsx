import Div from '@/components/styled-system/div/div';
import { theme } from '@/styles/theme';
import React, { useState } from 'react';

const DefaultLocations = () => {
  return (
    <>
      <Div
        padding="13px 15px"
        fontFamily={theme.fonts.futura}
        fontSize="14px"
        lineHeight="18px"
        fontWeight="500"
        color="#0511F2">
        Locations
      </Div>
    </>
  );
};

const ClickedLocations = () => {
  return (
    <>
      <Div margin="2px" borderRadius="100px" backgroundColor="#0511F2">
        <Div
          padding="11px"
          fontFamily={theme.fonts.futura}
          fontSize="14px"
          lineHeight="18px"
          fontWeight="500"
          color="#ffffff">
          Locations
        </Div>
      </Div>
    </>
  );
};

const DefaultArticles = () => {
  return (
    <>
      <Div
        padding="13px 15px"
        fontFamily={theme.fonts.futura}
        fontSize="14px"
        lineHeight="18px"
        fontWeight="500"
        color="#0511F2">
        Articles
      </Div>
    </>
  );
};

const ClickedArticles = () => {
  return (
    <>
      <Div margin="2px" borderRadius="100px" backgroundColor="#0511F2">
        <Div
          padding="11px"
          fontFamily={theme.fonts.futura}
          fontSize="14px"
          lineHeight="18px"
          fontWeight="500"
          color="#ffffff">
          Articles
        </Div>
      </Div>
    </>
  );
};

export const AccountToggle = () => {
  const [state, setState] = useState<'locations' | 'articles'>('locations');
  return (
    <Div display="flex" justifyContent="center" border="2px solid #0511F2" borderRadius="92px">
      <Div
        onClick={() => {
          setState('locations');
        }}>
        {state === 'locations' ? <ClickedLocations /> : <DefaultLocations />}
      </Div>
      <Div
        onClick={() => {
          setState('articles');
        }}>
        {state === 'articles' ? <ClickedArticles /> : <DefaultArticles />}
      </Div>
    </Div>
  );
};
