import { readClient, writeClient } from '../client';
import { createLocationService } from './location';
import { createArticleService } from './article';
import { createPageService } from './page';
import { createUserLikeService } from './user-like';
import { createUserBookmarkService } from './user-bookmark';
import { createSearchService } from './search';
import { createUserSurveyService } from './user-survey';
import { createLocationCategoryService } from './location-category';
import { createLocationZoneService } from './location-zone';

const createAPIService = () => {
  const locationService = createLocationService(readClient);
  const locationCategoryService = createLocationCategoryService(readClient);
  const locationZoneService = createLocationZoneService(readClient);
  const articleService = createArticleService(readClient);
  const pageService = createPageService(readClient);
  const userLikeModal = createUserLikeService(writeClient);
  const userBookmarkService = createUserBookmarkService(writeClient);
  const userSurveyService = createUserSurveyService(writeClient);
  const searchService = createSearchService(readClient);

  return {
    location: locationService,
    locationCategory: locationCategoryService,
    locationZone: locationZoneService,
    article: articleService,
    page: pageService,
    search: searchService,
    userLike: userLikeModal,
    userBookmark: userBookmarkService,
    userSurvey: userSurveyService
  };
};

const api = createAPIService();

export default api;
