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
import Meta from '@/components/meta/Meta';
import { i18n } from '../../../../i18n';

const Location: FC<{
  article: ArticleDocument;
}> = (props) => {
  const {
    _createdAt,
    title: { en: enTitle, ko: koTitle },
    subtitle: { en: enSubtitle, ko: koSubtitle },
    author,
    body: { en: enBody, ko: koBody },
    thumbnailImage,
    recommendedArticles
  } = props.article;

  const creationDate = dayjs(_createdAt).format('MMM DD,YYYY');

  return (
    <>
      <Meta
        meta={{
          title: `${enTitle} | Seoulbitz`,
          description: `${enSubtitle}`,
          keywords: '',
          ogTitle: `${enTitle}`,
          ogDescription: `${enSubtitle}`,
          ogSiteName: 'Seoulbitz',
          ogImage: sanity.image.getUrl(thumbnailImage)
        }}
      />
      <Layout>
        <Grid width={1} justifyContent="center">
          <Cell width={1} marginTop="40px">
            <ArticleTitle enTitle={enTitle} koTitle={koTitle} />
          </Cell>
          <Cell width={1} marginTop={['16px', null, '24px']}>
            <ArticleSubtitle
              subtitle={i18n.language === 'en' ? enSubtitle : koSubtitle}
            />
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
            <ContentInteractionButtons content={props.article} />
          </Cell>
          <Cell width={1} marginBottom={['40px']}>
            <LocationBody blocks={i18n.language === 'en' ? enBody : koBody} />
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
    </>
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
