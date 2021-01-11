import Div from '@/components/styled-system/div/div';
import { theme } from '@/styles/theme';
import React from 'react';

const AccountNoItemsPanel = () => {
  return (
    <Div
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      backgroundColor="#FAFAFA"
      height="232px"
      fontFamily={theme.fonts.futura}
      fontSize="16px"
      lineHeight="20px"
      fontWeight="400"
      color="#000000"
      borderRadius="8px">
      You have no bookmarked items.
    </Div>
  );
};

export default AccountNoItemsPanel;
