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
import Button from '@/components/button/button';
import styled from '@emotion/styled';
import H2 from '../styled-system/h2/h2';
import FacebookIcon from '../icons/facebook-icon/facebook-icon';
import GoogleIcon from '../icons/google-icon/google-icon';
import KakaoIcon from '../icons/kakao-icon/kakao-icon';

const LeftSpan = styled(Span)`
  float: left;
`;

const RightSpan = styled(Span)`
  float: right;
`;

const LeftDiv = styled(Div)`
  float: left;
`;

const RightDiv = styled(Div)`
  float: right;
`;

const CenterDiv = styled(Div)`
  float: middle;
`;

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
        marginTop={['72px', null, '88px']}
        marginBottom={['90px', '64px']}>
        <Div
          textAlign="center"
          fontFamily={theme.fonts.futura}
          fontSize={['24px', null, '28px']}
          lineHeight={['30px', null, '34px']}
          fontWeight="700"
          color="#080CCE">
          Sign in
        </Div>
        <Div
          display="block"
          textAlign="center"
          marginTop="16px"
          fontFamily={theme.fonts.futura}
          fontSize={['14px', null, '16px']}
          lineHeight={['18px', null, '20px']}
          fontWeight="500"
          color="#000000">
          Log into your account.
        </Div>
        <Div textAlign="center">
          <Span
            fontFamily={theme.fonts.futura}
            fontSize={['14px', null, '16px']}
            lineHeight={['18px', null, '20px']}
            fontWeight="500"
            color="#000000">
            Don’t have an account?
          </Span>
          <Link href="/" passHref>
            <A
              marginLeft="6px"
              fontFamily={theme.fonts.futura}
              fontSize={['14px', null, '16px']}
              lineHeight={['18px', null, '20px']}
              fontWeight="500"
              color="#080CCE">
              Sign up for free
            </A>
          </Link>
        </Div>
        <Div margin="32px 20px">
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={signinSchema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(false);
            }}>
            <Form>
              <Label htmlFor="email">
                <Span
                  fontFamily={theme.fonts.futura}
                  fontSize={['14px', null, '16px']}
                  lineHeight={['18px', null, '20px']}
                  fontWeight="500">
                  Email
                </Span>
                <Span
                  fontFamily={theme.fonts.futura}
                  fontSize={['14px', null, '16px']}
                  lineHeight={['18px', null, '20px']}
                  fontWeight="500"
                  color="#080CCE">
                  *
                </Span>
              </Label>
              <Field
                id="email"
                name="email"
                component={({ field, ...props }) => {
                  return (
                    <Input
                      width={1}
                      marginTop="8px"
                      height="48px"
                      paddingLeft="16px"
                      fontFamily={theme.fonts.futura}
                      fontSize={['14px', null, '16px']}
                      lineHeight={['18px', null, '20px']}
                      fontWeight="500"
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
                <Label htmlFor="password">
                  <LeftSpan>
                    <Span
                      fontFamily={theme.fonts.futura}
                      fontSize={['14px', null, '16px']}
                      lineHeight={['18px', null, '20px']}
                      fontWeight="500">
                      Password
                    </Span>
                    <Span
                      fontFamily={theme.fonts.futura}
                      fontSize={['14px', null, '16px']}
                      lineHeight={['18px', null, '20px']}
                      fontWeight="500"
                      color="#080CCE">
                      *
                    </Span>
                  </LeftSpan>

                  <RightSpan>
                    <Link href="/" passHref>
                      <A
                        color="#777777"
                        fontFamily={theme.fonts.futura}
                        fontSize="16px"
                        fontWeight="500"
                        lineHeight="20px">
                        Forgot password?
                      </A>
                    </Link>
                  </RightSpan>
                </Label>
                <Field
                  id="password"
                  name="password"
                  component={({ field, ...props }) => {
                    return (
                      <Input
                        width={1}
                        marginTop="8px"
                        height="48px"
                        paddingLeft="16px"
                        fontFamily={theme.fonts.futura}
                        fontSize={['14px', null, '16px']}
                        lineHeight={['18px', null, '20px']}
                        fontWeight="500"
                        type="password"
                        {...field}
                        {...props}
                      />
                    );
                  }}></Field>
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
              <Button
                marginTop="32px"
                height="48px"
                variant="mixed"
                fontFamily={theme.fonts.futura}
                fontSize="16px"
                lineHeight="22px">
                SIGN IN
              </Button>
            </Form>
          </Formik>
          <Div
            width={1}
            textAlign="center"
            borderBottom="1px solid #AAAAAA"
            margin="10px 0px 20px">
            <Span background="#ffffff" padding="0px 10px">
              or
            </Span>
          </Div>

          <Div
            width={1}
            height="48px"
            marginTop="32px"
            padding="12px 0px"
            border="1px solid #080CCE">
            <Div display="inline">
              <LeftDiv
                alignItems="center"
                justifyContent="center"
                verticalAlign="middle"
                paddingLeft="16px"
                height="24px"
                width="24px">
                <FacebookIcon />
              </LeftDiv>
              <Div
                fontFamily={theme.fonts.futura}
                justifyContent="center"
                textAlign="center"
                fontSize="16px"
                lineHeight="20px"
                fontWeight="500"
                color="#000000">
                Continue with Facebook
              </Div>
            </Div>
          </Div>

          <Div
            width={1}
            height="48px"
            marginTop="32px"
            padding="12px 0px"
            border="1px solid #080CCE">
            <Div display="inline">
              <LeftDiv
                alignItems="center"
                justifyContent="center"
                verticalAlign="middle"
                paddingLeft="16px"
                height="24px"
                width="24px">
                <GoogleIcon />
              </LeftDiv>
              <Div
                fontFamily={theme.fonts.futura}
                justifyContent="center"
                textAlign="center"
                fontSize="16px"
                lineHeight="20px"
                fontWeight="500"
                color="#000000">
                Continue with Google
              </Div>
            </Div>
          </Div>

          <Div
            width={1}
            height="48px"
            marginTop="32px"
            padding="12px 0px"
            border="1px solid #080CCE">
            <Div display="inline">
              <LeftDiv
                alignItems="center"
                justifyContent="center"
                verticalAlign="middle"
                paddingLeft="16px"
                height="24px"
                width="24px">
                <KakaoIcon />
              </LeftDiv>
              <Div
                fontFamily={theme.fonts.futura}
                justifyContent="center"
                textAlign="center"
                fontSize="16px"
                lineHeight="20px"
                fontWeight="500"
                color="#000000">
                Continue with Kakao
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
    </Modal>
  );
};

export default SignInModal;
