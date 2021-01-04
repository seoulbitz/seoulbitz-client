import client from '../client';
import { createLocationService } from './location';
import { createArticleService } from './article';
import { createPageService } from './page';
import { createSearchService } from './search';

const createAPIService = () => {
  const locationService = createLocationService(client);
  const articleService = createArticleService(client);
  const pageService = createPageService(client);
  const searchService = createSearchService(client);

  return {
    location: locationService,
    article: articleService,
    page: pageService,
    search: searchService
  };
};

const api = createAPIService();

export default api;
