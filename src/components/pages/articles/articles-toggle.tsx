@@ -0,0 +1,92 @@
import Clock from '@/components/icons/clock/clock';
import WhiteClock from '@/components/icons/clock/white-clock';
import Distance from '@/components/icons/distance/distance';
import WhiteDistance from '@/components/icons/distance/white-distance';
import Heart from '@/components/icons/heart/heart';
import WhiteHeart from '@/components/icons/heart/white-heart';
import Div from '@/components/styled-system/div/div';
import Span from '@/components/styled-system/span/span';
import { theme } from '@/styles/theme';
import React, { useState } from 'react';

const StyledDistance = () => {
  <Distance color="#ffffff"></Distance>;
};

const ArticlesToggle = () => {
  const [state, setState] = useState<'latest' | 'likes'>('latest');

  const handleLatestClick = () => setState('latest');
  const handleLikesClick = () => setState('likes');

  return (
    <>
      <Div display="flex" alignItems="center" justifyContent="center" marginTop="40px">
        <Span fontFamily={theme.fonts.futura} fontSize="16px" lineHeight="22px" fontWeight="500">
          Sort by
        </Span>

        {state === 'latest' && (
          <Span
            marginLeft="2px"
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
            marginLeft="2px"
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
          {state === 'latest' ? <WhiteClock /> : <Clock />}
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
          {state === 'likes' ? <WhiteHeart /> : <Heart />}
        </Div>
      </Div>
    </>
  );
};

export default ArticlesToggle;
