/* eslint-disable react/display-name */
import P from '@/components/styled-system/p/p';
import { theme } from '@/styles/theme';
import SanityBlockContent from '@sanity/block-content-to-react';
import { FC } from 'react';

const serializers = {
  types: {
    block: (props) => {
      const { style } = props.node;

      switch (style) {
        case 'h1': {
          return null;
        }
        case 'h2': {
          return null;
        }
        case 'h3': {
          return null;
        }
        case 'normal': {
          return (
            <P
              fontFamily={theme.fonts.adelle}
              fontSize="16px"
              lineHeight="24px"
              fontWeight="400"
              marginTop={['24px', null, '32px']}
              marginBottom="0px">
              {props.children}
            </P>
          );
        }
      }
      return null;
    }
  }
};

const BlockContent: FC<{
  blocks?: any;
}> = ({ blocks }) => {
  return <SanityBlockContent blocks={blocks} serializers={serializers} />;
};

export default BlockContent;
