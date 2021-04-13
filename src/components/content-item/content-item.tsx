import React, { FC } from 'react';
import Div from '../styled-system/div/div';
import Span from '../styled-system/span/span';
import { theme } from '@/styles/theme';
import styled from '@emotion/styled';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import sanity from '@/services/sanity';
import { i18n } from '../../../i18n';

const DesktopImage = styled(Div)`
  > div {
    visibility: hidden;
  }
  &:hover {
    > div {
      visibility: visible;
      background-color: rgba(5, 18, 242, 0.5);
      width: 100%;
      }
    }
  }
`;

type ContentItemProps = {
  kind: 'location' | 'article';
  title: { en: string; ko: string };
  titleKo?: string;
  subtitle: { en: string; ko: string };
  subtitleKo?: string;
  images?: SanityImageSource[];
  likes?: number;
  author?: any;
  category?: string;
  area?: string;
  distance?: number;
};

const ContentItem: FC<ContentItemProps> = (props) => {
  console.log(props);
  const {
    kind,
    title,
    titleKo,
    subtitle,
    subtitleKo,
    images,
    likes,
    author,
    category,
    area,
    distance
  } = props;

  const isLocation = kind === 'location';
  const isArticle = kind === 'article';
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
          // justifyContent={isLocation ? 'space-between' : 'center'}
          justifyContent="space-between"
          padding="24px"
          alignItems="center"
          height="100%">
          {isLocation ? (
            <Div
              fontFamily={theme.fonts.futura}
              fontSize="16px"
              lineHeight="20px"
              fontWeight="500"
              color="#ffffff">
              {category} / {area}
            </Div>
          ) : (
            <Div
              fontFamily={theme.fonts.futura}
              fontSize="16px"
              lineHeight="20px"
              fontWeight="500"
              color="#ffffff">
              {author.name}
            </Div>
          )}
          <Div>
            <Div
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              whiteSpace="nowrap">
              <Div
                fontFamily={theme.fonts.futura}
                fontSize="24px"
                lineHeight="32px"
                fontWeight="800"
                textAlign="center"
                color="#ffffff">
                {i18n.language === 'en' ? title : null}
              </Div>
              {isLocation && (
                <Div
                  fontFamily={theme.fonts.nanumSquare}
                  fontSize="24px"
                  lineHeight="32px"
                  fontWeight="700"
                  color="#ffffff">
                  {i18n.language === 'ko' ? titleKo : null}
                </Div>
              )}
              {isArticle && (
                <Div
                  fontFamily={theme.fonts.nanumSquare}
                  fontSize="24px"
                  lineHeight="32px"
                  fontWeight="700"
                  color="#ffffff">
                  {i18n.language === 'ko' ? titleKo : null}
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
              {i18n.language === 'en' ? subtitle.en : subtitle.ko}
            </Div>
          </Div>
          <Div
            whiteSpace="nowrap"
            fontFamily={theme.fonts.futura}
            fontSize="16px"
            lineHeight="20px"
            fontWeight="500"
            color="#ffffff">
            {[likes > 0 && `${likes} likes`, distance && `${distance} km far`]
              .filter(Boolean)
              .join(', ')}
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
          {i18n.language === 'en' ? title : null}
          {isLocation && ''}
        </Span>
        {isLocation && (
          <Span
            fontFamily={theme.fonts.nanumSquare}
            fontWeight="800"
            fontSize="16px"
            lineHeight="20px"
            color=" #080CCE">
            {i18n.language === 'ko' ? titleKo : null}
          </Span>
        )}
        {isArticle && (
          <Span
            fontFamily={theme.fonts.nanumSquare}
            fontWeight="800"
            fontSize="16px"
            lineHeight="20px"
            color=" #080CCE">
            {i18n.language === 'ko' ? titleKo : null}
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
        {i18n.language === 'en' ? subtitle.en : subtitleKo}
      </Div>
      {isLocation ? (
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
          {likes > 0 && (
            <>
              ,
              <Span
                fontFamily={theme.fonts.futura}
                marginLeft="4px"
                fontSize="14px"
                lineHeight="18px"
                fontWeight="500"
                color="#777777">
                {likes} likes
              </Span>
            </>
          )}
          {distance && (
            <>
              ,
              <Span
                fontFamily={theme.fonts.futura}
                marginLeft="4px"
                fontSize="14px"
                lineHeight="18px"
                fontWeight="500"
                color="#777777">
                {distance} km far
              </Span>
            </>
          )}
        </Div>
      ) : (
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
            {author.name}
          </Span>
          {likes > 0 && (
            <>
              ,
              <Span
                fontFamily={theme.fonts.futura}
                marginLeft="4px"
                fontSize="14px"
                lineHeight="18px"
                fontWeight="500"
                color="#777777">
                {likes} likes
              </Span>
            </>
          )}
        </Div>
      )}
    </Div>
  );
};

export default ContentItem;
