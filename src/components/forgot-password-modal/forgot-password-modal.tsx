import { theme } from '@/styles/theme';
import firebase from '@/services/firebase';
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
import { useGlobalUIState } from '@/services/react/hooks';
import { ModalType } from 'types';
import { SendResetPasswordLinkEmail } from '@/services/firebase/auth';

const forgotpasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email address is not valid.')
    .required('Please fill in.')
});

const ForgotPasswordModal: FC = () => {
  const globalUIState = useGlobalUIState();

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    const { email } = values;

    const result = await firebase.auth.sendResetPasswordLinkEmail(email);

    switch (result) {
      case SendResetPasswordLinkEmail.userNotFound: {
        setErrors({ email: 'Email address not found.' });
        break;
      }
      case SendResetPasswordLinkEmail.success: {
        globalUIState.openModal(ModalType.resetPasswordLinkSentModal, {
          email
        });
        break;
      }
    }

    setSubmitting(false);
  };

  const handleLogInClick = () => {
    globalUIState.openModal(ModalType.logInModal);
  };

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
          Forgot password?
        </Div>

        <Div
          marginTop="16px"
          textAlign="center"
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="500"
          color="#000000">
          Enter your email address and we will email you a link to reset your
          password!
        </Div>
        <Div
          marginTop="16px"
          textAlign="center"
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="500"
          color="#000000">
          The email might end up in your spam folder, so please check there as
          well.
        </Div>

        <Formik
          initialValues={{ email: '' }}
          validationSchema={forgotpasswordSchema}
          onSubmit={handleSubmit}>
          {({ isSubmitting }) => {
            return (
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
                  <Field id="email" name="email">
                    {({ field, ...props }) => {
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
                    }}
                  </Field>
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
                <Button
                  type="submit"
                  variant="mixed"
                  marginTop="32px"
                  fontFamily={theme.fonts.futura}
                  disabled={isSubmitting}>
                  SEND LINK
                </Button>
              </Form>
            );
          }}
        </Formik>
        <Div marginTop="24px" textAlign="center">
          <A
            cursor="pointer"
            textDecoration="underline"
            color="#000000"
            fontFamily={theme.fonts.futura}
            fontSize="16px"
            lineHeight="20px"
            fontWeight="500"
            onClick={handleLogInClick}>
            Back to login
          </A>
        </Div>
      </Div>
    </Modal>
  );
};

export default ForgotPasswordModal;
