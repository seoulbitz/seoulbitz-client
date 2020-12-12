import Clock from '@/components/icons/clock/clock';
import Heart from '@/components/icons/heart/heart';
import Div from '@/components/styled-system/div/div';
import Span from '@/components/styled-system/span/span';
import { theme } from '@/styles/theme';
import React, { useState } from 'react';

const ArticlesToggle = () => {
  const [state, setState] = useState<'latest' | 'likes'>('latest');

  const handleLatestClick = () => setState('latest');
  const handleLikesClick = () => setState('likes');

  return (
    <>
      <Div
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        marginTop="48px"
        marginLeft="12px"
        width="100%">
        <Span
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="22px"
          whiteSpace="nowrap"
          fontWeight="500">
          Sort by
        </Span>

        {state === 'latest' && (
          <Span
            marginLeft="4px"
            fontFamily={theme.fonts.futura}
            fontStyle="italic"
            fontSize="16px"
            lineHeight="22px"
            fontWeight="500"
            color="#0511F2">
            latest
          </Span>
        )}
        {state === 'likes' && (
          <Span
            marginLeft="4px"
            fontFamily={theme.fonts.futura}
            fontStyle="italic"
            fontSize="16px"
            lineHeight="22px"
            fontWeight="500"
            color="#0511F2">
            likes
          </Span>
        )}
      </Div>
      <Div
        display="flex"
        justifyContent="center"
        alignItems="center"
        border="2px solid #0511F2"
        borderRadius="29px"
        marginTop="16px"
        width="108px"
        height="56px">
        <Div
          display="flex"
          justifyContent="center"
          alignItems="center"
          onClick={handleLatestClick}
          width="48px"
          height="48px"
          margin="2px"
          borderRadius="100px"
          backgroundColor={state === 'latest' ? '#0511F2' : 'initial'}>
          <Clock fillColor={state === 'latest' ? '#FFFFFF' : '#8288F9'} />
        </Div>
        <Div
          display="flex"
          justifyContent="center"
          alignItems="center"
          onClick={handleLikesClick}
          width="48px"
          height="48px"
          margin="2px"
          borderRadius="100px"
          backgroundColor={state === 'likes' ? '#0511F2' : 'initial'}>
          <Heart fillColor={state === 'likes' ? '#FFFFFF' : '#8288F9'} />
        </Div>
      </Div>
    </>
  );
};

export default ArticlesToggle;
