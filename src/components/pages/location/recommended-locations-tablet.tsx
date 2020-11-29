import styled from '@emotion/styled';
import Div from '@/components/styled-system/div/div';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Span from '@/components/styled-system/span/span';
import { theme } from '@/styles/theme';

const LocationItem = () => {
  return (
    <Div>
      <Div display={[null, null, 'none']} position="relative" paddingTop="75%">
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
      <Div color="#080CCE" marginTop="16px">
        <Span
          fontFamily={theme.fonts.nanumSquare}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="800">
          {'일독일박'},{' '}
        </Span>
        <Span fontFamily={theme.fonts.futura} fontSize="16px" lineHeight="20px" fontWeight="700">
          {'Of. one book stay'}
        </Span>
      </Div>
      <Div
        display={[null, null, 'none']}
        fontFamily={theme.fonts.futura}
        fontWeight="400"
        marginTop="8px"
        fontSize="16px"
        lineHeight="20px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      </Div>
    </Div>
  );
};

const Wrapper = styled(Div)`
  .swiper-container {
    padding-bottom: 0px;
  }

  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }

  .swiper-pagination {
    display: none;
  }
`;

const RecommendedLocationsTablet = () => {
  return (
    <Wrapper>
      <Swiper spaceBetween={24} slidesPerView={2.4} navigation pagination={{ clickable: true }}>
        <SwiperSlide>
          <LocationItem />
        </SwiperSlide>
        <SwiperSlide>
          <LocationItem />
        </SwiperSlide>
        <SwiperSlide>
          <LocationItem />
        </SwiperSlide>
        <SwiperSlide>
          <LocationItem />
        </SwiperSlide>
        <SwiperSlide>
          <LocationItem />
        </SwiperSlide>
        <SwiperSlide>
          <LocationItem />
        </SwiperSlide>
        <SwiperSlide>
          <LocationItem />
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};

export default RecommendedLocationsTablet;
