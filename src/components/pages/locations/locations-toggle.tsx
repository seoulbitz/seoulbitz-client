import Clock from '@/components/icons/clock/clock';
import ColoredClock from '@/components/icons/clock/colored-clock';
import ColoredDistance from '@/components/icons/distance/colored-distance';
import Distance from '@/components/icons/distance/distance';
import ColoredHeart from '@/components/icons/heart/colored-heart';
import Heart from '@/components/icons/heart/heart';
import Div from '@/components/styled-system/div/div';
import Span from '@/components/styled-system/span/span';
import { theme } from '@/styles/theme';
import React, { useState } from 'react';

const LocationsToggle = () => {
  const [isColoredHeart, setIsColoredHeart] = useState(false);
  const [isColoredClock, setIsColoredClock] = useState(false);
  const [isColoredDistance, setIsColoredDistance] = useState(false);

  const handleClickDistance = () => {
    setIsColoredDistance(!isColoredDistance);
  };

  const handleClickHeart = () => {
    setIsColoredHeart(!isColoredHeart);
  };

  const handleClickClock = () => {
    setIsColoredClock(!isColoredClock);
  };

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
        <Div onClick={handleClickDistance}>
          {isColoredDistance ? <Distance /> : <ColoredDistance />}
        </Div>
        <Div onClick={handleClickClock}> {isColoredClock ? <Clock /> : <ColoredClock />}</Div>
        <Div onClick={handleClickHeart}>{isColoredHeart ? <Heart /> : <ColoredHeart />}</Div>
      </Div>
    </>
  );
};

export default LocationsToggle;
