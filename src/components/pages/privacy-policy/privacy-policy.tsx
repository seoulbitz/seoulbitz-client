import Div from '@/components/styled-system/div/div';
import { theme } from '@/styles/theme';
import React, { FC } from 'react';
import { Cell, Grid } from '@/components/content/layout-grid/layout-grid';
import Layout from '@/components/layout/layout';
import sanity from '@/services/sanity';
import { PrivacyPolicyPageDocument } from '@/services/sanity/api/page';
import BlockContent from '@/services/sanity/block-content';
import Meta from '@/components/meta/Meta';

const PrivacyPolicy: FC<{ privacyPolicyPage: PrivacyPolicyPageDocument }> = ({
  privacyPolicyPage
}) => {
  const language = 'en';
  return (
    <>
      <Meta meta={privacyPolicyPage.meta} />
      <Layout>
        <Grid width="100%" justifyContent="center">
          <Cell width={['100%', null, 10 / 12]}>
            <Div
              display="flex"
              alignItems="center"
              justifyContent="center"
              marginTop={['48px', null, '88px']}
              fontFamily={theme.fonts.futura}
              fontSize="28px"
              lineHeight="34px"
              fontWeight="700"
              color="#000000"
              whiteSpace="nowrap">
              {language === 'en'
                ? privacyPolicyPage.title.en
                : privacyPolicyPage.title.ko}
            </Div>
            <Div marginTop="32px">
              <BlockContent
                blocks={
                  language === 'en'
                    ? privacyPolicyPage.body.en
                    : privacyPolicyPage.body.ko
                }
              />
            </Div>
          </Cell>
        </Grid>
      </Layout>
    </>
  );
};

export default PrivacyPolicy;

export const getServerSideProps = async (context) => {
  const privacyPolicyPage = await sanity.api.page.findPrivacyPolicyPage();

  return {
    props: {
      privacyPolicyPage
    }
  };
};
