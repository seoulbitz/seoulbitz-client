import sanityClient from '@sanity/client';

const options = {
  dataset: 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production'
};

const client = sanityClient(options);

export default client;
