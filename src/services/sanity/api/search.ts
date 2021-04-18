import { SanityClient } from '@sanity/client';
import { ArticleDocument } from './article';
import { LocationDocument } from './location';

export const createSearchService = (client: SanityClient) => {
  const searchAllByKeyword = async (keyword: string) => {
    const keywordQuery = `"${keyword}*"`;
    const locationsQuery = `*[_type == "location" &&
      (title.en match ${keywordQuery} ||
      title.ko match ${keywordQuery} ||
      subtitle.en match ${keywordQuery} ||
      subtitle.ko match ${keywordQuery})] 
      [0...4]
      {..., category->, area->, "userLikes": *[_type == 'userLike' && references(^._id)]}`;
    const articlesQuery = `*[_type == "article" &&
      (title.en match ${keywordQuery} ||
      title.ko match ${keywordQuery} || 
      subtitle.en match ${keywordQuery} ||
      subtitle.ko match ${keywordQuery})] 
      [0...4]
      {..., author->, "userLikes": *[_type == 'userLike' && references(^._id)]}`;

    const [locationResults, articleResults] = await Promise.all([
      client.fetch<LocationDocument>(locationsQuery),
      client.fetch<ArticleDocument>(articlesQuery)
    ]);

    return { locationResults, articleResults };
  };

  const searchLocationsByKeyword = async (keyword: string) => {
    const keywordQuery = `"${keyword}*"`;
    const query = `*[_type == "location" && 
      (title.en match ${keywordQuery} ||
      title.ko match ${keywordQuery} ||
      subtitle.en match ${keywordQuery} ||
      subtitle.ko match ${keywordQuery})]
      {..., category->, area->, "userLikes": *[_type == 'userLike' && references(^._id)]}`;
    const locationResults = await client.fetch<LocationDocument>(query);
    return locationResults;
  };

  const searchArticlesByKeyword = async (keyword: string) => {
    const keywordQuery = `"${keyword}*"`;
    const query = `*[_type == "article" &&
      (title.en match ${keywordQuery} ||
      title.ko match ${keywordQuery} ||
      subtitle.en match ${keywordQuery} ||
      subtitle.ko match ${keywordQuery})]
      {..., author->, "userLikes": *[_type == 'userLike' && references(^._id)]}`;
    const articleResults = await client.fetch<LocationDocument>(query);
    return articleResults;
  };

  return {
    searchAllByKeyword,
    searchLocationsByKeyword,
    searchArticlesByKeyword
  };
};
