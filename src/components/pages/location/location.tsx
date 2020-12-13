import { theme } from '@/styles/theme';
import React, { FC } from 'react';
import { Cell, Grid } from '@/components/content/layout-grid/layout-grid';
import sanity from 'services/sanity';
import { LocationDocument } from '@/services/sanity/api/location';
import Span from '@/components/styled-system/span/span';
import Layout from '@/components/layout/layout';
import LocationTitle from './location-title';
import LocationSubtitle from './location-subtitle';
import ContentInteractionButtons from '@/components/content-interaction-buttons/content-interaction-buttons';
import LocationSlider from './location-slider';
import LocationBody from './location-body';
import LocationMap from './location-map';
import RelatedPostsSlider from '@/components/related-posts-slider/related-posts-slider';

const Location: FC<{ location: LocationDocument }> = (props) => {
  const {
    title: { en: enTitle, ko: koTitle },
    subtitle,
    likes,
    images,
    body,
    location,
    recommendedLocations
  } = props.location;

  return (
    <Layout>
      <Grid width={1} justifyContent="center">
        <Cell width={1} marginTop="40px">
          <LocationTitle enTitle={enTitle} koTitle={koTitle} />
        </Cell>
        <Cell width={1} marginTop={['16px', null, '24px']}>
          <LocationSubtitle subtitle={subtitle} />
        </Cell>
        <Cell width={1} marginTop={['16px', null, '24px']}>
          <Span
            fontFamily={theme.fonts.futura}
            fontWeight="500"
            fontSize="16px"
            lineHeight="20px"
            color="#777777">
            Shopping / Itaewon
            <br />
            0.5km far
          </Span>
        </Cell>
        <Cell width={1} marginTop={['24px', null, '32px']}>
          <ContentInteractionButtons likes={likes} />
        </Cell>
        <Cell width={1} marginTop={['24px', null, '32px']}>
          <LocationSlider images={images} />
        </Cell>
        <Cell width={1}>
          <LocationBody />
        </Cell>
        <Cell width={1} marginTop={['24px', null, '32px']} marginBottom="40px">
          <LocationMap lat={location.lat} lng={location.lng} />
        </Cell>
        <Cell width={1}>
          <RelatedPostsSlider title="You might also want to checkout:" />
        </Cell>
        <Cell width={1}>
          <RelatedPostsSlider title="Trending articles:" />
        </Cell>
      </Grid>
    </Layout>
  );
};

export default Location;

export const getServerSideProps = async (context) => {
  const { slug } = context.params;
  const location = await sanity.api.location.findOneBySlug(slug);

  if (!location) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      location
    }
  };
};
