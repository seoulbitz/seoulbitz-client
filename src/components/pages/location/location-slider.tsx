import Div from '@/components/styled-system/div/div';
import sanity from '@/services/sanity';
import styled from '@emotion/styled';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import React, { FC } from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

type LocationSliderProps = {
  images: SanityImageSource[];
};

SwiperCore.use([Navigation, Pagination]);

const LocationSlider: FC<LocationSliderProps> = ({ images }) => {
  return (
    <Wrapper
      width={['100vw', null, '100%']}
      marginLeft={['-20px', '-24px', 'auto']}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}>
        {images.map((image) => {
          const url = sanity.image.getUrl(image);
          return (
            <SwiperSlide key={url}>
              <Div
                display={['block', 'none']}
                position="relative"
                paddingTop="100%">
                <Div
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  bottom="0"
                  backgroundImage={`url(${url})`}
                  backgroundSize="cover"
                  backgroundPosition="center"
                />
              </Div>
              <Div
                display={['none', 'block']}
                height={[null, '440px', '440px']}
                backgroundImage={`url(${url})`}
                // backgroundSize="cover"
                // 이미지 슬라이더 background 사이즈번경
                backgroundSize="contain"
                backgroundRepeat="no-repeat"
                backgroundPosition="center"
                backgroundColor="black"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
};

export default LocationSlider;

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

  .swiper-container {
    padding-bottom: 22px;
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
  .swiper-slide-invisible-blank {
    visibility: hidden;
  }

  .swiper-container-css-mode > .swiper-wrapper {
    overflow: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .swiper-container-css-mode > .swiper-wrapper::-webkit-scrollbar {
    display: none;
  }
  .swiper-container-css-mode > .swiper-wrapper > .swiper-slide {
    scroll-snap-align: start start;
  }
  .swiper-container-horizontal.swiper-container-css-mode > .swiper-wrapper {
    scroll-snap-type: x mandatory;
  }
  .swiper-container-vertical.swiper-container-css-mode > .swiper-wrapper {
    scroll-snap-type: y mandatory;
  }
  :root {
    --swiper-navigation-size: 44px;
  }

  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    z-index: 10;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    width: 24px;
    height: 24px;
    margin: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .swiper-button-prev {
    background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='11.7071' y1='0.707107' x2='3.70711' y2='8.70711' stroke='white' stroke-width='2'/%3E%3Cline x1='3.70711' y1='7.29289' x2='11.7071' y2='15.2929' stroke='white' stroke-width='2'/%3E%3C/svg%3E%0A");
  }

  .swiper-button-next {
    background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='4.29289' y1='15.2929' x2='12.2929' y2='7.29289' stroke='white' stroke-width='2'/%3E%3Cline x1='12.2929' y1='8.70711' x2='4.29289' y2='0.707106' stroke='white' stroke-width='2'/%3E%3C/svg%3E%0A");
  }

  .swiper-button-prev.swiper-button-disabled,
  .swiper-button-next.swiper-button-disabled {
    display: none;
  }

  .swiper-button-prev,
  .swiper-container-rtl .swiper-button-next {
    left: 16px;
    right: auto;
  }

  .swiper-button-next,
  .swiper-container-rtl .swiper-button-prev {
    right: 16px;
    left: auto;
  }

  .swiper-button-prev.swiper-button-white,
  .swiper-button-next.swiper-button-white {
    --swiper-navigation-color: #ffffff;
  }
  .swiper-button-prev.swiper-button-black,
  .swiper-button-next.swiper-button-black {
    --swiper-navigation-color: #000000;
  }
  .swiper-button-lock {
    display: none;
  }

  .swiper-pagination {
    position: absolute;
    text-align: center;
    transition: 300ms opacity;
    transform: translate3d(0, 0, 0);
    z-index: 10;
  }
  .swiper-pagination.swiper-pagination-hidden {
    opacity: 0;
  }

  .swiper-pagination-fraction,
  .swiper-pagination-custom,
  .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 0px;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-pagination-bullets-dynamic {
    overflow: hidden;
    font-size: 0;
  }

  .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
    transform: scale(0.33);
    position: relative;
  }
  .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {
    transform: scale(1);
  }
  .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {
    transform: scale(1);
  }
  .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {
    transform: scale(0.66);
  }
  .swiper-pagination-bullets-dynamic
    .swiper-pagination-bullet-active-prev-prev {
    transform: scale(0.33);
  }
  .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {
    transform: scale(0.66);
  }
  .swiper-pagination-bullets-dynamic
    .swiper-pagination-bullet-active-next-next {
    transform: scale(0.33);
  }
  .swiper-pagination-bullet {
    width: 6px;
    height: 6px;
    display: inline-block;
    border-radius: 100%;
    background-color: #aaaaaa;
  }
  button.swiper-pagination-bullet {
    border: none;
    margin: 0;
    padding: 0;
    box-shadow: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  .swiper-pagination-clickable .swiper-pagination-bullet {
    cursor: pointer;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
    background-color: #0511f2;
  }
  .swiper-container-vertical > .swiper-pagination-bullets {
    right: 10px;
    top: 50%;
    transform: translate3d(0px, -50%, 0);
  }
  .swiper-container-vertical
    > .swiper-pagination-bullets
    .swiper-pagination-bullet {
    margin: 6px 0;
    display: block;
  }
  .swiper-container-vertical
    > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
  }
  .swiper-container-vertical
    > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic
    .swiper-pagination-bullet {
    display: inline-block;
    transition: 200ms transform, 200ms top;
  }
  .swiper-container-horizontal
    > .swiper-pagination-bullets
    .swiper-pagination-bullet {
    margin: 0 2px;
  }
  .swiper-container-horizontal
    > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
  }
  .swiper-container-horizontal
    > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic
    .swiper-pagination-bullet {
    transition: 200ms transform, 200ms left;
  }
  .swiper-container-horizontal.swiper-container-rtl
    > .swiper-pagination-bullets-dynamic
    .swiper-pagination-bullet {
    transition: 200ms transform, 200ms right;
  }
`;
