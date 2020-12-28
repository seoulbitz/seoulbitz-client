import { SanityClient, SanityDocument } from '@sanity/client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { getOrderQuery } from './utils';

export type ArticleDocument = SanityDocument<{
  title: string;
  slug: {
    _type: 'slug';
    current: string;
  };
  subtitle: string;
  author: any;
  thumbnailImage: SanityImageSource;
  body: any;
  likes: number;
  recommendedArticles: ArticleDocument[];
}>;

export const createArticleService = (client: SanityClient) => {
  const find = async ({
    order
  }: {
    order: { likes?: 'asc' | 'desc'; _createdAt?: 'asc' | 'desc' };
  }) => {
    const orderQuery = getOrderQuery(order);

    const query = `*[_type == "article"] {
      _id,
      _rev,
      _type,
      _createdAt,
      _updatedAt,
      title,
      slug,
      subtitle,
      thumbnailImage,
      author->,
      body,
      likes,
      recommendedArticles
    }${orderQuery}`;
    const articles = await client.fetch<ArticleDocument[]>(query);
    return articles;
  };

  return { find };
};
