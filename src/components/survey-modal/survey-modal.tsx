import * as yup from 'yup';
import { theme } from '@/styles/theme';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import Button from '../button/button';
import Modal from '../modal/modal';
import Radio from '../radio/radio';
import Div from '../styled-system/div/div';
import Label from '../styled-system/label/label';
import Span from '../styled-system/span/span';

const Q1 = () => {
  return (
    <Div width={1} flexDirection="row">
      <Div>
        <Span
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="500">
          I am
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
          A foreign student in South Korea (student visa){' '}
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
          A long-term resident in South Korea (working/permanent residence visa){' '}
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
          A traveler in South Korea (tourist visa)
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
          A Korean citizen
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
          Planning to live in South Korea in the near future{' '}
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
          Not living in South Korea
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

const Q2 = () => {
  return (
    <Div width={1} flexDirection="row" marginTop="40px">
      <Div>
        <Span
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="500">
          I’m mainly interested in <Span color="#080CCE">*</Span>
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
          Pop culture
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
          Underground culture
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
          Food
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
          Nature & Travel ideas
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
          Cinema & Art
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
          Fashion & Trends
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

const Q3 = () => {
  return (
    <Div width={1} flexDirection="row" marginTop="40px">
      <Div>
        <Span
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="500">
          I’d like Seoulbitz to
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
          Help me live more authentic experiences in Seoul/South Korea
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
          Make me daily life in South Korea easier
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
          Help me better understand local cuture
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

const schema = yup.object().shape({
  q1: yup.string().required('Please select an option.'),
  q2: yup.string().required('Please select an option.'),
  q3: yup.string().required('Please select an option.')
});

const SurveyModal = () => {
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
          Tell us a bit about you
        </Div>
        <Div
          marginTop="16px"
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="700">
          Your answers will help us tailor Seoulbitz to your needs.
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
          onSubmit={(values) => {
            console.log(values);
          }}>
          {({ values }) => (
            <Form>
              <Q1 />
              <Q2 />
              <Q3 />
              <Button marginTop="40px" variant="mixed">
                DONE
              </Button>
            </Form>
          )}
        </Formik>
      </Div>
    </Modal>
  );
};

export default SurveyModal;
