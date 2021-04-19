import Button from '@/components/button/button';
import ContentItem from '@/components/content-item/content-item';
import Layout from '@/components/layout/layout';
import Div from '@/components/styled-system/div/div';
import { theme } from '@/styles/theme';
import React, { FC } from 'react';
import Link from 'next/link';
import A from '@/components/styled-system/a/a';
import { Cell, Grid } from '@/components/content/layout-grid/layout-grid';
import sanity from '@/services/sanity';
import { LocationDocument } from '@/services/sanity/api/location';
import { ArticleDocument } from '@/services/sanity/api/article';
import { useRouter } from 'next/dist/client/router';
import Meta from '@/components/meta/Meta';
import { TFunction } from 'next-i18next';
import { i18n, withTranslation, useTranslation } from '../../../../i18n';
import { createLocationCategoryService } from '@/services/sanity/api/location-category';

type SearchProps = {
  locationResults: LocationDocument[];
  articleResults: ArticleDocument[];
} & { readonly t: TFunction };

const Search: FC<SearchProps> = ({ t, ...props }) => {
  const router = useRouter();
  const {
    query: { query }
  } = router;
  const queryInURI = encodeURIComponent(query as string);

  const { locationResults, articleResults } = { ...props };

  const isResultsEmpty =
    locationResults.length === 0 && articleResults.length === 0;

  return (
    <>
      <Meta
        meta={{
          title: `${query} | Search | Seoulbitz`,
          description: '',
          keywords: '',
          ogTitle: `${query} | Search | Seoulbitz`,
          ogDescription: '',
          ogSiteName: 'Seoulbitz',
          ogImage: ''
        }}
      />
      <Layout>
        <Grid>
          <Cell textAlign="center" width="100%">
            <Div
              marginTop={['48px', null, '88px']}
              fontFamily={theme.fonts.futura}
              fontSize="28px"
              lineHeight="34px"
              fontWeight="700">
              {isResultsEmpty
                ? i18n.language === 'en'
                  ? 'No matches found for'
                  : null
                : i18n.language === 'en'
                ? 'Search results for'
                : null}
            </Div>
            <Div
              fontFamily={theme.fonts.futura}
              fontSize="28px"
              lineHeight="34px"
              fontWeight="700"
              color="#080CCE">
              “{query}”
            </Div>
            <Div
              fontFamily={theme.fonts.futura}
              fontSize="28px"
              lineHeight="34px"
              fontWeight="700">
              {isResultsEmpty
                ? i18n.language === 'en'
                  ? null
                  : '검색결과가 존재하지 않습니다'
                : i18n.language === 'en'
                ? null
                : '에 대한 검색결과'}
            </Div>
          </Cell>
        </Grid>
        {locationResults.length > 0 && (
          <>
            <Grid
              display="flex"
              justifyContent="center"
              marginTop={['56px', null, '64px']}>
              <Cell>
                <Div
                  fontFamily={theme.fonts.futura}
                  fontSize="24px"
                  lineHeight="32px"
                  fontWeight="700">
                  {t('search-results-all:locations')}
                </Div>
              </Cell>
            </Grid>
            <Grid
              marginTop={['40px', null, '48px']}
              maxWidth={[null, null, 'initial']}>
              {locationResults.map((location, i) => {
                const remainder = i % 4;
                const {
                  _id,
                  slug,
                  title,
                  subtitle,
                  thumbnailImage,
                  userLikes,
                  categories,
                  areas
                } = location;

                const href = `/locations/${slug.current}`;

                return (
                  <Cell
                    key={_id}
                    width={[
                      1,
                      1 / 2,
                      remainder === 1 || remainder === 2 ? 5 / 12 : 7 / 12
                    ]}
                    marginBottom={['40px', null, '24px']}>
                    <Link href={href} passHref>
                      <A textDecoration="initial" color="initial">
                        <ContentItem
                          kind="location"
                          title={title}
                          subtitle={subtitle}
                          images={[thumbnailImage]}
                          likes={userLikes.length}
                          categories={categories}
                          areas={areas}
                        />
                      </A>
                    </Link>
                  </Cell>
                );
              })}
              <Cell
                width={1}
                display="flex"
                marginTop={[null, null, '16px']}
                justifyContent="center">
                <Link href={`/search/locations?query=${queryInURI}`} passHref>
                  <A
                    width={[1, 'initial']}
                    textDecoration="initial"
                    display="inline">
                    <Button variant="black">
                      {t('search-results-all:more-locations')}
                    </Button>
                  </A>
                </Link>
              </Cell>
            </Grid>
          </>
        )}
        {locationResults.length > 0 && articleResults.length > 0 && (
          <Grid
            width={1}
            padding={[0, null, '0 12px']}
            marginTop={['56px', null, '64px']}
            maxWidth={[null, null, 'initial']}>
            <Cell
              padding={[0, null, '0 12px']}
              width={1}
              display="flex"
              justifyContent="center"
              alignItems="center">
              <Div width={1} height="1px" background="#F2F2F2" />
            </Cell>
          </Grid>
        )}
        {articleResults.length > 0 && (
          <>
            <Grid>
              <Cell textAlign="center" width="100%">
                <Div
                  marginTop={['56px', null, '64px']}
                  fontFamily={theme.fonts.futura}
                  fontSize="24px"
                  lineHeight="32px"
                  fontWeight="700">
                  {t('search-results-all:articles')}
                </Div>
              </Cell>
            </Grid>

            <Grid
              marginTop={['40px', null, '48px']}
              maxWidth={[null, null, 'initial']}>
              {articleResults.map((article, i) => {
                const remainder = i % 4;
                const {
                  _id,
                  slug,
                  author,
                  title,
                  subtitle,
                  thumbnailImage,
                  userLikes
                } = article;

                const href = `/articles/${slug.current}`;

                return (
                  <Cell
                    key={_id}
                    width={[
                      1,
                      1 / 2,
                      remainder === 1 || remainder === 2 ? 5 / 12 : 7 / 12
                    ]}
                    marginBottom="32px">
                    <Link href={href} passHref>
                      <A textDecoration="initial" color="initial">
                        <ContentItem
                          kind="article"
                          title={title}
                          subtitle={subtitle}
                          images={[thumbnailImage]}
                          likes={userLikes.length}
                          author={author}
                        />
                      </A>
                    </Link>
                  </Cell>
                );
              })}
              <Cell
                width={1}
                display="flex"
                marginTop={[null, null, '16px']}
                justifyContent="center">
                <Link href={`/search/articles?query=${queryInURI}`} passHref>
                  <A
                    width={[1, 'initial']}
                    textDecoration="initial"
                    display="inline">
                    <Button variant="black">
                      {t('search-results-all:more-articles')}
                    </Button>
                  </A>
                </Link>
              </Cell>
            </Grid>
          </>
        )}
      </Layout>
    </>
  );
};

export default withTranslation('common')(Search);

export const getServerSideProps = async (context) => {
  const {
    query: { query }
  } = context;

  if (!query) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }

  const {
    locationResults,
    articleResults
  } = await sanity.api.search.searchAllByKeyword(query);

  return {
    props: {
      locationResults,
      articleResults
    }
  };
};
