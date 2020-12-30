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
        <Div
          display={['flex', 'block']}
          marginLeft={['none', 'auto']}
          marginRight={['none', 'auto']}
          width={[1, '228px', '264px']}>
          <Button variant="black">SEE ALL LOCATIONS</Button>
        </Div>
      </Grid>

      <Div marginTop="40px" border="1px solid #F2F2F2"></Div>

      <Grid paddingBottom={['202px', '104px', '60px']}>
        <Cell
          display="inline"
          textAlign="center"
          alignItems="center"
          width="100%"
          paddingTop="32px">
          <Div
            paddingTop="40px"
            paddingBottom="32px"
            fontFamily={theme.fonts.futura}
            fontSize="24px"
            lineHeight="32px"
            fontWeight="500">
            Articles
          </Div>
        </Cell>

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
        <Div
          display={['flex', 'block']}
          marginLeft={['none', 'auto']}
          marginRight={['none', 'auto']}
          width={[1, '228px', '264px']}>
          <Button variant="black">SEE ALL ARTICLES</Button>
        </Div>
      </Grid>
    </Layout>
  );
};

export default Search;

// const Search: FC = () => {
//   return (
//     <Layout>
//       <Div
//         paddingTop="48px"
//         display="inline"
//         textAlign="center"
//         fontFamily={theme.fonts.futura}
//         fontSize="28px"
//         lineHeight="34px"
//         fontWeight="700">
//         Search results for
//       </Div>
//       <Div
//         display="inline"
//         textAlign="center"
//         fontFamily={theme.fonts.futura}
//         fontSize="28px"
//         lineHeight="34px"
//         fontWeight="700"
//         color="#080CCE">
//         “Lorem ipsum dolor sit am”
//       </Div>
//       <Div
//         display="inline"
//         textAlign="center"
//         marginTop="40px"
//         fontFamily={theme.fonts.futura}
//         fontSize="24px"
//         lineHeight="32px"
//         fontWeight="500"
// >
//         Locations
//       </Div>

//       <Div padding="32px 20px 202px 20px">
//         <Div marginBottom="32px">
//           <ContentItem
//             kind="location"
//             title="Lorem ipsum"
//             titleKo="로렘입습"
//             imaes={[
//               {
//                 _key: '922dbab46e7d',
//                 _type: 'image',
//                 asset: {
//                   _ref:
//                     'image-ac60f85a9488828ea285cd4b8ca974e939757cbc-1080x720-jpg',
//                   _type: 'reference'
//                 }
//               }
//             ]}
//             subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
//             likes={4}
//             category="family"
//             area="Wangsimni"
//           />
//         </Div>
//         <Div marginBottom="32px">
//           <ContentItem
//             kind="location"
//             title="Lorem ipsum"
//             titleKo="로렘입습"
//             images={[
//               {
//                 _key: '922dbab46e7d',
//                 _type: 'image',
//                 asset: {
//                   _ref:
//                     'image-ac60f85a9488828ea285cd4b8ca974e939757cbc-1080x720-jpg',
//                   _type: 'reference'
//                 }
//               }
//             ]}
//             subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
//             likes={4}
//             category="family"
//             area="Wangsimni"
//           />
//         </Div>
//         <Div marginBottom="32px">
//           <ContentItem
//             kind="location"
//             title="Lorem ipsum"
//             titleKo="로렘입습"
//             images={[
//               {
//                 _key: '922dbab46e7d',
//                 _type: 'image',
//                 asset: {
//                   _ref:
//                     'image-ac60f85a9488828ea285cd4b8ca974e939757cbc-1080x720-jpg',
//                   _type: 'reference'
//                 }
//               }
//             ]}
//             subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
//             likes={4}
//             category="family"
//             area="Wangsimni"
//           />
//         </Div>
//         <Div marginBottom="32px">
//           <ContentItem
//             kind="location"
//             title="Lorem ipsum"
//             titleKo="로렘입습"
//             images={[
//               {
//                 _key: '922dbab46e7d',
//                 _type: 'image',
//                 asset: {
//                   _ref:
//                     'image-ac60f85a9488828ea285cd4b8ca974e939757cbc-1080x720-jpg',
//                   _type: 'reference'
//                 }
//               }
//             ]}
//             subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
//             likes={4}
//             category="family"
//             area="Wangsimni"
//           />
//         </Div>
//         <Button variant="black">SEE ALL LOCATIONS</Button>
//         <Div marginTop="40px" border="1px solid #F2F2F2"></Div>

//         {/* Articles Item */}
//         <Div
//           marginTop="40px"
//           textAlign="center"
//           fontFamily={theme.fonts.futura}
//           fontSize="24px"
//           lineHeight="32px"
//           fontWeight="500">
//           Articles
//         </Div>
//         <Div margin="32px 0px">
//           <ContentItem
//             kind="article"
//             title="Lorem ipsum"
//             titleKo="로렘입습"
//             images={[
//               {
//                 _key: '922dbab46e7d',
//                 _type: 'image',
//                 asset: {
//                   _ref:
//                     'image-ac60f85a9488828ea285cd4b8ca974e939757cbc-1080x720-jpg',
//                   _type: 'reference'
//                 }
//               }
//             ]}
//             subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
//             likes={4}
//             category="family"
//             area="Wangsimni"
//           />
//         </Div>

//         <Div marginBottom="32px">
//           <ContentItem
//             kind="article"
//             title="Lorem ipsum"
//             titleKo="로렘입습"
//             images={[
//               {
//                 _key: '922dbab46e7d',
//                 _type: 'image',
//                 asset: {
//                   _ref:
//                     'image-ac60f85a9488828ea285cd4b8ca974e939757cbc-1080x720-jpg',
//                   _type: 'reference'
//                 }
//               }
//             ]}
//             subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
//             likes={4}
//             category="family"
//             area="Wangsimni"
//           />
//         </Div>

//         <Div marginBottom="32px">
//           <ContentItem
//             kind="article"
//             title="Lorem ipsum"
//             titleKo="로렘입습"
//             images={[
//               {
//                 _key: '922dbab46e7d',
//                 _type: 'image',
//                 asset: {
//                   _ref:
//                     'image-ac60f85a9488828ea285cd4b8ca974e939757cbc-1080x720-jpg',
//                   _type: 'reference'
//                 }
//               }
//             ]}
//             subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
//             likes={4}
//             category="family"
//             area="Wangsimni"
//           />
//         </Div>
//         <Div marginBottom="32px">
//           <ContentItem
//             kind="article"
//             title="Lorem ipsum"
//             titleKo="로렘입습"
//             images={[
//               {
//                 _key: '922dbab46e7d',
//                 _type: 'image',
//                 asset: {
//                   _ref:
//                     'image-ac60f85a9488828ea285cd4b8ca974e939757cbc-1080x720-jpg',
//                   _type: 'reference'
//                 }
//               }
//             ]}
//             subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
//             likes={4}
//             category="family"
//             area="Wangsimni"
//           />
//         </Div>

//         <Button variant="black">SEE ALL ARTICLES</Button>
//       </Div>
//     </Layout>
//   );
// };
