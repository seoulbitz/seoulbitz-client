import sanityImage from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { readClient } from './client';

const createImageService = () => {
  const imageBuilder = sanityImage(readClient);

  const getUrl = (source: SanityImageSource) => {
    return imageBuilder.image(source).url();
  };

  return {
    getUrl
  };
};

const image = createImageService();

export default image;
