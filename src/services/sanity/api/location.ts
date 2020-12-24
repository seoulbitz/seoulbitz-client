import { SanityClient, SanityDocument } from '@sanity/client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export type LocationDocument = SanityDocument<{
  title: {
    en: string;
    ko: string;
  };
  slug: {
    _type: 'slug';
    current: string;
  };
  subtitle: string;
  category: any;
  area: any;
  images: SanityImageSource[];
  location: {
    _type: 'geopoint';
    lat: number;
    lng: number;
  };
  body: any[];
  likes: number;
  recommendedLocations: LocationDocument[];
}>;

export const createLocationService = (client: SanityClient) => {
  const findOneBySlug = async (slug) => {
    const query = `*[_type == "location" && slug.current == "${slug}"]`;
    const locations = await client.fetch<LocationDocument[]>(query);
    if (locations.length === 0) {
      return null;
    }

    const [location] = locations;
    return location;
  };

  const find = async ({
    order
  }: {
    order: { likes?: 'asc' | 'desc'; _createdAt?: 'asc' | 'desc' };
  }) => {
    const getOrderQuery = (order: {
      likes?: 'asc' | 'desc';
      _createdAt?: 'asc' | 'desc';
    }) => {
      if (Object.keys(order).length === 0) {
        return '';
      }

      const query = Object.entries(order).reduce((acc, [key, value]) => {
        const pair = `${key} ${value}`;

        if (acc) {
          return `${acc}, ${pair}`;
        }

        return pair;
      }, '');

      return ` | order(${query})`;
    };

    const orderQuery = getOrderQuery(order);

    const query = `*[_type == "location"] {
      _id,
      _rev,
      _type,
      _createdAt,
      _updatedAt,
      title,
      slug,
      subtitle,
      category->,
      area->,
      images,
      location,
      body,
      likes,
      recommendedLocations}${orderQuery}`;
    const locations = await client.fetch<LocationDocument[]>(query);
    return locations;
  };

  const patch = () => {
    return null;
  };

  return {
    find,
    findOneBySlug,
    patch
  };
};
