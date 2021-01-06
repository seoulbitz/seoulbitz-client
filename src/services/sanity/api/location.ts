import { SanityClient, SanityDocument } from '@sanity/client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { getOrderQuery } from './utils';

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
  userLikes: any[];
  userBookmarks?: any[];
  recommendedLocations?: LocationDocument[];
}>;

export const createLocationService = (client: SanityClient) => {
  const findOneBySlug = async (slug) => {
    const query = `*[_type == "location" && slug.current == "${slug}"]{
      ...,
      category->,
      area->,
      recommendedLocations[]->,
      "userLikes": *[_type == 'userLike' && references(^._id)],
      "userBookmarks": *[_type == 'userBookmark' && references(^._id)]
    }`;
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
    const orderQuery = getOrderQuery(order);

    const query = `*[_type == "location"] {
      ...,
      category->,
      area->,
      "userLikes": *[_type == 'userLike' && references(^._id)]
    }${orderQuery}`;
    const locations = await client.fetch<LocationDocument[]>(query);
    return locations;
  };

  return {
    find,
    findOneBySlug
  };
};
