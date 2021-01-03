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
import { useRecoilState } from 'recoil';

const ARTICLE_DUMMY_DATA_LIST = {
  items: [
    {
      kind: 'article',
      title: 'Lorem ipsum',
      titleKo: '로렘입섬',
      images: [
        {
          _key: '922dbab46e7d',
          _type: 'image',
          asset: {
            _ref: 'image-ac60f85a9488828ea285cd4b8ca974e939757cbc-1080x720-jpg',
            _type: 'reference'
          }
        }
      ],
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
      likes: 4,
      category: 'family',
      area: 'Wangsimni'
    },
    {
      kind: 'article',
      title: 'Lorem ipsum',
      titleKo: '로렘입섬',
      images: [
        {
          _key: '922dbab46e7d',
          _type: 'image',
          asset: {
            _ref: 'image-ac60f85a9488828ea285cd4b8ca974e939757cbc-1080x720-jpg',
            _type: 'reference'
          }
        }
      ],
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
      likes: 4,
      category: 'family',
      area: 'Wangsimni'
    },
    {
      kind: 'article',
      title: 'Lorem ipsum',
      titleKo: '로렘입섬',
      images: [
        {
          _key: '922dbab46e7d',
          _type: 'image',
          asset: {
            _ref: 'image-ac60f85a9488828ea285cd4b8ca974e939757cbc-1080x720-jpg',
            _type: 'reference'
          }
        }
      ],
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
      likes: 4,
      category: 'family',
      area: 'Wangsimni'
    },
    {
      kind: 'article',
      title: 'Lorem ipsum',
      titleKo: '로렘입섬',
      images: [
        {
          _key: '922dbab46e7d',
          _type: 'image',
          asset: {
            _ref: 'image-ac60f85a9488828ea285cd4b8ca974e939757cbc-1080x720-jpg',
            _type: 'reference'
          }
        }
      ],
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
      likes: 4,
      category: 'family',
      area: 'Wangsimni'
    },
    {
      kind: 'article',
      title: 'Lorem ipsum',
      titleKo: '로렘입섬',
      images: [
        {
          _key: '922dbab46e7d',
          _type: 'image',
          asset: {
            _ref: 'image-ac60f85a9488828ea285cd4b8ca974e939757cbc-1080x720-jpg',
            _type: 'reference'
          }
        }
      ],
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
      likes: 4,
      category: 'family',
      area: 'Wangsimni'
    },
    {
      kind: 'article',
      title: 'Lorem ipsum',
      titleKo: '로렘입섬',
      images: [
        {
          _key: '922dbab46e7d',
          _type: 'image',
          asset: {
            _ref: 'image-ac60f85a9488828ea285cd4b8ca974e939757cbc-1080x720-jpg',
            _type: 'reference'
          }
        }
      ],
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
      likes: 4,
      category: 'family',
      area: 'Wangsimni'
    },
    {
      kind: 'article',
      title: 'Lorem ipsum',
      titleKo: '로렘입섬',
      images: [
        {
          _key: '922dbab46e7d',
          _type: 'image',
          asset: {
            _ref: 'image-ac60f85a9488828ea285cd4b8ca974e939757cbc-1080x720-jpg',
            _type: 'reference'
          }
        }
      ],
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
      likes: 4,
      category: 'family',
      area: 'Wangsimni'
    },
    {
      kind: 'article',
      title: 'Lorem ipsum',
      titleKo: '로렘입섬',
      images: [
        {
          _key: '922dbab46e7d',
          _type: 'image',
          asset: {
            _ref: 'image-ac60f85a9488828ea285cd4b8ca974e939757cbc-1080x720-jpg',
            _type: 'reference'
          }
        }
      ],
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
      likes: 4,
      category: 'family',
      area: 'Wangsimni'
    }
  ]
};

const SearchResultsArticleList: FC<{ articleResults: ArticleDocument[] }> = (
  props
) => {
  const router = useRouter();
  const {
    query: { query }
  } = router;

  const { articleResults } = props;
  // 1. articleResults로 ContentItem 항목들 그려내기.

  return (
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
            {/* {ARTICLE_DUMMY_DATA_LIST.items.map((item, index) => { */}
            {articleResults.map((article, i) => {
              const remainder = i % 4;
              const {
                _id,
                slug,
                title,
                subtitle,
                thumbnailImage,
                likes
              } = article;

              return (
                <Cell
                  key={_id}
                  width={[
                    1,
                    1 / 2,
                    remainder === 1 || remainder === 2 ? 5 / 12 : 7 / 12
                  ]}
                  marginBottom={['40px', null, '24px']}>
                  <Link href="/" passHref>
                    <A textDecoration="initial" color="initial">
                      <ContentItem
                        kind="article"
                        title={title}
                        subtitle={subtitle}
                        images={[thumbnailImage]}
                        likes={likes}
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
