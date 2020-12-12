import { Cell, Grid } from '@/components/content/layout-grid/layout-grid';
import Div from '@/components/styled-system/div/div';
import React from 'react';
import ArticlesToggle from './articles-toggle';
import Layout from '@/components/layout/layout';
import ArticleItem from '@/components/instance/article-item/article-item';

const ArticlesContent = () => {
  const contents = [];
  for (let i = 0; i < 1000; i += 1) {
    const remainder = i % 4;
    contents.push(
      <>
        <Cell
          key={i}
          width={[1, 1 / 2, remainder === 1 || remainder === 2 ? 5 / 12 : 7 / 12]}
          marginBottom={['40px', null, '24px']}>
          <ArticleItem />
        </Cell>
      </>
    );
  }
  return <Grid paddingTop={['40px', '40px', '48px']}>{contents}</Grid>;
};

const Articles = () => {
  return (
    <Layout>
      <Grid>
        <Cell display="flex" justifyContent="center" alignItems="center" width={[1]}>
          <Div>
            <ArticlesToggle />
          </Div>
        </Cell>
      </Grid>
      <ArticlesContent />
    </Layout>
  );
};

export default Articles;
