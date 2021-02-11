import sanity from '@/services/sanity';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import React, { FC } from 'react';
import Head from 'next/head';

export type Meta = {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: SanityImageSource;
  ogSiteName: string;
};

type MetaProps = {
  meta?: Meta;
};

const Meta: FC<MetaProps> = ({ meta }) => {
  const {
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogSiteName,
    ogImage
  } = meta;

  const ogImageUrl = sanity.image.getUrl(ogImage);
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:site_name" content={ogSiteName} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-touch-fullscreen" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Seoulbitz" />
    </Head>
  );
};

export default Meta;
