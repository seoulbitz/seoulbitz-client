import firebase from '@/services/firebase';
import Div from '@/components/styled-system/div/div';
import { theme } from '@/styles/theme';
import React, { FC, useEffect, useState } from 'react';
import { Cell, Grid } from '@/components/content/layout-grid/layout-grid';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import Label from '@/components/styled-system/label/label';
import Input from '@/components/styled-system/input/input';
import A from '@/components/styled-system/a/a';
import StyledButton from '../../button/button';
import Layout from '@/components/layout/layout';
import BackButton from '@/components/back-button/back-button';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { UpdateUsernameResult } from '@/services/firebase/auth';
import { TFunction } from 'next-i18next';
import { withTranslation } from '../../../../i18n';

const editprofileSchema = Yup.object().shape({
  username: Yup.string().required('Required')
});

type EditProfileProps = { readonly t: TFunction };

const EditProfile: FC<EditProfileProps> = ({ t }) => {
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

  const handleSubmit = async (values, { setSubmitting }) => {
    const result = await firebase.auth.updateUsername(values.username);

    switch (result) {
      case UpdateUsernameResult.success: {
        alert('Successfullly updated profile.');

        break;
      }
    }

    setSubmitting(false);
  };

  return (
    <Layout>
      {user && (
        <Grid
          width="100%"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          paddingBottom={['88px', null, '96px']}>
          <Cell marginTop="40px" width={1}>
            <Link href="/account" passHref>
              <A>
                <BackButton text="ACCOUNT" />
              </A>
            </Link>
          </Cell>
          <Cell
            marginTop={['40px', null, '56px']}
            width={[1, 1 / 2]}
            display="flex"
            flexDirection="row"
            justifyContent="center">
            <Div
              fontFamily={theme.fonts.futura}
              fontSize="28px"
              fontWeight="700"
              lineHeight="34px">
              {t('edit-profile:title')}
            </Div>
          </Cell>
          <Cell width={[1, 1 / 2]} marginTop="32px">
            <Formik
              initialValues={{ email: user.email, username: user.displayName }}
              validationSchema={editprofileSchema}
              onSubmit={handleSubmit}>
              {({ isSubmitting }) => {
                return (
                  <Form>
                    <Div display="flex" flexDirection="column">
                      <Label
                        fontFamily={theme.fonts.futura}
                        fontSize="16px"
                        fontWeight="500"
                        lineHeight="20px"
                        htmlFor="email">
                        {t('edit-profile:email')}
                      </Label>
                      <Field
                        id="email"
                        name="email"
                        component={({ field, ...props }) => {
                          return (
                            <Input
                              disabled
                              background="#FAFAFA"
                              color="#BFBFBF"
                              marginTop="8px"
                              height="48px"
                              border="1px solid #F1F1F1"
                              paddingLeft="16px"
                              fontSize="16px"
                              lineHeight="20px"
                              fontWeight="500"
                              fontFamily={theme.fonts.futura}
                              placeholder="patricia@gmail.com"
                              type="email"
                              {...field}
                              {...props}
                            />
                          );
                        }}
                      />
                    </Div>
                    <Div display="flex" flexDirection="column" marginTop="24px">
                      <Label
                        fontFamily={theme.fonts.futura}
                        fontSize="16px"
                        lineHeight="20px"
                        fontWeight="500"
                        htmlFor="username">
                        {t('edit-profile:username')}
                      </Label>
                      <Field name="username">
                        {({ field, ...props }) => {
                          return (
                            <Input
                              marginTop="8px"
                              height="48px"
                              border="1px solid #0511F2"
                              paddingLeft="16px"
                              fontFamily={theme.fonts.futura}
                              fontSize="16px"
                              lineHeight="20px"
                              fontWeight="500"
                              {...field}
                              {...props}
                            />
                          );
                        }}
                      </Field>
                      <ErrorMessage
                        name="username"
                        component={(props) => {
                          return (
                            <Div
                              marginTop="8px"
                              fontSize="16px"
                              lineHeight="20px"
                              fontFamily={theme.fonts.futura}
                              fontWeight="400"
                              color="#F43333"
                              {...props}></Div>
                          );
                        }}
                      />
                    </Div>
                    <StyledButton
                      type="submit"
                      marginTop="32px"
                      variant="blue"
                      disabled={isSubmitting}>
                      {t('edit-profile:save')}
                    </StyledButton>
                  </Form>
                );
              }}
            </Formik>
          </Cell>
        </Grid>
      )}
    </Layout>
  );
};
export default withTranslation('common')(EditProfile);
