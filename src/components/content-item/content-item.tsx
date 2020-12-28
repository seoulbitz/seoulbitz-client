import React, { FC } from 'react';
import Div from '../styled-system/div/div';
import Span from '../styled-system/span/span';
import { theme } from '@/styles/theme';
import styled from '@emotion/styled';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import sanity from '@/services/sanity';

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

type ContentItemProps = {
  kind: 'location' | 'article';
  title: string;
  titleKo?: string;
  subtitle: string;
  images?: SanityImageSource[];
  likes?: number;
  category?: string;
  area?: string;
};

const ContentItem: FC<ContentItemProps> = ({
  kind,
  title,
  titleKo,
  subtitle,
  images,
  likes,
  category,
  area
}) => {
  const isLocation = kind === 'location';

  const thumbnailImageUrl = sanity.image.getUrl(images[0]);

  return (
    <Div>
      {/* For desktop view */}
      <DesktopImage
        display={['none', null, 'inline-flex']}
        width="100%"
        height="288px"
        // TODO: Use <Image /> component to render to optimize rendering performance
        backgroundImage={`url('${thumbnailImageUrl}')`}
        backgroundPosition="center"
        backgroundSize="cover">
        <Div
          display="flex"
          flexDirection="column"
          justifyContent={isLocation ? 'space-between' : 'center'}
          padding="24px"
          alignItems="center"
          height="100%">
          {isLocation && (
            <Div
              fontFamily={theme.fonts.futura}
              fontSize="16px"
              lineHeight="20px"
              fontWeight="500"
              color="#ffffff">
              {category} / {area}
            </Div>
          )}
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
                textAlign="center"
                color="#ffffff">
                {title}
              </Div>
              {isLocation && (
                <Div
                  fontFamily={theme.fonts.nanumSquare}
                  fontSize="24px"
                  lineHeight="32px"
                  fontWeight="700"
                  color="#ffffff">
                  {titleKo}
                </Div>
              )}
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
          {isLocation && (
            <Div
              fontFamily={theme.fonts.futura}
              fontSize="16px"
              lineHeight="20px"
              fontWeight="500"
              color="#ffffff">
              {likes} likes / 3 km far
            </Div>
          )}
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
          // TODO: Use <Image /> component to render to optimize rendering performance
          backgroundImage={`url('${thumbnailImageUrl}')`}
          backgroundPosition="center"
          borderRadius="8px"
        />
      </Div>

      <Div
        width="100%"
        display={['block', null, 'none']}
        flexDirection="row"
        paddingTop="16px">
        <Span
          width="100%"
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="800"
          color=" #080CCE">
          {title}
          {isLocation && ','}
        </Span>
        {isLocation && (
          <Span
            fontFamily={theme.fonts.nanumSquare}
            fontWeight="700"
            marginLeft="4px"
            fontSize="16px"
            lineHeight="20px"
            color=" #080CCE">
            {titleKo}
          </Span>
        )}
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
      {isLocation && (
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
            {category} / {area}
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
      )}
    </Div>
  );
};

export default ContentItem;
