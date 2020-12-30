import ContentItem from '@/components/content-item/content-item';
import { Cell, Grid } from '@/components/content/layout-grid/layout-grid';
import Layout from '@/components/layout/layout';
import A from '@/components/styled-system/a/a';
import Div from '@/components/styled-system/div/div';
import { theme } from '@/styles/theme';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import Link from 'next/link';
import React, { FC } from 'react';

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

const Locations: FC<ContentItemProps> = (props) => {
  return (
    <Layout>
      <Grid>
        <Cell
          display="inline"
          textAlign="center"
          alignItems="center"
          width="100%">
          <Div
            paddingTop="48px"
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
            paddingTop="40px"
            paddingBottom="32px"
            fontFamily={theme.fonts.futura}
            fontSize="24px"
            lineHeight="32px"
            fontWeight="500">
            Locations
          </Div>
        </Cell>
      </Grid>
      <Grid paddingTop="32px">
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
              marginBottom="32px">
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
      </Grid>
    </Layout>
  );
};

export default Locations;
