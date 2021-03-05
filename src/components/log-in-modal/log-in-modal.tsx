import firebase from '@/services/firebase';
import { theme } from '@/styles/theme';
import { ErrorMessage, Field, Form, Formik } from 'formik';
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
import {
  LogInResult,
  ResendVerificationEmailResult,
  LogInWithGoogleResult
} from '@/services/firebase/auth';
import { useGlobalUIState } from '@/services/react/hooks';
import { ModalType } from 'types';
import { TFunction } from 'next-i18next';
import { withTranslation } from '../../../i18n';

const logInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email address is not valid.')
    .required('Please fill in.'),
  password: Yup.string().required('Please fill in.')
});

type LogInModalProps = { readonly t: TFunction };

const LogInModal: FC<LogInModalProps> = ({ t }) => {
  const globalUIState = useGlobalUIState();

  const handleEmailPasswordFormSubmit = async (
    values,
    { setSubmitting, setErrors }
  ) => {
    const { email, password } = values;
    const result = await firebase.auth.logIn(email, password);

    switch (result) {
      case LogInResult.userNotFound: {
        setErrors({ email: 'Email address not found.' });
        break;
      }
      case LogInResult.wrongPassword: {
        setErrors({ password: 'Incorrect password.' });
        break;
      }

      case LogInResult.userEmailNotVerified: {
        const result = await firebase.auth.resendVerificationEmail();
        switch (result) {
          case ResendVerificationEmailResult.tooManyRequests: {
            alert(
              "The email can't be sent right now. Please wait for a moment and try again."
            );
            break;
          }
          default: {
            globalUIState.openModal(ModalType.checkInboxModal, { email });
            break;
          }
        }

        break;
      }
      case LogInResult.success: {
        window.location.reload();
        break;
      }
    }

    setSubmitting(false);
  };

  const handleGoogleAuthButtonClick = async () => {
    const result = await firebase.auth.logInWithGoogle();

    switch (result) {
      case LogInWithGoogleResult.success: {
        window.location.reload();
      }
    }
  };

  const handleSignUpClick = () => {
    globalUIState.openModal(ModalType.signUpModal);
  };

  const handleForgotPasswordClick = () => {
    globalUIState.openModal(ModalType.forgotPasswordModal);
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
          {t('login:login')}
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
          {t('login:account-exist')}
          <br />
          {t('login:no-account')}
          <A
            cursor="pointer"
            textDecoration="underline"
            marginLeft="6px"
            fontFamily={theme.fonts.futura}
            fontSize="16px"
            lineHeight="20px"
            fontWeight="500"
            color="#080CCE"
            onClick={handleSignUpClick}>
            {t('login:sign-up')}
          </A>{' '}
          {t('login:free')}
        </Div>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={logInSchema}
          onSubmit={handleEmailPasswordFormSubmit}>
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
                      {t('login:email')}

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
                      {t('login:password')}
                      <Span color="#080CCE">*</Span>
                    </Span>
                    <A
                      cursor="pointer"
                      textDecoration="underline"
                      color="#777777"
                      fontFamily={theme.fonts.futura}
                      fontSize="16px"
                      lineHeight="20px"
                      fontWeight="500"
                      onClick={handleForgotPasswordClick}>
                      {t('login:forgot-password')}
                    </A>
                  </Label>
                  <Field id="password" name="password">
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
                          type="password"
                          {...field}
                          {...props}
                        />
                      );
                    }}
                  </Field>
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
                  type="submit"
                  disabled={isSubmitting}
                  marginTop="32px"
                  height="48px"
                  variant="blue"
                  fontFamily={theme.fonts.futura}
                  fontSize="16px"
                  lineHeight="22px">
                  {t('login:sign-in')}
                </StyledButton>
              </Form>
            );
          }}
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
            whiteSpace="nowrap"
            color="#777777"
            fontSize="14px"
            lineHeight="16px"
            margin="0px 16px">
            {t('login:or')}
          </Div>
          <Div width="100%" height="1px" backgroundColor="#AAAAAA" />
        </Div>

        {/* Facebook */}
        {/* <Button
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
        </Button> */}

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
          cursor="pointer"
          onClick={handleGoogleAuthButtonClick}>
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
            {t('login:google-login')}
          </Div>
        </Button>

        {/* Kakao */}
        {/* <Button
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
        </Button> */}
      </Div>
    </Modal>
  );
};
export default withTranslation('common')(LogInModal);
