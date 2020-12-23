import { theme } from '@/styles/theme';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { FC } from 'react';
import Modal from '../modal/modal';
import Div from '../styled-system/div/div';
import Span from '../styled-system/span/span';
import * as Yup from 'yup';
import Input from '../styled-system/input/input';
import Label from '../styled-system/label/label';
import Button from '../button/button';
import A from '../styled-system/a/a';
import Link from 'next/link';

const forgotpasswordSchema = Yup.object().shape({
  email: Yup.string().required('Required')
});

const ForgotPasswordModal: FC = () => {
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
          Forgot password?
        </Div>

        <Div margin="0px 20px">
          <Div
            marginTop="16px"
            textAlign="center"
            fontFamily={theme.fonts.futura}
            fontSize={['14px', null, '16px']}
            lineHeight={['18px', null, '20px']}
            fontWeight="500"
            color="#000000">
            Enter your email address and we will email you a link to reset your
            password!
          </Div>
          <Div
            marginTop="16px"
            textAlign="center"
            fontFamily={theme.fonts.futura}
            fontSize={['14px', null, '16px']}
            lineHeight={['18px', null, '20px']}
            fontWeight="500"
            color="#000000">
            The email might end up in your spam folder, so please check there as
            well.
          </Div>

          <Div marginTop="32px" width={1}>
            <Formik
              initialValues={{ email: '' }}
              validationSchema={forgotpasswordSchema}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false);
              }}>
              <Form>
                <Label
                  fontFamily={theme.fonts.futura}
                  fontSize={['14px', null, '16px']}
                  lineHeight={['18px', null, '20px']}
                  fontWeight="500"
                  htmlFor="userEmail">
                  <Span
                    fontFamily={theme.fonts.futura}
                    fontSize={['14px', null, '16px']}
                    lineHeight={['18px', null, '20px']}
                    fontWeight="500"
                    color="#000000">
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
                        display="flex"
                        flexDirection="column"
                        marginTop="8px"
                        height="48px"
                        backgroundColor="#FAFAFA"
                        border="1px solid #0511F2"
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
                  name="userEmail"
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
                <Button
                  variant="mixed"
                  marginTop="32px"
                  fontFamily={theme.fonts.futura}>
                  SEND LINK
                </Button>
                <Div marginTop="24px" textAlign="center">
                  <Link href="/" passHref>
                    <A
                      color="#000000"
                      fontFamily={theme.fonts.futura}
                      fontSize={['14px', null, '16px']}
                      lineHeight={['18px', null, '20px']}
                      fontWeight="500">
                      Back to login
                    </A>
                  </Link>
                </Div>
              </Form>
            </Formik>
          </Div>
        </Div>
      </Div>
    </Modal>
  );
};

export default ForgotPasswordModal;
