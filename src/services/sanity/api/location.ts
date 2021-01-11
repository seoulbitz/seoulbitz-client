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
  thumbnailImage: SanityImageSource;
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

  const findByFilters = async ({ categories, areas, order }) => {
    console.log({
      categories,
      areas,
      order
    });

    const categoriesConstraint =
      categories.length > 0
        ? `&& category._ref in *[_type == "locationCategory" && name in [
          ${categories.map((category) => `"${category}"`).join(', ')}
        ]]._id`
        : '';

    const areasConstraint =
      areas.length > 0
        ? `&& area._ref in *[_type == "locationArea" && name in [
        ${areas.map((area) => `"${area}"`).join(', ')}]]._id`
        : '';

    const orderQuery = getOrderQuery(order);

    const query = `
    *[_type == "location" ${areasConstraint} ${categoriesConstraint}] {
      ...,
      category->,
      area->,
      "userLikes": *[_type == 'userLike' && references(^._id)]
    }${orderQuery}`;
    const locations = await client.fetch<LocationDocument[]>(query);
    return locations;
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
    findByFilters,
    findOneBySlug
  };
};
