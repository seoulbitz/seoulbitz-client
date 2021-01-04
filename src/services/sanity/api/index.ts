import client from '../client';
import { createLocationService } from './location';
import { createArticleService } from './article';
import { createPageService } from './page';
import { createUserLikeService } from './user-like';
import { createUserBookmarkService } from './user-bookmark';

const createAPIService = () => {
  const locationModel = createLocationService(client);
  const articleModel = createArticleService(client);
  const pageModel = createPageService(client);
  const userLikeModal = createUserLikeService(client);
  const userBookmarkModel = createUserBookmarkService(client);

  return {
    location: locationModel,
    article: articleModel,
    page: pageModel,
    userLike: userLikeModal,
    userBookmark: userBookmarkModel
  };
};

const api = createAPIService();

export default api;
