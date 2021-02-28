import { Cell, Grid } from '@/components/content/layout-grid/layout-grid';
import Div from '@/components/styled-system/div/div';
import { getDistance } from 'geolib';
import React, { FC, useCallback, useEffect } from 'react';
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
import { LocationListPageDocument } from '@/services/sanity/api/page';
import Meta from '@/components/meta/Meta';

type LocationListProps = {
  locationListPage: LocationListPageDocument;
  locations: LocationDocument[];
};

const LocationList: FC<LocationListProps> = (props) => {
  const { meta } = props.locationListPage;

  const [locationList, setLocationList] = useRecoilState(locationListState);

  const setDistanceOnLocations = useCallback(() => {
    const { latitude, longitude } = locationList.userCoordinates;

    if (!latitude || !longitude) {
      return;
    }

    setLocationList((state) => {
      const locationsWithDistance = state.locations.map((location) => {
        const locationCoordinates = {
          latitude: location.location.lat,
          longitude: location.location.lng
        };
        const userCoordinates = { latitude, longitude };
        const distanceInMeters = getDistance(
          locationCoordinates,
          userCoordinates
        );
        const distanceInKM =
          Math.round((distanceInMeters / 1000 + Number.EPSILON) * 10) / 10;
        return {
          ...location,
          distance: distanceInKM
        };
      });

      return {
        ...state,
        locations: locationsWithDistance
      };
    });
  }, [locationList.userCoordinates, setLocationList]);

  // Ask the user for permission to access their geolocation on page mount
  useEffect(() => {
    if (!window.navigator.geolocation) {
      return;
    }

    window.navigator.geolocation.getCurrentPosition(
      (location) => {
        const {
          coords: { latitude, longitude }
        } = location;
        setLocationList((state) => ({
          ...state,
          userCoordinates: { latitude, longitude }
        }));
      },
      () => {}
    );

    if (!navigator.permissions || !navigator.permissions.query) {
      return;
    }

    navigator.permissions
      .query({ name: 'geolocation' })
      .then((permissionStatus) => {
        permissionStatus.onchange = () => {
          window.location.reload();
        };
      });
  }, []);

  // Set distance on locations when the coordinates are ready
  useEffect(() => {
    setDistanceOnLocations();
  }, [locationList.userCoordinates, setDistanceOnLocations]);

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

      setDistanceOnLocations();
    };

    if (locationList.sortBy === 'distance') {
      setLocationList((state) => {
        return {
          ...state,
          locations: [...state.locations].sort((a, b) => {
            return a.distance - b.distance;
          })
        };
      });
      return;
    }

    fetch();
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
    <>
      <Meta meta={meta} />
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
                  distance:
                    locationList.userCoordinates.latitude &&
                    locationList.userCoordinates.longitude,
                  latest: true,
                  likes: true
                }}
                value={locationList.sortBy}
                onChange={handleToggleChange}
              />
            </Div>
          </Cell>
        </Grid>
        <Grid paddingTop={['40px', '40px', '48px']} maxWidth="initial">
          {locationsToRender.map((location, i) => {
            const {
              _id,
              slug,
              title,
              subtitle,
              images,
              thumbnailImage,
              category,
              area,
              userLikes,
              distance
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
                      images={[thumbnailImage]}
                      likes={userLikes.length}
                      category={category.name}
                      area={area.name}
                      distance={distance}
                    />
                  </A>
                </Link>
              </Cell>
            );
          })}
        </Grid>
      </Layout>
    </>
  );
};

export default LocationList;

export const getServerSideProps = async (context) => {
  const [locationListPage, locations] = await Promise.all([
    sanity.api.page.findLocationListPage(),
    sanity.api.location.find({
      order: { _createdAt: 'desc' }
    })
  ]);

  return {
    props: {
      locationListPage,
      locations
    }
  };
};
