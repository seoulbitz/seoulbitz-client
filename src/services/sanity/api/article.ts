import { Meta } from '@/components/meta/Meta';
import { SanityClient, SanityDocument } from '@sanity/client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { getOrderQuery } from './utils';

export type ArticleDocument = SanityDocument<{
  meta: Meta;
  title: {
    en: string;
    ko: string;
  };
  slug: {
    _type: 'slug';
    current: string;
  };
  subtitle: { en: string; ko: string };
  author: any;
  thumbnailImage: SanityImageSource;
  body: { en: any[]; ko: any[] };
  userLikes: any[];
  userBookmarks?: any[];
  recommendedArticles: ArticleDocument[];
}>;

export const createArticleService = (client: SanityClient) => {
  const findOneBySlug = async (slug) => {
    const query = `*[_type == "article" && slug.current == "${slug}"]{
      ...,
      meta->,
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
      meta->,
      author->,
      "userLikes": *[_type == 'userLike' && references(^._id)]
    }${orderQuery}`;
    const articles = await client.fetch<ArticleDocument[]>(query);
    return articles;
  };

  return { find, findOneBySlug };
};
