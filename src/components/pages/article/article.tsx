import dayjs from 'dayjs';
import { theme } from '@/styles/theme';
import React, { FC } from 'react';
import { Cell, Grid } from '@/components/content/layout-grid/layout-grid';
import sanity from 'services/sanity';
import Span from '@/components/styled-system/span/span';
import Layout from '@/components/layout/layout';
import ArticleTitle from './article-title';
import ArticleSubtitle from './article-subtitle';
import ContentInteractionButtons from '@/components/content-interaction-buttons/content-interaction-buttons';
import LocationBody from './article-body';
import RelatedContentsSlider from '@/components/related-contents-slider/related-contents-slider';
import { ArticleDocument } from '@/services/sanity/api/article';

const Location: FC<{
  article: ArticleDocument;
}> = (props) => {
  const {
    _createdAt,
    title,
    subtitle,
    author,
    body,
    likes,
    recommendedArticles
  } = props.article;

  const creationDate = dayjs(_createdAt).format('MMM DD,YYYY');

  return (
    <Layout>
      <Grid width={1} justifyContent="center">
        <Cell width={1} marginTop="40px">
          <ArticleTitle title={title} />
        </Cell>
        <Cell width={1} marginTop={['16px', null, '24px']}>
          <ArticleSubtitle subtitle={subtitle} />
        </Cell>
        <Cell width={1} marginTop={['16px', null, '24px']}>
          <Span
            fontFamily={theme.fonts.futura}
            fontWeight="500"
            fontSize="16px"
            lineHeight="20px"
            color="#777777">
            Written by <Span color="#000000">{author.name}</Span>
            <br />
            {creationDate}
          </Span>
        </Cell>
        <Cell width={1} marginTop={['24px', null, '32px']}>
          <ContentInteractionButtons likes={likes} />
        </Cell>
        <Cell width={1} marginBottom={['40px']}>
          <LocationBody blocks={body} />
        </Cell>
        {recommendedArticles && recommendedArticles.length > 0 && (
          <Cell width={1}>
            <RelatedContentsSlider
              title="You might also want to checkout:"
              relatedContents={recommendedArticles}
            />
          </Cell>
        )}
      </Grid>
    </Layout>
  );
};

export default Location;

export const getServerSideProps = async (context) => {
  const { slug } = context.params;
  const article = await sanity.api.article.findOneBySlug(slug);

  if (!article) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      article
    }
  };
};
