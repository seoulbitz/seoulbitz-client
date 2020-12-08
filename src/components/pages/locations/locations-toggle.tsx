import Clock from '@/components/icons/clock/clock';
import Distance from '@/components/icons/distance/distance';
import Heart from '@/components/icons/heart/heart';
import Div from '@/components/styled-system/div/div';
import Span from '@/components/styled-system/span/span';
import { theme } from '@/styles/theme';
import React, { useState } from 'react';

const LocationsToggle = () => {
  const [state, setState] = useState<'latest' | 'likes' | 'distance'>('latest');

  const handleLatestClick = () => setState('latest');
  const handleLikesClick = () => setState('likes');
  const handleDistanceClick = () => setState('distance');

  return (
    <>
      <Div display="flex" alignItems="center" justifyContent="center" marginTop="40px">
        <Span fontFamily={theme.fonts.futura} fontSize="16px" lineHeight="22px" fontWeight="500">
          Sort by
        </Span>
        <Span
          marginLeft="2px"
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="22px"
          fontWeight="500"
          color="#0511F2">
          latest
        </Span>
      </Div>
      <Div
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        border="2px solid #0511F2"
        borderRadius="29px"
        marginTop="16px">
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
          Latest
        </Div>
        <Div
          display="flex"
          justifyContent="center"
          alignItems="center"
          onClick={handleDistanceClick}
          width="48px"
          height="48px"
          margin="2px"
          borderRadius="100px"
          backgroundColor={state === 'latest' ? '#0511F2' : 'initial'}>
          Distance
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
          backgroundColor={state === 'latest' ? '#0511F2' : 'initial'}>
          Likes
        </Div>
      </Div>
    </>
  );
};

export default LocationsToggle;
