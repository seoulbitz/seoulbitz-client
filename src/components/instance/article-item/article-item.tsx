import React, { FC } from 'react';
import Div from '../../styled-system/div/div';
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

type ArticleItemProps = {
  title: string;
  titleKo: string;
  slug: string;
  subtitle: string;
  images: SanityImageSource[];
  likes: number;
};

const ArticleItem: FC<ArticleItemProps> = ({
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
          justifyContent="center"
          padding="24px"
          alignItems="center"
          height="100%">
          <Div
            fontFamily={theme.fonts.futura}
            fontSize="24px"
            lineHeight="32px"
            fontWeight="500"
            color="#FFFFFF">
            {/* {title} */}
            Pater noster qui es in caelis
          </Div>
          <Div
            textAlign="center"
            fontFamily={theme.fonts.futura}
            fontSize="16px"
            lineHeight="20px"
            fontWeight="400"
            marginTop="16px"
            color="#FFFFFF">
            {/* {subtitle} */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
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
          backgroundImage="url('https://cdn.herenow.city/assets/uploads/sites/9/2018/06/02175213/pado8-765x510.jpg')"
          backgroundPosition="center"
          borderRadius="8px"
        />
      </Div>
      <Div
        display={['flex', null, 'none']}
        flexDirection="column"
        alignItems="flex-start"
        marginTop="12px">
        <Div
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="700"
          color=" #080CCE">
          Pater noster qui es in caelis
        </Div>
        <Div
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="400"
          marginTop="4px"
          color="#000000">
          {/* {subtitle} */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Div>
      </Div>
    </Div>
  );
};
export default ArticleItem;
