import firebase from '@/services/firebase';
import { Cell, Grid } from '@/components/content/layout-grid/layout-grid';
import Layout from '@/components/layout/layout';
import A from '@/components/styled-system/a/a';
import Div from '@/components/styled-system/div/div';
import { theme } from '@/styles/theme';
import React, { useEffect, useState } from 'react';
import Button from '../../button/button';
import { AccountToggle } from './account-toggle';
import { useRouter } from 'next/dist/client/router';
import Span from '@/components/styled-system/span/span';
import Link from 'next/link';

const Account = () => {
  const router = useRouter();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const user = await firebase.auth.getVerifiedUser();
      console.log(user);
      if (user) {
        setUser(user);
        return;
      }
      router.push('/');
    };

    fetch();
  }, []);

  const handleLogOut = async (ev) => {
    ev.preventDefault();
    await firebase.auth.logOut();
    window.location.reload();
  };

  return (
    <Layout>
      {user && (
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
              Username: {user.displayName}
            </Div>
          </Cell>
          <Cell
            display="flex"
            alignItems="center"
            justifyContent="center"
            width={[1]}
            marginTop="8px">
            <Div
              fontFamily={theme.fonts.futura}
              fontSize="16px"
              lineHeight="20px"
              fontWeight="500"
              color="#080CCE">
              Email: {user.email}
            </Div>
          </Cell>
          <Cell
            display="flex"
            alignItems="center"
            justifyContent="center"
            width={[1]}
            marginTop={['32px', null, '40px']}>
            <Link href="/account/edit-profile" passHref>
              <A textDecoration="initial">
                <Button width="150px" variant="black">
                  Edit
                </Button>
              </A>
            </Link>
          </Cell>
          <Cell
            width={[1]}
            marginTop={['24px', null, '32px']}
            display="flex"
            justifyContent="center">
            <Link href="/account/settings" passHref>
              <A color="#000000">
                <Span
                  textAlign="center"
                  fontFamily={theme.fonts.futura}
                  fontSize="16px"
                  lineHeight="20px"
                  fontWeight="500"
                  color="#000000">
                  Account settings
                </Span>
              </A>
            </Link>
          </Cell>
          <Cell
            width={[1]}
            marginTop="24px"
            display="flex"
            justifyContent="center">
            <Span
              textDecoration="underline"
              cursor="pointer"
              textAlign="center"
              fontFamily={theme.fonts.futura}
              fontSize="16px"
              lineHeight="20px"
              fontWeight="500"
              color="#F43333"
              onClick={handleLogOut}>
              Log out
            </Span>
          </Cell>
          <Cell
            display="flex"
            justifyContent="center"
            width={[1]}
            marginTop={['72px', null, '80px']}>
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
      )}
    </Layout>
  );
};

export default Account;
