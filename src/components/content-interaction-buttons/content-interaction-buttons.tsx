import firebase from '@/services/firebase';
import { useGlobalUIState } from '@/services/react/hooks';
import sanity from '@/services/sanity';
import { ArticleDocument } from '@/services/sanity/api/article';
import { LocationDocument } from '@/services/sanity/api/location';
import { theme } from '@/styles/theme';
import React, { FC, useEffect, useState } from 'react';
import { ModalType } from 'types';
import Bookmark from '../icons/bookmark/bookmark';
import BookmarkFilled from '../icons/bookmark/bookmark-filled';
import Heart from '../icons/heart/heart';
import HeartFilled from '../icons/heart/heart-filled';
import Share from '../icons/share/share';
import Button from '../styled-system/button/button';
import Div from '../styled-system/div/div';
import { useDebounce } from 'use-debounce';

type ContentInteractionButtonsProps = {
  content: LocationDocument | ArticleDocument;
};

const ContentInteractionButtons: FC<ContentInteractionButtonsProps> = ({
  content
}) => {
  const globalUIState = useGlobalUIState();
  const [user, setUser] = useState(null);

  // likes
  const originalLikes = content.userLikes.length;
  const [likes, setLikes] = useState(originalLikes);
  const [isLikedByUser, setIsLikedByUser] = useState(null);
  const [originalIsLikedByUser, setOriginalIsLikedByUser] = useState(null);
  const [debouncedIsLikedByUser] = useDebounce(isLikedByUser, 1000);

  // bookmarks
  const [isBookmarkedByUser, setIsBookmarkedByUser] = useState(null);
  const [debouncedIsBookmarkedByUser] = useDebounce(isBookmarkedByUser, 1000);

  // Get user on mount
  useEffect(() => {
    const fetch = async () => {
      const user = await firebase.auth.getVerifiedUser();
      if (user) {
        setUser(user);
        user.uid;
        return;
      }
    };

    fetch();
  }, []);

  // Check if user ever liked the content
  useEffect(() => {
    if (user) {
      const isLikedByUser = content.userLikes.some(
        (userLike) => userLike.userId === user.uid
      );
      setIsLikedByUser(isLikedByUser);
      setOriginalIsLikedByUser(isLikedByUser);
    }
  }, [user, content.userLikes]);

  // Check is user ever bookmarked the content
  useEffect(() => {
    if (user) {
      const isBookmarkedByUser = content.userBookmarks.some(
        (userBookmark) => userBookmark.userId === user.uid
      );
      setIsBookmarkedByUser(isBookmarkedByUser);
    }
  }, [user, content.userBookmarks]);

  // Request to like or unlike
  useEffect(() => {
    if (debouncedIsLikedByUser === true) {
      sanity.api.userLike.like(content);
    }

    if (debouncedIsLikedByUser === false) {
      sanity.api.userLike.unlike(content);
    }
  }, [debouncedIsLikedByUser, content]);

  // Request to mark or unmark
  useEffect(() => {
    if (debouncedIsBookmarkedByUser === true) {
      sanity.api.userBookmark.mark(content);
      return;
    }

    if (debouncedIsBookmarkedByUser === false) {
      sanity.api.userBookmark.unmark(content);
      return;
    }
  }, [debouncedIsBookmarkedByUser, content]);

  const guideUserToLogin = () => {
    globalUIState.openModal(ModalType.logInModal);
    alert('Please log in to continue.');
  };

  const handleHeartButtonClick = () => {
    if (!user) {
      guideUserToLogin();
      return;
    }

    if (isLikedByUser === true) {
      // unlike it
      setIsLikedByUser(false);
      if (originalIsLikedByUser === true) {
        setLikes(originalLikes > 0 ? originalLikes - 1 : 0);
      } else if (originalIsLikedByUser === false) {
        setLikes(originalLikes);
      }
    }

    if (isLikedByUser === false) {
      // like it
      setIsLikedByUser(true);
      if (originalIsLikedByUser === true) {
        setLikes(originalLikes);
      } else if (originalIsLikedByUser === false) {
        setLikes(originalLikes + 1);
      }
    }
  };

  const handleBookmarkButtonClick = () => {
    if (!user) {
      guideUserToLogin();
      return;
    }

    if (isBookmarkedByUser === true) {
      setIsBookmarkedByUser(false);
      return;
    }

    if (isBookmarkedByUser === false) {
      setIsBookmarkedByUser(true);
      return;
    }
  };

  return (
    <Div display="flex" flexDirection="row">
      {isLikedByUser !== null && (
        <Div marginRight="8px">
          <Button
            onClick={handleHeartButtonClick}
            display="flex"
            alignItems="center"
            outline="none"
            background="none"
            border="0px"
            padding="0"
            margin="0"
            cursor="pointer">
            {isLikedByUser ? (
              <HeartFilled verticalAlign="middle" />
            ) : (
              <Heart verticalAlign="middle" />
            )}
            {likes > 0 && (
              <Div
                fontFamily={theme.fonts.futura}
                fontWeight="500"
                fontSize="16px"
                lineHeight="20px"
                color="#000000"
                marginLeft="4px"
                marginRight="4px">
                {likes}
              </Div>
            )}
          </Button>
        </Div>
      )}

      {isBookmarkedByUser !== null && (
        <Div marginRight="8px">
          <Button
            onClick={handleBookmarkButtonClick}
            outline="none"
            display="inline-block"
            background="none"
            border="0px"
            padding="0"
            margin="0"
            cursor="pointer">
            {isBookmarkedByUser ? (
              <BookmarkFilled verticalAlign="middle" />
            ) : (
              <Bookmark verticalAlign="middle" />
            )}
          </Button>
        </Div>
      )}

      <Div>
        <Button
          outline="none"
          display="inline-block"
          background="none"
          border="0px"
          padding="0"
          margin="0"
          cursor="pointer">
          <Share verticalAlign="middle" />
        </Button>
      </Div>
    </Div>
  );
};

export default ContentInteractionButtons;
