import { theme } from '@/styles/theme';
import firebase from '@/services/firebase';
import Link from 'next/link';
import React, { FC } from 'react';
import Modal from '../modal/modal';
import A from '../styled-system/a/a';
import Div from '../styled-system/div/div';
import Span from '../styled-system/span/span';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Label from '../styled-system/label/label';
import Input from '../styled-system/input/input';
import StyledButton from '../button/button';
import Button from '../styled-system/button/button';
import Img from '../styled-system/img/img';
import Checkbox from '../checkbox/checkbox';
import { ModalType } from 'types';
import { useGlobalUIState } from '@/services/react/hooks';
import { LogInWithGoogleResult, SignUpResult } from '@/services/firebase/auth';
import { TFunction } from 'next-i18next';
import { withTranslation } from '../../../i18n';

const signUpSchema = Yup.object().shape({
  username: Yup.string().required('Please fill in.'),
  email: Yup.string().required('Please fill in.'),
  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  acceptedTerms: Yup.boolean()
    .required()
    .oneOf([true], 'You must accept the terms and conditions.')
});

type LogInModalProps = { readonly t: TFunction };

const SignUpModal: FC<LogInModalProps> = ({ t }) => {
  const globalUIState = useGlobalUIState();

  const handleLogInClick = () => {
    globalUIState.openModal(ModalType.logInModal);
  };

  const handleSignUpFormSubmit = async (
    values,
    { setSubmitting, setErrors }
  ) => {
    const { username, email, password } = values;
    const result = await firebase.auth.signUp(username, email, password);

    switch (result) {
      case SignUpResult.success: {
        globalUIState.openModal(ModalType.checkInboxModal, { email });
        break;
      }
      case SignUpResult.emailAlreadyInUse: {
        setErrors({ email: 'This email is taken. Please try another one.' });
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
          {t('signup:sign-up')}
        </Div>

        <Div display="block" textAlign="center" marginTop="16px">
          <Span
            fontFamily={theme.fonts.futura}
            fontSize="16px"
            lineHeight="20px"
            fontWeight="500"
            color="#000000">
            {t('signup:create-account')}
            <A
              cursor="pointer"
              textDecoration="underline"
              marginLeft="6px"
              fontFamily={theme.fonts.futura}
              fontSize="16px"
              lineHeight="20px"
              fontWeight="500"
              color="#080CCE"
              onClick={handleLogInClick}>
              {t('signup:login')}
            </A>
            .
          </Span>
        </Div>

        <Formik
          initialValues={{
            username: '',
            email: '',
            password: '',
            acceptedTerms: false
          }}
          validationSchema={signUpSchema}
          onSubmit={handleSignUpFormSubmit}>
          {({ isSubmitting }) => {
            return (
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
                      {t('signup:username')}
                      <Span color="#080CCE">*</Span>
                    </Span>
                  </Label>
                  <Field id="username" name="username">
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
                          type="username"
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
                      {t('signup:email')}
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
                      {t('signup:password')}
                      <Span color="#080CCE">*</Span>
                    </Span>
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

                <Div width={1} marginTop="24px" flexDirection="row">
                  <Label
                    htmlFor="acceptedTerms"
                    display="flex"
                    justifyContent="flex-start"
                    alignItems="center"
                    cursor="pointer">
                    <Field
                      id="acceptedTerms"
                      name="acceptedTerms"
                      component={({ field, ...props }) => {
                        return <Checkbox {...field} {...props} />;
                      }}
                    />
                    <Span
                      marginLeft="8px"
                      fontFamily={theme.fonts.futura}
                      fontSize="16px"
                      lineHeight="20px"
                      fontWeight="500">
                      {t('signup:agree-en')}{' '}
                      <Link href="/terms-and-conditions" passHref>
                        <A
                          color="#080CCE"
                          onClick={() => {
                            globalUIState.closeModal();
                          }}>
                          {t('signup:terms-and-conditions-en')}
                          {t('signup:terms-and-conditions-ko')}
                        </A>
                      </Link>
                      <Span
                        marginLeft="8px"
                        fontFamily={theme.fonts.futura}
                        fontSize="16px"
                        lineHeight="20px"
                        fontWeight="500">
                        {t('signup:agree-ko')}
                      </Span>
                    </Span>
                  </Label>
                  <ErrorMessage
                    name="acceptedTerms"
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
                  marginTop="24px"
                  variant="mixed">
                  {t('signup:sign-up')}
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
            {t('signup:or')}
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
            Sign up with Facebook
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
            {t('signup:google-login')}
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
            Sign up with Kakao
          </Div>
        </Button> */}
      </Div>
    </Modal>
  );
};

export default withTranslation('common')(SignUpModal);
