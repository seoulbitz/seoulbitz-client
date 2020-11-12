import React, { FC } from 'react';
import Div, { DivProps } from '../../styled-system/div/div';
import Span, { SpanProps } from '../../styled-system/span/span';
import Img from '../../styled-system/img/img';

const PlaceItem: FC<any> = (props) => {
  return (
    <Div display="block" position="relative" padding="0">
      <Img
        height="232px"
        width="100%"
        verticalAlign="middle"
        borderRadius="8px"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundImage="url('https://scontent-ort2-1.cdninstagram.com/v/t51.2885-15/e35/57286270_114670046398227_2576349361528457787_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com&_nc_cat=103&_nc_ohc=js3DIwAOIPkAX8dsjiC&tp=18&oh=76cb6bf0910fc3ef3ed12303dcb65cbe&oe=5FD47285')"></Img>
      <Div display="flex" flexDirection="row" alignItems="flex-start" paddingTop="12px">
        <Span fontSize="15px" lineHeight="20px" fontWeight="800" color=" #080CCE">
          파도식물,
        </Span>
        <Span marginLeft="4px" fontSize="15px" lineHeight="20px" fontWeight="800" color=" #080CCE">
          Padosikmul
        </Span>
      </Div>
      <Div display="flex" flexDirection="row" alignItems="flex-start" marginTop="2px">
        <Span fontSize="12px" lineHeight="16px" color="#777777">
          Shopping/Ittaewon,
        </Span>
        <Span marginLeft="4px" fontSize="12px" lineHeight="16px" color="#777777">
          12 likes, 0.5km far
        </Span>
      </Div>
      <Div marginTop="4px" fontSize="14px" lineHeight="18px">
        A flower shop with a twist A flower shop with a twist A flower shop with a twist A shop with
        a twist A flower shop with a twist A flower shop with a twist A flower shop with a twist A
        shop with
      </Div>
    </Div>
  );
};

export default PlaceItem;
