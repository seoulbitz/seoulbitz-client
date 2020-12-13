import { Cell, Grid } from '@/components/content/layout-grid/layout-grid';
import Div from '@/components/styled-system/div/div';
import React from 'react';
import Layout from '@/components/layout/layout';
import A from '@/components/styled-system/a/a';
import ContentItem from '@/components/content-item/content-item';
import Link from 'next/link';
import ContentListToggle from '@/components/content-list-toggle/content-list-toggle';

const ArticleListContent = () => {
  const contents = [];
  for (let i = 0; i < 1000; i += 1) {
    const remainder = i % 4;
    contents.push(
      <Cell
        key={i}
        width={[1, 1 / 2, remainder === 1 || remainder === 2 ? 5 / 12 : 7 / 12]}
        marginBottom={['40px', null, '24px']}>
        <Link href="/locations/blablabl" passHref>
          <A textDecoration="initial" color="initial">
            <ContentItem
              kind="article"
              title="Top Korean bands of 2020"
              subtitle="Pater noster qui es in caelis sanctificetur nomen tuum adveniat regnum tuum"
              images={[]}
            />
          </A>
        </Link>
      </Cell>
    );
  }
  return <Grid paddingTop={['40px', '40px', '48px']}>{contents}</Grid>;
};

const ArticleList = () => {
  return (
    <Layout>
      <Grid>
        <Cell
          display="flex"
          justifyContent="center"
          alignItems="center"
          width={[1]}>
          <Div>
            <ContentListToggle
              items={{
                distance: false,
                latest: true,
                likes: true
              }}
            />
          </Div>
        </Cell>
      </Grid>
      <ArticleListContent />
    </Layout>
  );
};

export default ArticleList;
