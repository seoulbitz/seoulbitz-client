import client from '../client';
import { createLocationService } from './location';
import { createArticleService } from './article';
import { createPageService } from './page';

const createAPIService = () => {
  const locationModel = createLocationService(client);
  const articleModel = createArticleService(client);
  const pageModel = createPageService(client);

  return {
    location: locationModel,
    article: articleModel,
    page: pageModel
  };
};

const api = createAPIService();

export default api;
