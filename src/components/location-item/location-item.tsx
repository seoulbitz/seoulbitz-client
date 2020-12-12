import React, { FC } from 'react';
import Div from '../styled-system/div/div';
import Span from '../styled-system/span/span';
import { theme } from '@/styles/theme';
import styled from '@emotion/styled';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

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

type LocationItemProps = {
  title: string;
  titleKo: string;
  slug: string;
  subtitle: string;
  images: SanityImageSource[];
  likes: number;
};

const LocationItem: FC<LocationItemProps> = ({
  title,
  titleKo,
  slug,
  subtitle,
  images,
  likes,
  ...rest
}) => {
  return (
    <Div>
      {/* For desktop view */}
      <DesktopImage
        display={['none', null, 'block']}
        width="100%"
        height="288px"
        backgroundImage="url('https://cdn.herenow.city/assets/uploads/sites/9/2018/06/02175213/pado8-765x510.jpg')"
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
            Shopping / Ittaewon
          </Div>
          <Div>
            <Div
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center">
              <Div
                fontFamily={theme.fonts.futura}
                fontSize="24px"
                lineHeight="32px"
                fontWeight="800"
                color="#ffffff">
                {title}
              </Div>
              <Div
                fontFamily={theme.fonts.nanumSquare}
                fontSize="24px"
                lineHeight="32px"
                fontWeight="700"
                color="#ffffff">
                {titleKo}
              </Div>
            </Div>
            <Div
              marginTop="16px"
              fontFamily={theme.fonts.futura}
              alignItems="center"
              fontSize="16px"
              lineHeight="20px"
              fontWeight="400"
              textAlign="center"
              color="#ffffff">
              {subtitle}
            </Div>
          </Div>
          <Div
            fontFamily={theme.fonts.futura}
            fontSize="16px"
            lineHeight="20px"
            fontWeight="500"
            color="#ffffff">
            {likes} likes / 3 km far
          </Div>
        </Div>
      </DesktopImage>

      {/* For mobile & tablet view */}
      <Div
        display={[null, null, 'none']}
        position="relative"
        paddingTop="66.66%">
        <Div
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          backgroundSize="cover"
          backgroundImage="url('https://cdn.herenow.city/assets/uploads/sites/9/2018/06/02175213/pado8-765x510.jpg')"
          backgroundPosition="center"
          borderRadius="8px"
        />
      </Div>

      <Div
        display={['flex', null, 'none']}
        flexDirection="row"
        alignItems="flex-start"
        paddingTop="16px">
        <Span
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="800"
          color=" #080CCE">
          {title},
        </Span>
        <Span
          fontFamily={theme.fonts.nanumSquare}
          fontWeight="700"
          marginLeft="4px"
          fontSize="16px"
          lineHeight="20px"
          color=" #080CCE">
          {titleKo}
        </Span>
      </Div>
      <Div
        display={[null, null, 'none']}
        fontFamily={theme.fonts.futura}
        fontWeight="400"
        marginTop="8px"
        fontSize="16px"
        lineHeight="20px">
        {subtitle}
      </Div>
      <Div
        display={['flex', null, 'none']}
        flexDirection="row"
        alignItems="flex-start"
        marginTop="8px"
        whiteSpace="nowrap">
        <Span
          fontFamily={theme.fonts.futura}
          fontSize="14px"
          lineHeight="18px"
          fontWeight="500"
          color="#777777">
          Shoppint / Ittaewon,
        </Span>
        <Span
          fontFamily={theme.fonts.futura}
          marginLeft="4px"
          fontSize="14px"
          lineHeight="18px"
          fontWeight="500"
          color="#777777">
          {likes} likes
        </Span>
        <Span
          fontFamily={theme.fonts.futura}
          marginLeft="4px"
          fontSize="14px"
          lineHeight="18px"
          fontWeight="500"
          color="#777777">
          , 3 km far
        </Span>
      </Div>
    </Div>
  );
};

export default LocationItem;
