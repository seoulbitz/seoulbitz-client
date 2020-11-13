import React, { FC } from 'react';
import Div, { DivProps } from '../../styled-system/div/div';
import Span, { SpanProps } from '../../styled-system/span/span';
import { theme } from '@/styles/theme';
import styled from '@emotion/styled';

const DesktopImage = styled(Div)`
  > div {
    visibility: hidden;
  }
  &:hover {
    > div {
      visibility: visible;
      background-color: rgb(5, 18, 242, 0.5)
      }
    }
  }
`;

const PlaceItem: FC<any> = ({
  categorylocation,
  koreanname,
  englishname,
  discription,
  likes,
  image,
  ...rest
}) => {
  return (
    <Div>
      <DesktopImage
        width="100%"
        height="288px"
        backgroundImage={`url(${image})`}
        // backgroundImage="url('https://scontent-ort2-1.cdninstagram.com/v/t51.2885-15/e35/57286270_114670046398227_2576349361528457787_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com&_nc_cat=103&_nc_ohc=js3DIwAOIPkAX8dsjiC&tp=18&oh=76cb6bf0910fc3ef3ed12303dcb65cbe&oe=5FD47285')"
        backgroundPosition="center"
        backgroundSize="cover">
        <Div
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          padding="26px"
          alignItems="center"
          height="100%">
          <Div
            fontFamily={theme.fonts.futura}
            fontSize="16px"
            lineHeight="20px"
            fontWeight="500"
            color="#ffffff">
            {categorylocation}
          </Div>
          <Div display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Div
              fontFamily={theme.fonts.nanumsquare}
              fontSize="22px"
              lineHeight="32px"
              fontWeight="800"
              color="#ffffff">
              {koreanname}
            </Div>
            <Div
              fontFamily={theme.fonts.futura}
              fontSize="24px"
              lineHeight="32px"
              fontWeight="700"
              color="#ffffff">
              {englishname}
            </Div>
          </Div>
          <Div
            fontFamily={theme.fonts.futura}
            alignItems="center"
            fontSize="16px"
            lineHeight="20px"
            fontWeight="400"
            color="#ffffff">
            {discription}
          </Div>
          <Div
            fontFamily={theme.fonts.futura}
            fontSize="16px"
            lineHeight="20px"
            fontWeight="500"
            color="#ffffff">
            {likes}
          </Div>
        </Div>
      </DesktopImage>

      {/* 모바일 용 */}
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
          fontFamily={theme.fonts.nanumsquare}
          fontSize="15px"
          lineHeight="20px"
          fontWeight="800"
          color=" #080CCE">
          {koreanname}
        </Span>
        <Span
          fontFamily={theme.fonts.futura}
          fontWeight="700"
          marginLeft="4px"
          fontSize="15px"
          lineHeight="20px"
          color=" #080CCE">
          {englishname}
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
          {categorylocation}
        </Span>
        <Span
          fontFamily={theme.fonts.futura}
          fontWeight="400"
          marginLeft="4px"
          fontSize="12px"
          lineHeight="16px"
          color="#777777">
          {likes}
        </Span>
      </Div>
      <Div
        display={[null, null, 'none']}
        fontFamily={theme.fonts.futura}
        fontWeight="400"
        marginTop="6px"
        fontSize="14px"
        lineHeight="18px">
        {discription}
      </Div>
    </Div>
  );
};

export default PlaceItem;
