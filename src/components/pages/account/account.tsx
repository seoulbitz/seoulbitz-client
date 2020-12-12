import { Cell, Grid } from '@/components/content/layout-grid/layout-grid';
import Layout from '@/components/layout/layout';
import A from '@/components/styled-system/a/a';
import Div from '@/components/styled-system/div/div';
import { theme } from '@/styles/theme';
import React, { useState } from 'react';
import Button from '../../button/button';
import { AccountToggle } from './account-toggle';

const AccountContent = () => {
  return (
    <Grid
      width={1}
      flexDirection="column"
      alignItems="center"
      paddingBottom={['96px', null, '128px']}>
      <Cell width={[1]} marginTop={['72px', null, '80px']}>
        <Div
          textAlign="center"
          fontFamily={theme.fonts.futura}
          fontSize="28px"
          lineHeight="34px"
          fontWeight="700"
          color="#000000">
          My Profile
        </Div>
      </Cell>
      <Cell
        display="flex"
        alignItems="center"
        justifyContent="center"
        width={[1]}
        marginTop={['32px', null, '40px']}>
        <Div
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="500"
          color="#080CCE">
          Username: Patricia
        </Div>
      </Cell>
      <Cell display="flex" alignItems="center" justifyContent="center" width={[1]} marginTop="8px">
        <Div
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="500"
          color="#080CCE">
          Email: patricia@gmail.com
        </Div>
      </Cell>
      <Cell
        display="flex"
        alignItems="center"
        justifyContent="center"
        width={[1]}
        marginTop={['32px', null, '40px']}>
        <Button width="150px" variant="black">
          Edit
        </Button>
      </Cell>
      <Cell width={[1]} marginTop={['24px', null, '32px']}>
        <A href="#" color="#000000">
          <Div
            textAlign="center"
            fontFamily={theme.fonts.futura}
            fontSize="16px"
            lineHeight="20px"
            fontWeight="500"
            color="#000000">
            Account settings
          </Div>
        </A>
      </Cell>
      <Cell width={[1]} marginTop="24px">
        <A href="#" color="#F43333">
          <Div
            textAlign="center"
            fontFamily={theme.fonts.futura}
            fontSize="16px"
            lineHeight="20px"
            fontWeight="500"
            color="#F43333">
            Log out
          </Div>
        </A>
      </Cell>
      <Cell display="flex" justifyContent="center" width={[1]} marginTop={['72px', null, '80px']}>
        <Div
          fontFamily={theme.fonts.futura}
          fontSize="28px"
          lineHeight="34px"
          fontWeight="700"
          color="#000000">
          Bookmarks
        </Div>
      </Cell>
      <Cell
        display="flex"
        justifyContent="center"
        alignItems="center"
        width={[1]}
        marginTop={['28px', '32px', '40px']}>
        {/* Toggle UI  */}
        <AccountToggle />
      </Cell>
      <Cell
        display="flex"
        justifyContent="center"
        alignItems="center"
        width={[1, 10 / 12]}
        marginTop={['40px', null, '48px']}>
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
          You have no bookmarked items.
        </Div>
      </Cell>
    </Grid>
  );
};

const Account = () => {
  return (
    <Layout>
      <AccountContent />
    </Layout>
  );
};

export default Account;
