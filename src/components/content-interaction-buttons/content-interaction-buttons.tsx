import { theme } from '@/styles/theme';
import React, { FC } from 'react';
import Bookmark from '../icons/bookmark/bookmark';
import Heart from '../icons/heart/heart';
import Share from '../icons/share/share';
import Button from '../styled-system/button/button';
import Div from '../styled-system/div/div';

type ContentInteractionButtonsProps = {
  likes?: number;
};

const ContentInteractionButtons: FC<ContentInteractionButtonsProps> = ({
  likes
}) => {
  return (
    <Div display="flex" flexDirection="row">
      <Div
        marginRight="8px"
        display="flex"
        justifyContent="center"
        alignItems="center">
        <Button
          outline="none"
          display="inline-block"
          background="none"
          border="0px"
          padding="0"
          margin="0"
          cursor="pointer">
          <Heart verticalAlign="middle" />
        </Button>
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
      </Div>
      <Div marginRight="8px">
        <Button
          outline="none"
          display="inline-block"
          background="none"
          border="0px"
          padding="0"
          margin="0"
          cursor="pointer">
          <Bookmark verticalAlign="middle" />
        </Button>
      </Div>
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
