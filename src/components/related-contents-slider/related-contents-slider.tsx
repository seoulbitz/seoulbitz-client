import { theme } from '@/styles/theme';
import styled from '@emotion/styled';
import React, { FC, useState } from 'react';
import ArrowLeft from '../icons/arrow-left/arrow-left';
import ArrowRight from '../icons/arrow-right/arrow-right';
import Button from '../styled-system/button/button';
import Div from '../styled-system/div/div';
import * as SwiperReact from 'swiper/react';
import Swiper from 'swiper';
import RelatedContentItem from '../related-content-item/related-content-item';
import { LocationDocument } from '@/services/sanity/api/location';
import { ArticleDocument } from '@/services/sanity/api/article';
import Link from 'next/link';
import A from '../styled-system/a/a';

type RelatedContentsSliderProps = {
  title: string;
  relatedContents: (LocationDocument | ArticleDocument)[];
};

const RelatedContentsSlider: FC<RelatedContentsSliderProps> = ({
  title,
  relatedContents
}) => {
  const [swiper, setSwiper] = useState<Swiper>(null);

  const handleSlidePrev = () => {
    swiper.slidePrev();
  };

  const handleSlideNext = () => {
    swiper.slideNext();
  };

  return (
    <>
      <Div height="1px" backgroundColor="#f2f2f2" />
      <Div
        marginTop="40px"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <Div
          fontFamily={theme.fonts.futura}
          fontSize="20px"
          lineHeight="24px"
          fontWeight="700">
          {title}
        </Div>
        <Div display={['none', null, 'block']}>
          <Div display="flex" flexDirection="row">
            <Div>
              <Button
                background="none"
                border="1px solid #000000"
                margin="0"
                outline="none"
                width="40px"
                height="40px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                cursor="pointer"
                onClick={handleSlidePrev}>
                <ArrowLeft verticalAlign="middle" />
              </Button>
            </Div>
            <Div marginLeft="8px">
              <Button
                background="none"
                border="1px solid #000000"
                margin="0"
                outline="none"
                width="40px"
                height="40px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                cursor="pointer"
                onClick={handleSlideNext}>
                <ArrowRight verticalAlign="middle" />
              </Button>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div
        marginTop="24px"
        marginBottom="40px"
        width={['100vw', '100%']}
        marginLeft={['-20px', '0px']}>
        <Wrapper>
          <SwiperReact.Swiper
            spaceBetween={20}
            slidesPerView={1.4}
            slidesOffsetBefore={20}
            slidesOffsetAfter={20}
            onSwiper={(swiper) => {
              setSwiper(swiper);
            }}
            breakpoints={{
              768: {
                spaceBetween: 24,
                slidesPerView: 2.4,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0
              },
              1280: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                allowTouchMove: false
              }
            }}>
            {relatedContents.map((content) => {
              if (content._type === 'location') {
                const {
                  _id,
                  slug,
                  images,
                  title,
                  subtitle
                } = content as LocationDocument;
                return (
                  <SwiperReact.SwiperSlide key={_id}>
                    <Link href={`/locations/${slug.current}`} passHref>
                      <A color="initial" textDecoration="initial">
                        <RelatedContentItem
                          thumbnailImage={images[0]}
                          title={title}
                          subtitle={subtitle}
                        />
                      </A>
                    </Link>
                  </SwiperReact.SwiperSlide>
                );
              }

              if (content._type === 'article') {
                const {
                  _id,
                  slug,
                  thumbnailImage,
                  title,
                  subtitle
                } = content as ArticleDocument;
                return (
                  <SwiperReact.SwiperSlide key={_id}>
                    <Link href={`/articles/${slug.current}`} passHref>
                      <A color="initial" textDecoration="initial">
                        <RelatedContentItem
                          thumbnailImage={thumbnailImage}
                          title={title}
                          subtitle={subtitle}
                        />
                      </A>
                    </Link>
                  </SwiperReact.SwiperSlide>
                );
              }

              return null;
            })}
          </SwiperReact.Swiper>
        </Wrapper>
      </Div>
    </>
  );
};

export default RelatedContentsSlider;

const Wrapper = styled(Div)`
  /**
 * Swiper 6.3.5
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2020 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: October 30, 2020
 */

  .swiper-container {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
  }
  .swiper-container-vertical > .swiper-wrapper {
    flex-direction: column;
  }
  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
  }
  .swiper-container-android .swiper-slide,
  .swiper-wrapper {
    transform: translate3d(0px, 0, 0);
  }
  .swiper-container-multirow > .swiper-wrapper {
    flex-wrap: wrap;
  }
  .swiper-container-multirow-column > .swiper-wrapper {
    flex-wrap: wrap;
    flex-direction: column;
  }
  .swiper-container-free-mode > .swiper-wrapper {
    transition-timing-function: ease-out;
    margin: 0 auto;
  }
  .swiper-slide {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transition-property: transform;
  }
`;
