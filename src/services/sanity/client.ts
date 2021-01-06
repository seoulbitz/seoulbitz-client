import sanityClient from '@sanity/client';

const dataset = 'production';
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

export const readClient = sanityClient({
  dataset,
  projectId,
  useCdn: process.env.NODE_ENV === 'production'
});

export const writeClient = sanityClient({
  dataset,
  projectId,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: false
});
