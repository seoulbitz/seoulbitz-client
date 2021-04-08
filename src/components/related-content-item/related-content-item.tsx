import sanity from '@/services/sanity';
import { theme } from '@/styles/theme';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import React, { FC } from 'react';
import { i18n } from '../../../i18n';
import Div from '../styled-system/div/div';
import Span from '../styled-system/span/span';

type RelatedContentItemProps = {
  thumbnailImage: SanityImageSource;
  title: { en: string; ko: string };
  subtitle: { en: string; ko: string };
};

const RelatedContentItem: FC<RelatedContentItemProps> = ({
  thumbnailImage,
  title,
  subtitle
}) => {
  const url = sanity.image.getUrl(thumbnailImage);
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
          // TODO: Use <Image /> component to render to optimize rendering performance
          backgroundImage={`url('${url}')`}
          backgroundPosition="center"
          borderRadius={['8px', null, '0px']}
        />
      </Div>
      <Div color="#080CCE" marginTop="16px">
        <Span
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="700">
          {i18n.language === 'en' ? title.en : title.ko}
        </Span>
      </Div>
      <Div
        fontFamily={theme.fonts.futura}
        fontWeight="400"
        marginTop="8px"
        fontSize="16px"
        lineHeight="20px">
        {i18n.language === 'en' ? subtitle.en : subtitle.ko}
      </Div>
    </Div>
  );
};

export default RelatedContentItem;
