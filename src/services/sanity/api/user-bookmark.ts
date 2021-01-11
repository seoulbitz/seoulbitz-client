import firebase from '@/services/firebase';
import { SanityClient } from '@sanity/client';
import { ArticleDocument } from './article';
import { LocationDocument } from './location';

export enum MarkResult {
  success = 'success',
  userNotFound = 'userNotFound'
}

export enum UnmarkResult {
  success = 'success',
  userNotFound = 'userNotFound'
}

export enum GetBookmarksResult {
  success = 'success',
  userNotFound = 'userNotFound'
}

export const createUserBookmarkService = (client: SanityClient) => {
  const mark = async (content: LocationDocument | ArticleDocument) => {
    try {
      const user = await firebase.auth.getVerifiedUser();

      if (!user) {
        return MarkResult.userNotFound;
      }

      // Check if user ever marked this content
      const query = `*[_type == "userBookmark" && userId == "${user.uid}" && content._ref == "${content._id}"]`;
      const bookmarks = await client.fetch(query);
      if (bookmarks.length > 0) {
        return MarkResult.success;
      }

      // Create a new bookmark
      await client.create({
        _type: 'userBookmark',
        userId: user.uid,
        content: {
          _type: 'reference',
          _ref: content._id
        }
      });
      return MarkResult.success;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const unmark = async (content: LocationDocument | ArticleDocument) => {
    try {
      const user = await firebase.auth.getVerifiedUser();
      if (!user) {
        return UnmarkResult.userNotFound;
      }

      // Check if user ever marked this content
      const query = `*[_type == "userBookmark" && userId == "${user.uid}" && content._ref == "${content._id}"]`;
      const bookmarks = await client.fetch(query);
      if (bookmarks.length === 0) {
        return UnmarkResult.success;
      }

      // Delete the bookmark
      await client.delete(bookmarks[0]._id);
      return UnmarkResult.success;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const getBookmarks = async () => {
    try {
      const user = await firebase.auth.getVerifiedUser();
      if (!user) {
        return GetBookmarksResult.userNotFound;
      }
      const query = `*[_type == "userBookmark" && userId == "${user.uid}"]{
        ...,
        content-> {
          ...,
          category->,
          area->,
          author->,
          "userLikes": *[_type == 'userLike' && references(^._id)]
        }
      } | order(_createdAt desc)`;
      const bookmarks = await client.fetch(query);
      return bookmarks;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  return {
    mark,
    unmark,
    getBookmarks
  };
};
