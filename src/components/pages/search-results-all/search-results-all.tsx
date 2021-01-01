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

const LOCATION_DUMMY_DATA_LIST = {
  items: [
    {
      kind: 'location',
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
      kind: 'location',
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
      kind: 'location',
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
      kind: 'location',
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

// kind: articles
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
    }
  ]
};

const Search: FC<{
  locationResults: LocationDocument[];
  articleResults: ArticleDocument[];
}> = (props) => {
  const router = useRouter();
  const {
    query: { query }
  } = router;
  const queryInURI = encodeURIComponent(query as string);

  const { locationResults, articleResults } = props;
  // 1. locationResults로 ContentItem 항목들 그려내기.
  // 2. articleResults로 ContentItem 항목들 그려내기.

  const isResultsEmpty =
    locationResults.length === 0 && articleResults.length === 0;

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
            {isResultsEmpty ? 'No matches found for' : 'Search results for'}
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

      {locationResults.length > 0 && (
        <>
          <Grid marginTop={['56px', null, '64px']}>
            <Cell>
              <Div
                fontFamily={theme.fonts.futura}
                fontSize="24px"
                lineHeight="32px"
                fontWeight="700">
                Locations
              </Div>
            </Cell>
          </Grid>
          <Grid marginTop={['40px', null, '48px']}>
            {LOCATION_DUMMY_DATA_LIST.items.map((item, index) => {
              const remainder = index % 4;

              return (
                <Cell
                  key={index}
                  width={[
                    1,
                    1 / 2,
                    remainder === 1 || remainder === 2 ? 5 / 12 : 7 / 12
                  ]}
                  marginBottom={['40px', null, '24px']}>
                  <Link href="/" passHref>
                    <A textDecoration="initial" color="initial">
                      <ContentItem
                        kind="location"
                        title={item.title}
                        titleKo={item.titleKo}
                        subtitle={item.subtitle}
                        images={item.images}
                        likes={item.likes}
                        category={item.category}
                        area={item.area}
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
                  <Button variant="black">SEE ALL LOCATIONS</Button>
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
          marginTop={['56px', null, '64px']}>
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
                Articles
              </Div>
            </Cell>
          </Grid>

          <Grid marginTop={['40px', null, '48px']}>
            {ARTICLE_DUMMY_DATA_LIST.items.map((item, index) => {
              const remainder = index % 4;

              return (
                <Cell
                  key={index}
                  width={[
                    1,
                    1 / 2,
                    remainder === 1 || remainder === 2 ? 5 / 12 : 7 / 12
                  ]}
                  marginBottom="32px">
                  <Link href="/" passHref>
                    <A textDecoration="initial" color="initial">
                      <ContentItem
                        kind="article"
                        title={item.title}
                        titleKo={item.titleKo}
                        subtitle={item.subtitle}
                        images={item.images}
                        likes={item.likes}
                        category={item.category}
                        area={item.area}
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
                  <Button variant="black">SEE ALL ARTICLES</Button>
                </A>
              </Link>
            </Cell>
          </Grid>
        </>
      )}
    </Layout>
  );
};

export default Search;

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
