import { theme } from '@/styles/theme';
import Link from 'next/link';
import React from 'react';
import Modal from '../modal/modal';
import A from '../styled-system/a/a';
import Div from '../styled-system/div/div';
import Span from '../styled-system/span/span';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Label from '../styled-system/label/label';
import Input from '../styled-system/input/input';
import { Radio } from '../radio/radio';
import StyledButton from '../button/button';
import Button from '../styled-system/button/button';
import styled from '@emotion/styled';
import Img from '../styled-system/img/img';

const signupSchema = Yup.object().shape({
  username: Yup.string().required('Required'),
  email: Yup.string().required('Required'),
  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
});

const SignUpModal = () => {
  return (
    <Modal>
      <Div
        width={1}
        flexDirection="column"
        alignItems="center"
        marginTop={['72px', null, '88px']}
        marginBottom={['90px', '64px']}>
        <Div
          textAlign="center"
          fontFamily={theme.fonts.futura}
          fontSize={['24px', null, '28px']}
          lineHeight={['30px', null, '34px']}
          fontWeight="700"
          color="#080CCE">
          Sign up
        </Div>

        <Div display="block" textAlign="center" marginTop="16px">
          <Span
            fontFamily={theme.fonts.futura}
            fontSize={['14px', null, '16px']}
            lineHeight={['18px', null, '20px']}
            fontWeight="500"
            color="#000000">
            Create your free account or
          </Span>
          <Link href="/" passHref>
            <A
              marginLeft="6px"
              fontFamily={theme.fonts.futura}
              fontSize={['14px', null, '16px']}
              lineHeight={['18px', null, '20px']}
              fontWeight="500"
              color="#080CCE">
              Sign in
            </A>
          </Link>
        </Div>

        <Div margin="32px 20px">
          <Formik
            initialValues={{ username: '', email: '', password: '' }}
            validationSchema={signupSchema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(false);
            }}>
            <Form>
              <Div width={1} marginTop="24px" flexDirection="row">
                <Label
                  htmlFor="username"
                  display="flex"
                  justifyContent="space-between">
                  <Span
                    fontFamily={theme.fonts.futura}
                    fontSize="16px"
                    lineHeight="20px"
                    fontWeight="500">
                    Username
                    <Span color="#080CCE">*</Span>
                  </Span>
                </Label>
              </Div>
              <Field
                id="username"
                name="username"
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
                      type="username"
                      {...field}
                      {...props}
                    />
                  );
                }}></Field>
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
              </Div>
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
                      type="email"
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

              <Div display="flex" alignItems="flex-start">
                <Radio />
              </Div>
              <StyledButton marginTop="24px" variant="mixed">
                SIGN UP
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
              fontSize="12px"
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
            marginTop="32px"
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
            marginTop="32px"
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
            marginTop="32px"
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
      </Div>
    </Modal>
  );
};

export default SignUpModal;
