import Clock from '@/components/icons/clock/clock';
import Distance from '@/components/icons/distance/distance';
import Heart from '@/components/icons/heart/heart';
import Div from '@/components/styled-system/div/div';
import Span from '@/components/styled-system/span/span';
import { theme } from '@/styles/theme';
import styled from '@emotion/styled';
import React, { FC, useState } from 'react';

const DistanceWhite = styled(Distance)`
  path:nth-child(1) {
    fill: #ffffff;
  }

  path:nth-child(2) {
    stroke: #ffffff;
  }

  path:nth-child(3) {
    fill: #ffffff;
  }

  path:nth-child(4) {
    fill: #ffffff;
  }

  path:nth-child(5) {
    stroke: #ffffff;
  }
`;
const ClockWhite = styled(Clock)`
  path:nth-child(1) {
    stroke: #ffffff;
  }

  path:nth-child(2) {
    stroke: #ffffff;
  }
`;

const HeartNormal = styled(Heart)`
  path:nth-child(1) {
    stroke: rgb(130, 136, 249);
  }
`;
const HeartWhite = styled(Heart)`
  path:nth-child(1) {
    stroke: #ffffff;
  }
`;

type ContentListToggleProps = {
  items?: {
    distance: boolean;
    latest: boolean;
    likes: boolean;
  };
  onChange?: (value: 'distance' | 'latest' | 'likes') => void;
};

// TODO: Refactor to get selected value through props instead of managing its own state
const ContentListToggle: FC<ContentListToggleProps> = ({
  items = { distance: true, latest: true, likes: true },
  onChange
}) => {
  const [state, setState] = useState<'distance' | 'latest' | 'likes'>('latest');

  const handleLatestClick = () => {
    setState('latest');
    if (onChange) {
      onChange('latest');
    }
  };
  const handleLikesClick = () => {
    setState('likes');
    if (onChange) {
      onChange('likes');
    }
  };
  const handleDistanceClick = () => {
    setState('distance');
    if (onChange) {
      onChange('distance');
    }
  };

  const { distance, latest, likes } = items;

  const buttonCount = Object.keys(items).filter((key) => {
    return items[key];
  }).length;
  const containerWidth = 40 * buttonCount + 4 * buttonCount + 4;
  const labelMarginLeft = `${containerWidth / 2 - 48}px`;

  return (
    <>
      <Div
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        marginTop="40px"
        marginLeft={labelMarginLeft}
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
        border="1px solid #000000"
        borderRadius="29px"
        marginTop="16px"
        width={containerWidth}
        height="48px">
        {distance && (
          <Div
            display="flex"
            justifyContent="center"
            alignItems="center"
            onClick={handleDistanceClick}
            width="40px"
            height="40px"
            margin="2px"
            borderRadius="100px"
            backgroundColor={state === 'distance' ? '#0511F2' : 'initial'}>
            {state === 'distance' ? <DistanceWhite /> : <Distance />}
          </Div>
        )}
        {latest && (
          <Div
            display="flex"
            justifyContent="center"
            alignItems="center"
            onClick={handleLatestClick}
            width="40px"
            height="40px"
            margin="2px"
            borderRadius="100px"
            backgroundColor={state === 'latest' ? '#0511F2' : 'initial'}>
            {state === 'latest' ? <ClockWhite /> : <Clock />}
          </Div>
        )}
        {likes && (
          <Div
            display="flex"
            justifyContent="center"
            alignItems="center"
            onClick={handleLikesClick}
            width="40px"
            height="40px"
            margin="2px"
            borderRadius="100px"
            backgroundColor={state === 'likes' ? '#0511F2' : 'initial'}>
            {state === 'likes' ? <HeartWhite /> : <HeartNormal />}
          </Div>
        )}
      </Div>
    </>
  );
};

export default ContentListToggle;
