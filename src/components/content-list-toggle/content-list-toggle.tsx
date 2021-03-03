import Clock from '@/components/icons/clock/clock';
import Distance from '@/components/icons/distance/distance';
import Heart from '@/components/icons/heart/heart';
import Div from '@/components/styled-system/div/div';
import Span from '@/components/styled-system/span/span';
import { theme } from '@/styles/theme';
import styled from '@emotion/styled';
import React, { FC } from 'react';
import { withTranslation } from '../../../i18n';
import { TFunction } from 'next-i18next';

const DistanceNormal = styled(Distance)`
  path:nth-child(1) {
    fill: rgb(0 0 0 / 0.3);
  }

  path:nth-child(2) {
    stroke: rgb(0 0 0 / 0.3);
  }

  path:nth-child(3) {
    fill: rgb(0 0 0 / 0.3);
  }

  path:nth-child(4) {
    fill: rgb(0 0 0 / 0.3);
  }

  path:nth-child(5) {
    stroke: rgb(0 0 0 / 0.3);
  }
`;

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

const ClockNormal = styled(Clock)`
  path:nth-child(1) {
    stroke: rgb(0 0 0 / 0.3);
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
    stroke: rgb(0 0 0 / 0.3);
  }
`;
const HeartWhite = styled(Heart)`
  path:nth-child(1) {
    stroke: #ffffff;
  }
`;

type ContentListToggleProps = {
  readonly t: TFunction;
  items?: {
    distance: boolean;
    latest: boolean;
    likes: boolean;
  };
  value: string;
  onChange?: (value: 'distance' | 'latest' | 'likes') => void;
};

// TODO: Refactor to get selected value through props instead of managing its own state
const ContentListToggle: FC<ContentListToggleProps> = ({
  items = { distance: true, latest: true, likes: true },
  value,
  onChange,
  t
}) => {
  const handleLatestClick = () => {
    if (onChange) {
      onChange('latest');
    }
  };
  const handleLikesClick = () => {
    if (onChange) {
      onChange('likes');
    }
  };
  const handleDistanceClick = () => {
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
          {t('content-list-toggle:sort-en')}
        </Span>
        {value === 'distance' && (
          <Span
            whiteSpace="nowrap"
            marginLeft="4px"
            fontFamily={theme.fonts.futura}
            fontSize="16px"
            lineHeight="22px"
            fontWeight="500"
            color="#0511F2">
            {t('content-list-toggle:distance')}
          </Span>
        )}
        {value === 'latest' && (
          <Span
            whiteSpace="nowrap"
            marginLeft="4px"
            fontFamily={theme.fonts.futura}
            fontSize="16px"
            lineHeight="22px"
            fontWeight="500"
            color="#0511F2">
            {t('content-list-toggle:latest')}
          </Span>
        )}
        {value === 'likes' && (
          <Span
            whiteSpace="nowrap"
            marginLeft="4px"
            fontFamily={theme.fonts.futura}
            fontSize="16px"
            lineHeight="22px"
            fontWeight="500"
            color="#0511F2">
            {t('content-list-toggle:likes')}
          </Span>
        )}
        <Span
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="22px"
          marginLeft="6px"
          whiteSpace="nowrap">
          {t('content-list-toggle:sort-ko')}
        </Span>
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
            backgroundColor={value === 'distance' ? '#0511F2' : 'initial'}>
            {value === 'distance' ? <DistanceWhite /> : <DistanceNormal />}
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
            backgroundColor={value === 'latest' ? '#0511F2' : 'initial'}>
            {value === 'latest' ? <ClockWhite /> : <ClockNormal />}
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
            backgroundColor={value === 'likes' ? '#0511F2' : 'initial'}>
            {value === 'likes' ? <HeartWhite /> : <HeartNormal />}
          </Div>
        )}
      </Div>
    </>
  );
};

export default withTranslation('common')(ContentListToggle);
