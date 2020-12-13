import Div from '@/components/styled-system/div/div';
import { theme } from '@/styles/theme';
import React, { FC } from 'react';
import { Cell, Grid } from '@/components/content/layout-grid/layout-grid';
import Img from '@/components/styled-system/img/img';
import FAQItem from '@/components/faq-item/faq-item';
import Layout from '@/components/layout/layout';

const FAQ: FC = () => {
  return (
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
            FAQ
          </Div>
          <Div
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop="32px">
            <Img width="150px" src="https://via.placeholder.com/300x188" />
          </Div>
          <Div marginTop={['40px', null, '48px']}>
            <FAQItem />
            <FAQItem />
            <FAQItem />
            <FAQItem />
            <FAQItem />
            <FAQItem />
            <FAQItem />
          </Div>
        </Cell>
      </Grid>
    </Layout>
  );
};

export default FAQ;
