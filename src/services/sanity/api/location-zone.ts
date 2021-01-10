import { SanityClient, SanityDocument } from '@sanity/client';

export type LocationZoneDocument = SanityDocument<{
  name: string;
  areas: any[];
}>;

export const createLocationZoneService = (client: SanityClient) => {
  const find = async () => {
    const query = `*[_type == "locationZone"] {
      ...,
      areas[]->
    }`;
    const zones = await client.fetch<LocationZoneDocument[]>(query);
    return zones;
  };

  return {
    find
  };
};
