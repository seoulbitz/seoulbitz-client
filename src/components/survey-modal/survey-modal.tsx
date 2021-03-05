import * as yup from 'yup';
import { theme } from '@/styles/theme';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { FC } from 'react';
import Button from '../button/button';
import Modal from '../modal/modal';
import Radio from '../radio/radio';
import Div from '../styled-system/div/div';
import Label from '../styled-system/label/label';
import Span from '../styled-system/span/span';
import sanity from '@/services/sanity';
import { SurveySubmitResult } from '@/services/sanity/api/user-survey';
import { useGlobalUIState } from '@/services/react/hooks';
import { TFunction } from 'next-i18next';
import { withTranslation } from '../../../i18n';

type SurveyProps = { readonly t: TFunction };
type Q1Props = { readonly t: TFunction };
type Q2Props = { readonly t: TFunction };
type Q3Props = { readonly t: TFunction };
type Q4Props = { readonly t: TFunction };

const Q1: FC<Q1Props> = ({ t }) => {
  return (
    <Div width={1} flexDirection="row">
      <Div>
        <Span
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="500">
          {t('survey:introduction')}
          <Span color="#080CCE">*</Span>
        </Span>
      </Div>
      <Label
        marginTop="24px"
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-start">
        <Field
          type="radio"
          name="q1"
          value="q1a1"
          component={({ field, ...props }) => {
            return <Radio {...field} {...props} />;
          }}
        />
        <Span
          marginLeft="8px"
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="400">
          {t('survey:q1a1')}{' '}
        </Span>
      </Label>

      <Label
        marginTop="24px"
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-start">
        <Field
          type="radio"
          name="q1"
          value="q1a2"
          component={({ field, ...props }) => {
            return <Radio {...field} {...props} />;
          }}
        />
        <Span
          marginLeft="8px"
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="400">
          {t('survey:q1a2')}{' '}
        </Span>
      </Label>

      <Label
        marginTop="24px"
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-start">
        <Field
          type="radio"
          name="q1"
          value="q1a3"
          component={({ field, ...props }) => {
            return <Radio {...field} {...props} />;
          }}
        />
        <Span
          marginLeft="8px"
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="400">
          {t('survey:q1a3')}
        </Span>
      </Label>

      <Label
        marginTop="24px"
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-start">
        <Field
          type="radio"
          name="q1"
          value="q1a4"
          component={({ field, ...props }) => {
            return <Radio {...field} {...props} />;
          }}
        />
        <Span
          marginLeft="8px"
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="400">
          {t('survey:q1a4')}
        </Span>
      </Label>

      <Label
        marginTop="24px"
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-start">
        <Field
          type="radio"
          name="q1"
          value="q1a5"
          component={({ field, ...props }) => {
            return <Radio {...field} {...props} />;
          }}
        />
        <Span
          marginLeft="8px"
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="400">
          {t('survey:q1a5')}{' '}
        </Span>
      </Label>

      <Label
        marginTop="24px"
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-start">
        <Field
          type="radio"
          name="q1"
          value="q1a6"
          component={({ field, ...props }) => {
            return <Radio {...field} {...props} />;
          }}
        />
        <Span
          marginLeft="8px"
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="400">
          {t('survey:q1a6')}
        </Span>
      </Label>
      <ErrorMessage
        name="q1"
        component={(props) => {
          return (
            <Div
              marginTop="24px"
              fontSize="16px"
              lineHeight="20px"
              fontFamily={theme.fonts.futura}
              fontWeight="400"
              color="#F43333"
              {...props}
            />
          );
        }}
      />
    </Div>
  );
};

const Q1WithTranslation = withTranslation('common')(Q1);

const Q2: FC<Q2Props> = ({ t }) => {
  return (
    <Div width={1} flexDirection="row" marginTop="40px">
      <Div>
        <Span
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="500">
          {t('survey:q2-title')}
          <Span color="#080CCE">*</Span>
        </Span>
      </Div>
      <Label
        marginTop="24px"
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-start">
        <Field
          type="radio"
          name="q2"
          value="q2a1"
          component={({ field, ...props }) => {
            return <Radio {...field} {...props} />;
          }}
        />
        <Span
          marginLeft="8px"
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="400">
          {t('survey:q2a1')}
        </Span>
      </Label>

      <Label
        marginTop="24px"
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-start">
        <Field
          type="radio"
          name="q2"
          value="q2a2"
          component={({ field, ...props }) => {
            return <Radio {...field} {...props} />;
          }}
        />
        <Span
          marginLeft="8px"
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="400">
          {t('survey:q2a2')}
        </Span>
      </Label>

      <Label
        marginTop="24px"
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-start">
        <Field
          type="radio"
          name="q2"
          value="q2a3"
          component={({ field, ...props }) => {
            return <Radio {...field} {...props} />;
          }}
        />
        <Span
          marginLeft="8px"
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="400">
          {t('survey:q2a3')}
        </Span>
      </Label>

      <Label
        marginTop="24px"
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-start">
        <Field
          type="radio"
          name="q2"
          value="q2a4"
          component={({ field, ...props }) => {
            return <Radio {...field} {...props} />;
          }}
        />
        <Span
          marginLeft="8px"
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="400">
          {t('survey:q2a4')}
        </Span>
      </Label>

      <Label
        marginTop="24px"
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-start">
        <Field
          type="radio"
          name="q2"
          value="q2a5"
          component={({ field, ...props }) => {
            return <Radio {...field} {...props} />;
          }}
        />
        <Span
          marginLeft="8px"
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="400">
          {t('survey:q2a5')}
        </Span>
      </Label>

      <Label
        marginTop="24px"
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-start">
        <Field
          type="radio"
          name="q2"
          value="q2a6"
          component={({ field, ...props }) => {
            return <Radio {...field} {...props} />;
          }}
        />
        <Span
          marginLeft="8px"
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="400">
          {t('survey:q2a6')}
        </Span>
      </Label>
      <ErrorMessage
        name="q2"
        component={(props) => {
          return (
            <Div
              marginTop="24px"
              fontSize="16px"
              lineHeight="20px"
              fontFamily={theme.fonts.futura}
              fontWeight="400"
              color="#F43333"
              {...props}
            />
          );
        }}
      />
    </Div>
  );
};
const Q2WithTranslation = withTranslation('common')(Q2);

const Q3: FC<Q3Props> = ({ t }) => {
  return (
    <Div width={1} flexDirection="row" marginTop="40px">
      <Div>
        <Span
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="500">
          {t('survey:q3-title')}
          <Span color="#080CCE">*</Span>
        </Span>
      </Div>
      <Label
        marginTop="24px"
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-start">
        <Field
          type="radio"
          name="q3"
          value="q3a1"
          component={({ field, ...props }) => {
            return <Radio {...field} {...props} />;
          }}
        />
        <Span
          marginLeft="8px"
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="400">
          {t('survey:q3a1')}
        </Span>
      </Label>

      <Label
        marginTop="24px"
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-start">
        <Field
          type="radio"
          name="q3"
          value="q3a2"
          component={({ field, ...props }) => {
            return <Radio {...field} {...props} />;
          }}
        />
        <Span
          marginLeft="8px"
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="400">
          {t('survey:q3a2')}
        </Span>
      </Label>

      <Label
        marginTop="24px"
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-start">
        <Field
          type="radio"
          name="q3"
          value="q3a3"
          component={({ field, ...props }) => {
            return <Radio {...field} {...props} />;
          }}
        />
        <Span
          marginLeft="8px"
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="400">
          {t('survey:q3a3')}
        </Span>
      </Label>
      <ErrorMessage
        name="q3"
        component={(props) => {
          return (
            <Div
              marginTop="24px"
              fontSize="16px"
              lineHeight="20px"
              fontFamily={theme.fonts.futura}
              fontWeight="400"
              color="#F43333"
              {...props}
            />
          );
        }}
      />
    </Div>
  );
};
const Q3WithTranslation = withTranslation('common')(Q3);

const schema = yup.object().shape({
  q1: yup.string().required('Please select an option.'),
  q2: yup.string().required('Please select an option.'),
  q3: yup.string().required('Please select an option.')
});

const SurveyModal: FC<SurveyProps> = ({ t }) => {
  const globalUIState = useGlobalUIState();

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    const { q1, q2, q3 } = values;
    const result = await sanity.api.userSurvey.submit({ q1, q2, q3 });

    switch (result) {
      case SurveySubmitResult.success: {
        globalUIState.closeModal();
        break;
      }
    }
    setSubmitting(false);
  };

  return (
    <Modal closeable={false}>
      <Div
        width={1}
        flexDirection="column"
        textAlign="center"
        padding={['88px 20px 0px 20px', null, '88px 40px 0px 40px']}>
        <Div
          fontFamily={theme.fonts.futura}
          fontSize="28px"
          lineHeight="34px"
          fontWeight="700"
          color="#080CCE">
          {t('survey:title')}
        </Div>
        <Div
          marginTop="16px"
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="700">
          {t('survey:subtitle')}
        </Div>
      </Div>

      <Div margin={['24px 20px 64px 20px', null, '24px 40px 64px 40px']}>
        {/* formik input sample need field component */}
        <Formik
          initialValues={{
            q1: '',
            q2: '',
            q3: ''
          }}
          validationSchema={schema}
          onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <Q1WithTranslation />
              <Q2WithTranslation />
              <Q3WithTranslation />
              <Button
                type="submit"
                marginTop="40px"
                variant="mixed"
                disabled={isSubmitting}>
                {t('survey:done-button')}
              </Button>
            </Form>
          )}
        </Formik>
      </Div>
    </Modal>
  );
};

export default withTranslation('common')(SurveyModal);
