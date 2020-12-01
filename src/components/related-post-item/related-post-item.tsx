import { theme } from '@/styles/theme';
import React, { FC } from 'react';
import Div from '../styled-system/div/div';
import Span from '../styled-system/span/span';

type RelatedPostItemProps = {
  title: string;
  koTitle?: string;
  subtitle: string;
};

const RelatedPostItem: FC<RelatedPostItemProps> = ({ title, koTitle, subtitle }) => {
  return (
    <Div>
      <Div position="relative" paddingTop="75%">
        <Div
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          backgroundSize="cover"
          backgroundImage="url('https://scontent-ort2-1.cdninstagram.com/v/t51.2885-15/e35/57286270_114670046398227_2576349361528457787_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com&_nc_cat=103&_nc_ohc=js3DIwAOIPkAX8dsjiC&tp=18&oh=76cb6bf0910fc3ef3ed12303dcb65cbe&oe=5FD47285')"
          backgroundPosition="center"
          borderRadius={['8px', null, '0px']}
        />
      </Div>
      <Div color="#080CCE" marginTop="16px">
        {koTitle && (
          <Span
            fontFamily={theme.fonts.nanumSquare}
            fontSize="16px"
            lineHeight="20px"
            fontWeight="800">
            {koTitle},{' '}
          </Span>
        )}
        <Span fontFamily={theme.fonts.futura} fontSize="16px" lineHeight="20px" fontWeight="700">
          {title}
        </Span>
      </Div>
      <Div
        fontFamily={theme.fonts.futura}
        fontWeight="400"
        marginTop="8px"
        fontSize="16px"
        lineHeight="20px">
        {subtitle}
      </Div>
    </Div>
  );
};

export default RelatedPostItem;
