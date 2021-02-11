import ContentItem from '@/components/content-item/content-item';
import { Cell, Grid } from '@/components/content/layout-grid/layout-grid';
import Layout from '@/components/layout/layout';
import Meta from '@/components/meta/Meta';
import A from '@/components/styled-system/a/a';
import Div from '@/components/styled-system/div/div';
import sanity from '@/services/sanity';
import { LocationDocument } from '@/services/sanity/api/location';
import { theme } from '@/styles/theme';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React, { FC } from 'react';

const SearchResultsLocationList: FC<{ locationResults: LocationDocument[] }> = (
  props
) => {
  const router = useRouter();
  const {
    query: { query }
  } = router;

  const { locationResults } = props;

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
                  category,
                  area
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
                          title={title.en}
                          titleKo={title.ko}
                          subtitle={subtitle}
                          images={[thumbnailImage]}
                          likes={userLikes.length}
                          category={category.name}
                          area={area.name}
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

export default SearchResultsLocationList;

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

  const locationResults = await sanity.api.search.searchLocationsByKeyword(
    query
  );

  return {
    props: {
      locationResults
    }
  };
};
