import { Cell, Grid } from '@/components/content/layout-grid/layout-grid';
import Div from '@/components/styled-system/div/div';
import React, { FC, useEffect } from 'react';
import Layout from '@/components/layout/layout';
import A from '@/components/styled-system/a/a';
import ContentItem from '@/components/content-item/content-item';
import Link from 'next/link';
import ContentListToggle from '@/components/content-list-toggle/content-list-toggle';
import sanity from '@/services/sanity';
import { ArticleDocument } from '@/services/sanity/api/article';
import { useRecoilState } from 'recoil';
import { articleListState } from '@/services/recoil/atoms';
import { useDidUpdateEffect } from '@/services/react/hooks';
import { isServer } from '@/services/next';
import { ArticleListPageDocument } from '@/services/sanity/api/page';
import Meta from '@/components/meta/Meta';

type ArticleListProps = {
  articleListPage: ArticleListPageDocument;
  articles: ArticleDocument[];
};

const ArticleList: FC<ArticleListProps> = (props) => {
  const { meta } = props.articleListPage;

  const [articleList, setArticleList] = useRecoilState(articleListState);

  // To manage articles data with recoil state after initial rendering.
  useEffect(() => {
    setArticleList((state) => {
      return {
        ...state,
        articles: props.articles
      };
    });
  }, [props.articles, setArticleList]);

  // To fetch new articles when sort by option changes
  useDidUpdateEffect(() => {
    const fetch = async () => {
      setArticleList((state) => {
        return {
          ...state,
          articles: []
        };
      });

      let order = {};
      switch (articleList.sortBy) {
        case 'latest': {
          order = { _createdAt: 'desc' };
          break;
        }
        case 'likes': {
          order = { likes: 'desc' };
          break;
        }
      }

      const articles = await sanity.api.article.find({
        order
      });

      setArticleList((state) => {
        return {
          ...state,
          articles
        };
      });
    };

    fetch();

    return () => {};
  }, [articleList.sortBy, setArticleList]);

  const handleToggleChange = (value: 'latest' | 'likes') => {
    setArticleList((state) => {
      return {
        ...state,
        sortBy: value
      };
    });
  };

  // To show hydrated contents on the first page hit
  const articlesToRender = isServer ? props.articles : articleList.articles;

  return (
    <>
      <Meta meta={meta} />
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
                value={articleList.sortBy}
                onChange={handleToggleChange}
              />
            </Div>
          </Cell>
        </Grid>
        <Grid paddingTop={['40px', '40px', '48px']} maxWidth="initial">
          {articlesToRender.map((article, i) => {
            const {
              _id,
              title,
              slug,
              author,
              thumbnailImage,
              subtitle,
              userLikes
            } = article;
            const remainder = i % 4;

            const href = `/articles/${slug.current}`;

            return (
              <Cell
                key={_id}
                width={[
                  1,
                  1 / 2,
                  remainder === 1 || remainder === 2 ? 5 / 12 : 7 / 12
                ]}
                marginBottom={['40px', null, '24px']}>
                <Link href={href} passHref>
                  <A textDecoration="initial" color="initial">
                    <ContentItem
                      kind="article"
                      title={title}
                      subtitle={subtitle}
                      images={[thumbnailImage]}
                      likes={userLikes.length}
                      author={author}
                    />
                  </A>
                </Link>
              </Cell>
            );
          })}
        </Grid>
      </Layout>
    </>
  );
};

export default ArticleList;

export const getServerSideProps = async (context) => {
  const [articleListPage, articles] = await Promise.all([
    sanity.api.page.findArticleListPage(),
    sanity.api.article.find({
      order: { _createdAt: 'desc' }
    })
  ]);

  return {
    props: {
      articleListPage,
      articles
    }
  };
};
