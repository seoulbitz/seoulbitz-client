import React, { FC } from 'react';
import ContentItem from '@/components/content-item/content-item';
import { Cell, Grid } from '@/components/content/layout-grid/layout-grid';
import Layout from '@/components/layout/layout';
import A from '@/components/styled-system/a/a';
import Div from '@/components/styled-system/div/div';
import { theme } from '@/styles/theme';
import Link from 'next/link';
import sanity from '@/services/sanity';
import { ArticleDocument } from '@/services/sanity/api/article';
import { useRouter } from 'next/dist/client/router';
import Meta from '@/components/meta/Meta';

const SearchResultsArticleList: FC<{ articleResults: ArticleDocument[] }> = (
  props
) => {
  const router = useRouter();
  const {
    query: { query }
  } = router;

  const { articleResults } = props;

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
              Search results for
            </Div>
            <Div
              fontFamily={theme.fonts.futura}
              fontSize="28px"
              lineHeight="34px"
              fontWeight="700"
              color="#080CCE">
              “{query}”
            </Div>
          </Cell>
        </Grid>
        {articleResults.length > 0 && (
          <>
            <Grid marginTop={['56px', null, '64px']}>
              <Cell>
                <Div
                  fontFamily={theme.fonts.futura}
                  fontSize="24px"
                  lineHeight="32px"
                  fontWeight="700">
                  Articles
                </Div>
              </Cell>
            </Grid>
            <Grid marginTop={['40px', null, '48px']}>
              {articleResults.map((article, i) => {
                const remainder = i % 4;
                const {
                  _id,
                  slug,
                  title,
                  author,
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
                    marginBottom={['40px', null, '24px']}>
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
            </Grid>
          </>
        )}
      </Layout>
    </>
  );
};

export default SearchResultsArticleList;

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

  const articleResults = await sanity.api.search.searchArticlesByKeyword(query);

  return {
    props: {
      articleResults
    }
  };
};
