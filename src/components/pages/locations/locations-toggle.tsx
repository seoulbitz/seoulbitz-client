import Clock from '@/components/icons/clock/clock';
import Distance from '@/components/icons/distance/distance';
import Heart from '@/components/icons/heart/heart';
import Div from '@/components/styled-system/div/div';
import Span from '@/components/styled-system/span/span';
import { theme } from '@/styles/theme';
import React, { useState } from 'react';

enum ToggleValues {
  latest = 'latest',
  likes = 'likes',
  distance = 'distance'
}

const LocationsToggle = () => {
  const [state, setState] = useState<ToggleValues>(ToggleValues.latest);

  const handleLatestClick = () => setState(ToggleValues.latest);
  const handleLikesClick = () => setState(ToggleValues.likes);
  const handleDistanceClick = () => setState(ToggleValues.distance);

  return (
    <>
      <Div
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        marginTop="40px"
        marginLeft="33px"
        width="100%">
        <Span
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="22px"
          whiteSpace="nowrap">
          Sort by
        </Span>
        {state === 'distance' && (
          <Span
            marginLeft="4px"
            fontFamily={theme.fonts.futura}
            fontStyle="italic"
            fontSize="16px"
            lineHeight="22px"
            fontWeight="500"
            color="#0511F2">
            distance
          </Span>
        )}
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
        width="160px"
        height="56px">
        <Div
          display="flex"
          justifyContent="center"
          alignItems="center"
          onClick={handleDistanceClick}
          width="48px"
          height="48px"
          margin="2px"
          borderRadius="100px"
          backgroundColor={state === 'distance' ? '#0511F2' : 'initial'}>
          <Distance fillColor={state === 'distance' ? '#FFFFFF' : '#8288F9'} />
        </Div>
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
          <Heart fillColor={state === 'likes' ? '#FFFFFF' : '#8288F9  '} />
        </Div>
      </Div>
    </>
  );
};

export default LocationsToggle;
