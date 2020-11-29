import React, { FC } from 'react';
import * as yup from 'yup';
import { Formik, Form, Field, useField, FieldAttributes, ErrorMessage } from 'formik';
import Div from '../../styled-system/div/div';
import Button from '../../styled-system/button/button';
import styled from '@emotion/styled';
import Input from '@/components/styled-system/input/input';
import { theme } from '@/styles/theme';

const styledInput = styled(Input)`
  cursor: 'pointer';
  width: 100%;
  border: '1px solid ';
  border-color: #0511f2;
`;

const StyledErrorMessage = styled(Div)`
  font-family: 'Futura';
  margin-top: 8px;
  font-size: 14px;
  line-height: 18px;
  color: #f43333;
`;

const StyledLabel = styled(Div)`
  margin-bottom: 8px;
  font-family: 'Futura';
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
`;

const PasswordSchema = yup.object().shape({
  newPassword: yup.string().min(2, 'Too Short!').max(70, 'Too Long!').required('Required'),
  currentPassword: yup.string().min(2, 'Too Short!').max(70, 'Too Long!').required('Required')
});

type NewPasswordInput = yup.InferType<typeof PasswordSchema>;
type CurrentPasswordInput = yup.InferType<typeof PasswordSchema>;

export const NewPasswordInput: FC = () => {
  return (
    <>
      <Formik
        initialValues={{ newPassword: '', currentPassword: '' }}
        validationSchema={PasswordSchema}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          console.log('submit: ', data);
          setSubmitting(false);
        }}>
        {({ values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <StyledLabel>
              <label htmlFor="newPassword">
                New Password*
                <Field placeholder="newPassword" name="newPassword" type="input" as={styledInput} />
                <StyledErrorMessage>
                  <ErrorMessage name="newPassword">{(msg) => <div>{msg}</div>}</ErrorMessage>
                </StyledErrorMessage>
              </label>
            </StyledLabel>
          </Form>
        )}
      </Formik>
    </>
  );
};

export const CurrentPasswordInput: FC = () => {
  return (
    <>
      <Formik
        initialValues={{ newPassword: '', currentPassword: '' }}
        validationSchema={PasswordSchema}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          console.log('submit: ', data);
          setSubmitting(false);
        }}>
        {({ values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <StyledLabel>
              <label htmlFor="currentPassword">
                Current Password*
                <Field
                  placeholder="currentPassword"
                  name="currentPassword"
                  type="input"
                  as={styledInput}
                />
                <StyledErrorMessage>
                  <ErrorMessage name="currentPassword">{(msg) => <div>{msg}</div>}</ErrorMessage>
                </StyledErrorMessage>
              </label>
            </StyledLabel>
            <Button
              width="100%"
              fontFamily="Futura"
              marginTop="32px"
              fontSize="16px"
              lineHeight="22px"
              border="1px solid #0511F2"
              backgroundColor="#FFFFFF"
              color="#0511F2"
              type="submit"
              disabled={isSubmitting}>
              Save
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};
