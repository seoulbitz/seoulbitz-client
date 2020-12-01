import sanityImage from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import client from './client';

const createImageService = () => {
  const imageBuilder = sanityImage(client);

  const getUrl = (source: SanityImageSource) => {
    return imageBuilder.image(source).url();
  };

  return {
    getUrl
  };
};

const image = createImageService();

export default image;
