import Div from '@/components/styled-system/div/div';
import { theme } from '@/styles/theme';
import React, { FC } from 'react';
import { TFunction } from 'next-i18next';
import { withTranslation } from '../../../../i18n';

type AccountNoItemsPanelProps = { readonly t: TFunction };

const AccountNoItemsPanel: FC<AccountNoItemsPanelProps> = ({ t }) => {
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
      {t('account-no-item-panel:description')}
    </Div>
  );
};

export default withTranslation('common')(AccountNoItemsPanel);
