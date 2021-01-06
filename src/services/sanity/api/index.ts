import { readClient, writeClient } from '../client';
import { createLocationService } from './location';
import { createArticleService } from './article';
import { createPageService } from './page';
import { createUserLikeService } from './user-like';
import { createUserBookmarkService } from './user-bookmark';
import { createSearchService } from './search';
import { createUserSurveyService } from './user-survey';

const createAPIService = () => {
  const locationModel = createLocationService(readClient);
  const articleModel = createArticleService(readClient);
  const pageModel = createPageService(readClient);
  const userLikeModal = createUserLikeService(writeClient);
  const userBookmarkModel = createUserBookmarkService(writeClient);
  const userSurveyService = createUserSurveyService(writeClient);
  const searchService = createSearchService(readClient);

  return {
    location: locationModel,
    article: articleModel,
    page: pageModel,
    search: searchService,
    userLike: userLikeModal,
    userBookmark: userBookmarkModel,
    userSurvey: userSurveyService
  };
};

const api = createAPIService();

export default api;
