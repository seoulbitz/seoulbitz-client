import Div from '@/components/styled-system/div/div';
import Span from '@/components/styled-system/span/span';
import { theme } from '@/styles/theme';
import React, { FC } from 'react';

type ArticleTitle = {
  title: string;
};

const ArticleTitle: FC<ArticleTitle> = ({ title }) => {
  return (
    <Div color="#080CCE">
      <Span
        fontFamily={theme.fonts.futura}
        fontSize="28px"
        lineHeight="34px"
        fontWeight="700">
        {title}
      </Span>
    </Div>
  );
};

export default ArticleTitle;
