import Div from '@/components/styled-system/div/div';
import React, { FC } from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from '@/components/icons/map-marker/map-marker';

const Marker: FC<any> = (props) => {
  return <MapMarker width="32px" height="32px" marginLeft="-16px" marginTop="-32px" />;
};

type LocationMapProps = {
  lat: number;
  lng: number;
};

const LocationMap: FC<LocationMapProps> = ({ lat, lng }) => {
  return (
    <Div position="relative" paddingTop={['100%', '0px']}>
      <Div
        position={['absolute', 'relative']}
        height={[null, '400px']}
        top="0"
        left="0"
        right="0"
        bottom="0">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY }}
          defaultCenter={{
            lat: lat,
            lng: lng
          }}
          defaultZoom={18}>
          <Marker lat={lat} lng={lng} />
        </GoogleMapReact>
      </Div>
    </Div>
  );
};

export default LocationMap;
