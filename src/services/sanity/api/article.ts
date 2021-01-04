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
  userLikes: any[];
  userBookmarks?: any[];
  recommendedArticles: ArticleDocument[];
}>;

export const createArticleService = (client: SanityClient) => {
  const findOneBySlug = async (slug) => {
    const query = `*[_type == "article" && slug.current == "${slug}"]{
      ...,
      author->,
      body[]{
        ...,
        asset->{
          ...,
          "_key": _id
        }
      },
      recommendedArticles[]->,
      "userLikes": *[_type == 'userLike' && references(^._id)],
      "userBookmarks": *[_type == 'userBookmark' && references(^._id)]
    }`;
    const articles = await client.fetch<ArticleDocument[]>(query);
    if (articles.length === 0) {
      return null;
    }

    const [article] = articles;
    return article;
  };

  const find = async ({
    order
  }: {
    order: { likes?: 'asc' | 'desc'; _createdAt?: 'asc' | 'desc' };
  }) => {
    const orderQuery = getOrderQuery(order);

    const query = `*[_type == "article"] {
      ...,
      author->,
      "userLikes": *[_type == 'userLike' && references(^._id)]
    }${orderQuery}`;
    const articles = await client.fetch<ArticleDocument[]>(query);
    return articles;
  };

  return { find, findOneBySlug };
};
