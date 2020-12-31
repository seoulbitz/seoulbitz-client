import Button from '@/components/button/button';
import ContentItem from '@/components/content-item/content-item';
import Layout from '@/components/layout/layout';
import Div from '@/components/styled-system/div/div';
import { theme } from '@/styles/theme';
import React, { FC } from 'react';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import Link from 'next/link';
import A from '@/components/styled-system/a/a';
import { Cell, Grid } from '@/components/content/layout-grid/layout-grid';

type ContentItemProps = {
  kind: 'location' | 'article';
  title: string;
  titleKo?: string;
  subtitle: string;
  images?: SanityImageSource[];
  likes?: number;
  category?: string;
  area?: string;
};

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

const Search: FC<ContentItemProps> = (props) => {
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
            “Lorem ipsum dolor sit am”
          </Div>
          <Div
            marginTop={['56px', null, '64px']}
            fontFamily={theme.fonts.futura}
            fontSize="24px"
            lineHeight="32px"
            fontWeight="700">
            Locations
          </Div>
        </Cell>
      </Grid>

      {/* Locations list */}
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
          <Link href="/search/locations" passHref>
            <A width={[1, 'initial']} textDecoration="initial" display="inline">
              <Button variant="black">SEE ALL LOCATIONS</Button>
            </A>
          </Link>
        </Cell>
      </Grid>

      {/* Vertical line */}
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

      {/* Articles list */}
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
          <Link href="/search/articles" passHref>
            <A width={[1, 'initial']} textDecoration="initial" display="inline">
              <Button variant="black">SEE ALL ARTICLES</Button>
            </A>
          </Link>
        </Cell>
      </Grid>
    </Layout>
  );
};

export default Search;
