import React, { FC } from 'react';
import Div from '../../styled-system/div/div';
import Span from '../../styled-system/span/span';
import { theme } from '@/styles/theme';
import styled from '@emotion/styled';

const DesktopImage = styled(Div)`
  > div {
    visibility: hidden;
  }
  &:hover {
    > div {
      visibility: visible;
      background-color: rgba(5, 18, 242, 0.5)
      }
    }
  }
`;

type PlaceItemProps = {
  name: string;
  nameKO: string;
  category: string;
  likes: number;
  distance: number;
  description: string;
  thumbnailUrl: string;
};

const PlaceItem: FC<PlaceItemProps> = ({
  name,
  nameKO,
  category,
  likes,
  distance,
  description,
  thumbnailUrl,
  ...rest
}) => {
  return (
    <Div>
      {/* For desktop view */}
      <DesktopImage
        display={['none', null, 'block']}
        width="100%"
        height="288px"
        backgroundImage={`url(${thumbnailUrl})`}
        backgroundPosition="center"
        backgroundSize="cover">
        <Div
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          padding="24px"
          alignItems="center"
          height="100%">
          <Div
            fontFamily={theme.fonts.futura}
            fontSize="16px"
            lineHeight="20px"
            fontWeight="500"
            color="#ffffff">
            {category}
          </Div>
          <Div display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Div
              fontFamily={theme.fonts.nanumSquare}
              fontSize="22px"
              lineHeight="32px"
              fontWeight="800"
              color="#ffffff">
              {nameKO}
            </Div>
            <Div
              fontFamily={theme.fonts.futura}
              fontSize="24px"
              lineHeight="32px"
              fontWeight="700"
              color="#ffffff">
              {name}
            </Div>
          </Div>
          <Div
            fontFamily={theme.fonts.futura}
            alignItems="center"
            fontSize="16px"
            lineHeight="20px"
            fontWeight="400"
            textAlign="center"
            color="#ffffff">
            {description}
          </Div>
          <Div
            fontFamily={theme.fonts.futura}
            fontSize="16px"
            lineHeight="20px"
            fontWeight="500"
            color="#ffffff">
            {likes} likes
          </Div>
          <Div
            fontFamily={theme.fonts.futura}
            fontSize="16px"
            lineHeight="20px"
            fontWeight="500"
            color="#ffffff">
            {distance} km far
          </Div>
        </Div>
      </DesktopImage>

      {/* For mobile & tablet view */}
      <Div display={[null, null, 'none']} position="relative" paddingTop="66.66%">
        <Div
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          backgroundSize="cover"
          backgroundImage="url('https://scontent-ort2-1.cdninstagram.com/v/t51.2885-15/e35/57286270_114670046398227_2576349361528457787_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com&_nc_cat=103&_nc_ohc=js3DIwAOIPkAX8dsjiC&tp=18&oh=76cb6bf0910fc3ef3ed12303dcb65cbe&oe=5FD47285')"
          backgroundPosition="center"
          borderRadius="8px"
        />
      </Div>

      <Div
        display={['flex', null, 'none']}
        flexDirection="row"
        alignItems="flex-start"
        paddingTop="12px">
        <Span
          fontFamily={theme.fonts.nanumSquare}
          fontSize="15px"
          lineHeight="20px"
          fontWeight="800"
          color=" #080CCE">
          {nameKO},
        </Span>
        <Span
          fontFamily={theme.fonts.futura}
          fontWeight="700"
          marginLeft="4px"
          fontSize="15px"
          lineHeight="20px"
          color=" #080CCE">
          {name}
        </Span>
      </Div>
      <Div
        display={['flex', null, 'none']}
        flexDirection="row"
        alignItems="flex-start"
        marginTop="2px">
        <Span
          fontFamily={theme.fonts.futura}
          fontWeight="400"
          fontSize="12px"
          lineHeight="16px"
          color="#777777">
          {category}
        </Span>
        <Span
          fontFamily={theme.fonts.futura}
          fontWeight="400"
          marginLeft="4px"
          fontSize="12px"
          lineHeight="16px"
          color="#777777">
          {likes} likes
        </Span>
        <Span
          fontFamily={theme.fonts.futura}
          fontWeight="400"
          marginLeft="4px"
          fontSize="12px"
          lineHeight="16px"
          color="#777777">
          , {distance} km far
        </Span>
      </Div>
      <Div
        display={[null, null, 'none']}
        fontFamily={theme.fonts.futura}
        fontWeight="400"
        marginTop="6px"
        fontSize="14px"
        lineHeight="18px">
        {description}
      </Div>
    </Div>
  );
};

export default PlaceItem;
