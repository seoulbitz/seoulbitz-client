import BlockContent from '@/services/sanity/block-content';
import React, { FC } from 'react';

type LocationBodyProps = {
  blocks: any[];
};

const LocationBody: FC<LocationBodyProps> = ({ blocks }) => {
  return <BlockContent blocks={blocks} />;
};

export default LocationBody;
