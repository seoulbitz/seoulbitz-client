import { SanityClient, SanityDocument } from '@sanity/client';

export type LocationCategoryDocument = SanityDocument<{
  name: string;
}>;

export const createLocationCategoryService = (client: SanityClient) => {
  const find = async () => {
    const query = `*[_type == "locationCategory"]`;
    const zones = await client.fetch<LocationCategoryDocument[]>(query);
    return zones;
  };

  return {
    find
  };
};
