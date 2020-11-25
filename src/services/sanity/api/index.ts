import client from '../client';
import { createLocationService } from './location';

const createAPIService = () => {
  const locationModel = createLocationService(client);

  return {
    location: locationModel
  };
};

const api = createAPIService();

export default api;
