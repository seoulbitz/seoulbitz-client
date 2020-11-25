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

  const patch = () => {
    return null;
  };

  return {
    findOneBySlug,
    patch
  };
};
