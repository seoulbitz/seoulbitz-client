import Clock from '@/components/icons/clock/clock';
import Distance from '@/components/icons/distance/distance';
import Heart from '@/components/icons/heart/heart';
import Div from '@/components/styled-system/div/div';
import Span from '@/components/styled-system/span/span';
import { theme } from '@/styles/theme';
import React, { FC, useState } from 'react';

enum ToggleValues {
  latest = 'latest',
  likes = 'likes',
  distance = 'distance'
}

type ContentListToggleProps = {
  items?: {
    distance: boolean;
    latest: boolean;
    likes: boolean;
  };
};

const ContentListToggle: FC<ContentListToggleProps> = ({
  items = { distance: true, latest: true, likes: true }
}) => {
  const [state, setState] = useState<ToggleValues>(ToggleValues.latest);

  const handleLatestClick = () => setState(ToggleValues.latest);
  const handleLikesClick = () => setState(ToggleValues.likes);
  const handleDistanceClick = () => setState(ToggleValues.distance);

  const { distance, latest, likes } = items;

  const buttonCount = Object.keys(items).filter((key) => {
    return items[key];
  }).length;
  const containerWidth = 48 * buttonCount + 4 * buttonCount + 4;
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
        border="2px solid #0511F2"
        borderRadius="29px"
        marginTop="16px"
        width={containerWidth}
        height="56px">
        {distance && (
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
            <Distance
              fillColor={state === 'distance' ? '#FFFFFF' : '#8288F9'}
            />
          </Div>
        )}
        {latest && (
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
        )}
        {likes && (
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
        )}
      </Div>
    </>
  );
};

export default ContentListToggle;
