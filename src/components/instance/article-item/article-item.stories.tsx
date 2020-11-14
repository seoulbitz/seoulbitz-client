import React from 'react';
import ArticleItem from './article-item';
import { theme } from '@/styles/theme';
import { ThemeProvider } from 'emotion-theming';
import { Cell, Grid } from '@/components/content/layout-grid/layout-grid';
export default {
  title: 'component/ArticleItem',
  component: ArticleItem
};
const DUMMY_DATA_LIST = [
  {
    title: 'Top Korean indie bands of 2020',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit ',
    thumbnailUrl:
      'https://scontent-ort2-1.cdninstagram.com/v/t51.2885-15/e35/57286270_114670046398227_2576349361528457787_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com&_nc_cat=103&_nc_ohc=js3DIwAOIPkAX8dsjiC&tp=18&oh=76cb6bf0910fc3ef3ed12303dcb65cbe&oe=5FD47285'
  }
];
const Template = (args) => (
  <ThemeProvider theme={theme}>
    <Grid>
      {DUMMY_DATA_LIST.map(({ title, description, thumbnailUrl }, index) => {
        return (
          <Cell key={index} width={[1, 1 / 2, 7 / 12]} marginBottom={['32px', '42px', '24px']}>
            <ArticleItem title={title} description={description} thumbnailUrl={thumbnailUrl} />
          </Cell>
        );
      })}
    </Grid>
  </ThemeProvider>
);
export const Default = Template.bind({});
Default.argTypes = {};
