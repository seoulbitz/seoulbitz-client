/* eslint-disable react/display-name */
import A from '@/components/styled-system/a/a';
import H1 from '@/components/styled-system/h1/h1';
import H2 from '@/components/styled-system/h2/h2';
import H3 from '@/components/styled-system/h3/h3';
import Img from '@/components/styled-system/img/img';
import P from '@/components/styled-system/p/p';
import Strong from '@/components/styled-system/strong/strong';
import { theme } from '@/styles/theme';
import SanityBlockContent from '@sanity/block-content-to-react';
import { FC } from 'react';
import sanity from '.';
import Figure from '@/components/styled-system/figure/figure';

const serializers = {
  marks: {
    strong: (props) => {
      return <Strong fontWeight="700">{props.children}</Strong>;
    },
    link: (props) => {
      return (
        <A href={props.mark.href} target="_blank" color="#080CCE">
          {props.children}
        </A>
      );
    }
  },
  types: {
    image: (props) => {
      // REF: https://github.com/sanity-io/block-content-to-hyperscript/blob/master/src/serializers.js#L92
      if (!props.node.asset) {
        return null;
      }

      const url = sanity.image.getUrl(props.node.asset);

      if (props.isInline) {
        return <Img width="100%" src={url} />;
      }

      return (
        <Figure margin="0px">
          <Img width="100%" src={url} />
        </Figure>
      );
    },
    block: (props) => {
      const { style } = props.node;
      switch (style) {
        case 'h1': {
          return (
            <H1
              fontFamily={theme.fonts.adelle}
              fontSize="24px"
              lineHeight="32px"
              fontWeight={700}
              marginTop={['24px', null, '32px']}
              marginBottom="0px">
              {props.children}
            </H1>
          );
        }
        case 'h2': {
          return (
            <H2
              fontFamily={theme.fonts.adelle}
              fontSize="20px"
              lineHeight="24px"
              fontWeight={700}
              marginTop={['24px', null, '32px']}
              marginBottom="0px">
              {props.children}
            </H2>
          );
        }
        case 'h3': {
          return (
            <H3
              fontFamily={theme.fonts.adelle}
              fontSize="18px"
              lineHeight="22px"
              fontWeight={700}
              marginTop={['24px', null, '32px']}
              marginBottom="0px">
              {props.children}
            </H3>
          );
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
  return (
    <SanityBlockContent
      blocks={blocks}
      serializers={serializers}
      imageOptions={{ w: 320, h: 240, fit: 'max' }}
    />
  );
};

export default BlockContent;
