import Div from '@/components/styled-system/div/div';
import { theme } from '@/styles/theme';
import React, { FC } from 'react';
import { Cell, Grid } from '@/components/content/layout-grid/layout-grid';
import Layout from '@/components/layout/layout';
import sanity from '@/services/sanity';
import { AboutUsPageDocument } from '@/services/sanity/api/page';
import Img from '@/components/styled-system/img/img';
import BlockContent from '@/services/sanity/block-content';

const AboutUs: FC<{ aboutUsPage: AboutUsPageDocument }> = ({ aboutUsPage }) => {
  const url = sanity.image.getUrl(aboutUsPage.image);
  return (
    <Layout>
      <Grid width="100%" justifyContent="center">
        <Cell width={['100%', null, 10 / 12]}>
          <Div
            whiteSpace="nowrap"
            display="flex"
            alignItems="center"
            justifyContent="center"
            marginTop={['48px', null, '88px']}
            fontFamily={theme.fonts.futura}
            fontSize="28px"
            lineHeight="34px"
            fontWeight="700"
            color="#000000">
            {aboutUsPage.title}
          </Div>
        </Cell>
        <Cell width={['100%', null, 8 / 12]}>
          <Div
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop="32px">
            <Img width="100%" src={url} />
          </Div>
        </Cell>
        <Cell width={['100%', null, 10 / 12]}>
          <BlockContent blocks={aboutUsPage.body} />
        </Cell>
      </Grid>
    </Layout>
  );
};

export default AboutUs;

export const getServerSideProps = async (context) => {
  const aboutUsPage = await sanity.api.page.findAboutUsPage();

  return {
    props: {
      aboutUsPage
    }
  };
};
