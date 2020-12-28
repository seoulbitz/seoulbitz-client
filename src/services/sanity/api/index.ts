import client from '../client';
import { createLocationService } from './location';
import { createArticleService } from './article';

const createAPIService = () => {
  const locationModel = createLocationService(client);
  const articleModel = createArticleService(client);

  return {
    location: locationModel,
    article: articleModel
  };
};

const api = createAPIService();

export default api;
