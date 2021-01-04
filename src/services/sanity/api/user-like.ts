import firebase from '@/services/firebase';
import { SanityClient } from '@sanity/client';
import { ArticleDocument } from './article';
import { LocationDocument } from './location';

export enum LikeResult {
  success = 'success',
  userNotFound = 'userNotFound'
}

export enum UnlikeResult {
  success = 'success',
  userNotFound = 'userNotFound'
}

export const createUserLikeService = (client: SanityClient) => {
  const like = async (content: LocationDocument | ArticleDocument) => {
    try {
      const user = await firebase.auth.getVerifiedUser();
      if (!user) {
        return LikeResult.userNotFound;
      }

      // Check if user ever liked this content
      const query = `*[_type == "userLike" && userId == "${user.uid}" && content._ref == "${content._id}"]`;
      const likes = await client.fetch(query);
      if (likes.length > 0) {
        return LikeResult.success;
      }

      // Create a new like
      await client.create({
        _type: 'userLike',
        userId: user.uid,
        content: {
          _type: 'reference',
          _ref: content._id
        }
      });
      return LikeResult.success;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const unlike = async (content: LocationDocument | ArticleDocument) => {
    try {
      const user = await firebase.auth.getVerifiedUser();
      if (!user) {
        return UnlikeResult.userNotFound;
      }

      // Check if user ever liked this content
      const query = `*[_type == "userLike" && userId == "${user.uid}" && content._ref == "${content._id}"]`;
      const likes = await client.fetch(query);
      if (likes.length === 0) {
        return UnlikeResult.success;
      }

      // Delete the like
      await client.delete(likes[0]._id);
      return UnlikeResult.success;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  return {
    like,
    unlike
  };
};
