import Div from '@/components/styled-system/div/div';
import { theme } from '@/styles/theme';
import React, { FC } from 'react';
import { Cell, Grid } from '@/components/content/layout-grid/layout-grid';
import Img from '@/components/styled-system/img/img';
import FAQItem from '@/components/faq-item/faq-item';
import Layout from '@/components/layout/layout';
import sanity from '@/services/sanity';
import { FAQPageDocument } from '@/services/sanity/api/page';
import { i18n } from '../../../../i18n';
import Meta from '@/components/meta/Meta';

const FAQ: FC<{ faqPage: FAQPageDocument }> = ({ faqPage }) => {
  const url = sanity.image.getUrl(faqPage.image);

  return (
    <>
      <Meta meta={faqPage.meta} />
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
              color="#000000">
              {faqPage.title}
            </Div>
            <Div
              display="flex"
              justifyContent="center"
              alignItems="center"
              marginTop="32px">
              <Img width="150px" src={url} />
            </Div>
            <Div marginTop={['40px', null, '48px']}>
              {faqPage.faqItems.map(({ _id, question, answer }) => {
                return (
                  <FAQItem
                    key={_id}
                    question={
                      i18n.language === 'en' ? question.en : question.ko
                    }
                    answer={i18n.language === 'en' ? answer.en : answer.ko}
                  />
                );
              })}
            </Div>
          </Cell>
        </Grid>
      </Layout>
    </>
  );
};

export default FAQ;

export const getServerSideProps = async (context) => {
  const faqPage = await sanity.api.page.findFAQPage();

  return {
    props: {
      faqPage
    }
  };
};
