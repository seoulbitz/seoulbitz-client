import client from '../client';
import { createLocationService } from './location';
import { createArticleService } from './article';
import { createPageService } from './page';
import { createUserLikeService } from './user-like';
import { createUserBookmarkService } from './user-bookmark';
import { createSearchService } from './search';

const createAPIService = () => {
  const locationModel = createLocationService(client);
  const articleModel = createArticleService(client);
  const pageModel = createPageService(client);
  const userLikeModal = createUserLikeService(client);
  const userBookmarkModel = createUserBookmarkService(client);
  const searchService = createSearchService(client);

  return {
    location: locationModel,
    article: articleModel,
    page: pageModel,
    userLike: userLikeModal,
    userBookmark: userBookmarkModel,
    search: searchService
  };
};

const api = createAPIService();

export default api;
