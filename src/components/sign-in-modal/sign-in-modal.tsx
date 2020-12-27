import { theme } from '@/styles/theme';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Link from 'next/link';
import React, { FC } from 'react';
import Modal from '../modal/modal';
import A from '../styled-system/a/a';
import Div from '../styled-system/div/div';
import Label from '../styled-system/label/label';
import Span from '../styled-system/span/span';
import * as Yup from 'yup';
import Input from '../styled-system/input/input';
import StyledButton from '@/components/button/button';
import Button from '../styled-system/button/button';
import Img from '../styled-system/img/img';

const signinSchema = Yup.object().shape({
  email: Yup.string().required('Required'),
  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
});

const SignInModal: FC = () => {
  return (
    <Modal>
      <Div
        width={1}
        flexDirection="column"
        alignItems="center"
        padding={['72px 20px 48px 20px', null, '88px 40px 64px 40px']}>
        <Div
          textAlign="center"
          fontFamily={theme.fonts.futura}
          fontSize="28px"
          lineHeight="34px"
          fontWeight="700"
          color="#080CCE">
          Sign in
        </Div>
        <Div
          display="block"
          textAlign="center"
          marginTop="16px"
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="500"
          color="#000000">
          Log into your account.
          <br />
          Don’t have an account?
          <Link href="/" passHref>
            <A
              marginLeft="6px"
              fontFamily={theme.fonts.futura}
              fontSize="16px"
              lineHeight="20px"
              fontWeight="500"
              color="#080CCE">
              Sign up for free
            </A>
          </Link>
          .
        </Div>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={signinSchema}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
          }}>
          <Form>
            <Div width={1} marginTop="24px" flexDirection="row">
              <Label
                htmlFor="email"
                display="flex"
                justifyContent="space-between">
                <Span
                  fontFamily={theme.fonts.futura}
                  fontSize="16px"
                  lineHeight="20px"
                  fontWeight="500">
                  Email
                  <Span color="#080CCE">*</Span>
                </Span>
              </Label>
              <Field
                id="email"
                name="email"
                component={({ field, ...props }) => {
                  return (
                    <Input
                      width="100%"
                      marginTop="8px"
                      height="48px"
                      border="1px solid #0511F2"
                      paddingLeft="16px"
                      fontFamily={theme.fonts.futura}
                      fontSize="16px"
                      lineHeight="20px"
                      fontWeight="500"
                      color="#000000"
                      placeholder=""
                      {...field}
                      {...props}
                    />
                  );
                }}></Field>
              <ErrorMessage
                name="email"
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
            <Div width={1} marginTop="24px" flexDirection="row">
              <Label
                htmlFor="password"
                display="flex"
                justifyContent="space-between">
                <Span
                  fontFamily={theme.fonts.futura}
                  fontSize="16px"
                  lineHeight="20px"
                  fontWeight="500">
                  Password
                  <Span color="#080CCE">*</Span>
                </Span>
                <A
                  textDecoration="underline"
                  color="#777777"
                  fontFamily={theme.fonts.futura}
                  fontSize="16px"
                  lineHeight="20px"
                  fontWeight="500">
                  Forgot password?
                </A>
              </Label>
              <Field
                id="password"
                name="password"
                component={({ field, ...props }) => {
                  return (
                    <Input
                      width="100%"
                      marginTop="8px"
                      height="48px"
                      border="1px solid #0511F2"
                      paddingLeft="16px"
                      fontFamily={theme.fonts.futura}
                      fontSize="16px"
                      lineHeight="20px"
                      fontWeight="500"
                      color="#000000"
                      placeholder=""
                      type="password"
                      {...field}
                      {...props}
                    />
                  );
                }}
              />
              <ErrorMessage
                name="password"
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
              marginTop="32px"
              height="48px"
              variant="mixed"
              fontFamily={theme.fonts.futura}
              fontSize="16px"
              lineHeight="22px">
              SIGN IN
            </StyledButton>
          </Form>
        </Formik>

        <Div
          marginTop="24px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          cursor="default">
          <Div width="100%" height="1px" backgroundColor="#AAAAAA" />
          <Div
            fontFamily={theme.fonts.futura}
            color="#777777"
            fontSize="14px"
            lineHeight="16px"
            margin="0px 16px">
            or
          </Div>
          <Div width="100%" height="1px" backgroundColor="#AAAAAA" />
        </Div>

        <Button
          padding="0px"
          position="relative"
          width={1}
          height="48px"
          marginTop="24px"
          border="1px solid #080CCE"
          backgroundColor="#FFFFFF"
          display="flex"
          alignItems="center"
          justifyContent="center"
          cursor="pointer">
          <Div
            position="absolute"
            top="50%"
            left={16}
            transform="translateY(-50%)">
            <Img
              width="24px"
              height="24px"
              src="/images/facebook-social-icon.png"
              verticalAlign="middle"
            />
          </Div>
          <Div
            width="100%"
            fontFamily={theme.fonts.futura}
            fontSize="16px"
            lineHeight="20px"
            fontWeight="500"
            color="#000000">
            Continue with Facebook
          </Div>
        </Button>

        <Button
          padding="0px"
          position="relative"
          width={1}
          height="48px"
          marginTop="24px"
          border="1px solid #080CCE"
          backgroundColor="#FFFFFF"
          display="flex"
          alignItems="center"
          justifyContent="center"
          cursor="pointer">
          <Div
            position="absolute"
            top="50%"
            left={16}
            transform="translateY(-50%)">
            <Img
              width="24px"
              height="24px"
              src="/images/google-social-icon.png"
              verticalAlign="middle"
            />
          </Div>
          <Div
            width="100%"
            fontFamily={theme.fonts.futura}
            fontSize="16px"
            lineHeight="20px"
            fontWeight="500"
            color="#000000">
            Continue with Google
          </Div>
        </Button>

        <Button
          padding="0px"
          position="relative"
          width={1}
          height="48px"
          marginTop="24px"
          border="1px solid #080CCE"
          backgroundColor="#FFFFFF"
          display="flex"
          alignItems="center"
          justifyContent="center"
          cursor="pointer">
          <Div
            position="absolute"
            top="50%"
            left={16}
            transform="translateY(-50%)">
            <Img
              width="24px"
              height="24px"
              src="/images/kakao-social-icon.png"
              verticalAlign="middle"
            />
          </Div>
          <Div
            width="100%"
            fontFamily={theme.fonts.futura}
            fontSize="16px"
            lineHeight="20px"
            fontWeight="500"
            color="#000000">
            Continue with Kakao
          </Div>
        </Button>
      </Div>
    </Modal>
  );
};

export default SignInModal;
