import { Cell, Grid } from '@/components/content/layout-grid/layout-grid';
import Div from '@/components/styled-system/div/div';
import React, { FC, useEffect } from 'react';
import Link from 'next/link';
import Layout from '@/components/layout/layout';
import ContentItem from '@/components/content-item/content-item';
import A from '@/components/styled-system/a/a';
import ContentListToggle from '@/components/content-list-toggle/content-list-toggle';
import sanity from '@/services/sanity';
import { LocationDocument } from '@/services/sanity/api/location';
import { useRecoilState } from 'recoil';
import { locationListState } from '@/services/recoil/atoms';
import { useDidUpdateEffect } from '@/services/react/hooks';
import { isServer } from '@/services/next';

const LocationList: FC<{ locations: LocationDocument[] }> = (props) => {
  const [locationList, setLocationList] = useRecoilState(locationListState);

  // To manage locations data with recoil state after initial rendering.
  useEffect(() => {
    setLocationList((state) => {
      return {
        ...state,
        locations: props.locations
      };
    });
  }, [props.locations, setLocationList]);

  // To fetch new locations when sort by option changes
  useDidUpdateEffect(() => {
    const fetch = async () => {
      setLocationList((state) => {
        return {
          ...state,
          locations: []
        };
      });

      let order = {};
      switch (locationList.sortBy) {
        case 'latest': {
          order = { _createdAt: 'desc' };
          break;
        }
        case 'likes': {
          order = { likes: 'desc' };
          break;
        }
        // TODO: Replace with order by distance
        case 'distance': {
          order = { likes: 'desc' };
          break;
        }
      }

      const locations = await sanity.api.location.find({
        order
      });

      setLocationList((state) => {
        return {
          ...state,
          locations
        };
      });
    };

    fetch();

    return () => {};
  }, [locationList.sortBy, setLocationList]);

  const handleToggleChange = (value: 'distance' | 'latest' | 'likes') => {
    setLocationList((state) => {
      return {
        ...state,
        sortBy: value
      };
    });
  };

  // To show hydrated contents on the first page hit
  const locationsToRender = isServer ? props.locations : locationList.locations;

  return (
    <Layout>
      <Grid>
        <Cell
          display="flex"
          justifyContent="center"
          alignItems="center"
          width={[1]}>
          <Div>
            <ContentListToggle
              items={{
                distance: false,
                latest: true,
                likes: true
              }}
              onChange={handleToggleChange}
            />
          </Div>
        </Cell>
      </Grid>
      <Grid paddingTop={['40px', '40px', '48px']}>
        {locationsToRender.map((location, i) => {
          const {
            _id,
            slug,
            title,
            subtitle,
            images,
            likes,
            category,
            area
          } = location;
          const remainder = i % 4;

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
                    images={images}
                    likes={likes}
                    category={category.name}
                    area={area.name}
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

export default LocationList;

export const getServerSideProps = async (context) => {
  const locations = await sanity.api.location.find({
    order: { _createdAt: 'desc' }
  });

  return {
    props: {
      locations
    }
  };
};
