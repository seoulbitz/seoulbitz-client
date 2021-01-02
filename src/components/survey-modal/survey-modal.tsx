import { theme } from '@/styles/theme';
import { Field, Form, Formik } from 'formik';
import Link from 'next/link';
import React from 'react';
import Button from '../button/button';
import { Cell, Grid } from '../content/layout-grid/layout-grid';
import Modal from '../modal/modal';
import ModalWithoutClose from '../modal/modal-without-close';
import Radio from '../radio/radio';
import A from '../styled-system/a/a';
import Div from '../styled-system/div/div';
import Input from '../styled-system/input/input';
import Label from '../styled-system/label/label';
import Span from '../styled-system/span/span';

const SurveyModal = () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

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

      <Div margin="24px 20px 64px 20px">
        {/* formik input sample need field component */}
        <Formik
          initialValues={{
            checked: ''
          }}
          onSubmit={async (values) => {
            await sleep(500);
            console.log(values);
          }}>
          {({ values }) => (
            <Form>
              <Div
                width={1}
                flexDirection="row"
                marginTop="24px"
                id="i-am-radio-group">
                <Span
                  fontFamily={theme.fonts.futura}
                  fontSize="16px"
                  lineHeight="20px"
                  fontWeight="500">
                  I am
                </Span>
                <Span
                  fontFamily={theme.fonts.futura}
                  fontSize="16px"
                  lineHeight="20px"
                  fontWeight="500"
                  color="#080CCE">
                  *
                </Span>
                <Div
                  role="group"
                  aria-labelledby="i-am-radio-group"
                  marginTop="24px">
                  <Label
                    marginTop="24px"
                    htmlFor="one"
                    display="flex"
                    justifyContent="flex-start"
                    alignItems="center">
                    <Field
                      id="one"
                      name="one"
                      component={({ field, ...props }) => {
                        return <Radio {...field} {...props} />;
                      }}
                    />
                    A foreign student in South Korea (student visa)
                  </Label>

                  <Label
                    marginTop="24px"
                    htmlFor="two"
                    display="flex"
                    justifyContent="flex-start"
                    alignItems="center">
                    <Field
                      id="two"
                      name="two"
                      component={({ field, ...props }) => {
                        return <Radio {...field} {...props} />;
                      }}
                    />
                    A long-term resident in South Korea (working/permanent
                    residence visa)
                  </Label>

                  <Label
                    marginTop="24px"
                    htmlFor="three"
                    display="flex"
                    justifyContent="flex-start"
                    alignItems="center">
                    <Field
                      id="three"
                      name="three"
                      component={({ field, ...props }) => {
                        return <Radio {...field} {...props} />;
                      }}
                    />
                    A traveler in South Korea (tourist visa)
                  </Label>

                  <Label
                    marginTop="24px"
                    htmlFor="four"
                    display="flex"
                    justifyContent="flex-start"
                    alignItems="center">
                    <Field
                      id="four"
                      name="four"
                      component={({ field, ...props }) => {
                        return <Radio {...field} {...props} />;
                      }}
                    />
                    A Korean citizen
                  </Label>

                  <Label
                    marginTop="24px"
                    htmlFor="five"
                    display="flex"
                    justifyContent="flex-start"
                    alignItems="center">
                    <Field
                      id="five"
                      name="five"
                      component={({ field, ...props }) => {
                        return <Radio {...field} {...props} />;
                      }}
                    />
                    Planning to live in South Korea in the near future
                  </Label>

                  <Label
                    marginTop="24px"
                    htmlFor="six"
                    display="flex"
                    justifyContent="flex-start"
                    alignItems="center">
                    <Field
                      id="six"
                      name="six"
                      component={({ field, ...props }) => {
                        return <Radio {...field} {...props} />;
                      }}
                    />
                    Not living in South Korea
                  </Label>
                </Div>
              </Div>

              {/* secound group */}
              <Div
                width={1}
                flexDirection="row"
                marginTop="40px"
                id="intersest-radio-group">
                <Span
                  fontFamily={theme.fonts.futura}
                  fontSize="16px"
                  lineHeight="20px"
                  fontWeight="500">
                  I’m mainly interested in
                </Span>
                <Span
                  fontFamily={theme.fonts.futura}
                  fontSize="16px"
                  lineHeight="20px"
                  fontWeight="500"
                  color="#080CCE">
                  *
                </Span>

                <Label
                  marginTop="24px"
                  htmlFor="interestone"
                  display="flex"
                  justifyContent="flex-start"
                  alignItems="center">
                  <Field
                    id="interestone"
                    name="interestone"
                    component={({ field, ...props }) => {
                      return <Radio {...field} {...props} />;
                    }}
                  />
                  Pop culture
                </Label>

                <Label
                  marginTop="24px"
                  htmlFor="interesttwo"
                  display="flex"
                  justifyContent="flex-start"
                  alignItems="center">
                  <Field
                    id="interesttwo"
                    name="interesttwo"
                    component={({ field, ...props }) => {
                      return <Radio {...field} {...props} />;
                    }}
                  />
                  Underground culture
                </Label>

                <Label
                  marginTop="24px"
                  htmlFor="interestthree"
                  display="flex"
                  justifyContent="flex-start"
                  alignItems="center">
                  <Field
                    id="interestthree"
                    name="interestthree"
                    component={({ field, ...props }) => {
                      return <Radio {...field} {...props} />;
                    }}
                  />
                  Food
                </Label>

                <Label
                  marginTop="24px"
                  htmlFor="interestfour"
                  display="flex"
                  justifyContent="flex-start"
                  alignItems="center">
                  <Field
                    id="interestfour"
                    name="interestfour"
                    component={({ field, ...props }) => {
                      return <Radio {...field} {...props} />;
                    }}
                  />
                  Nature & Travel ideas
                </Label>

                <Label
                  marginTop="24px"
                  htmlFor="interestfive"
                  display="flex"
                  justifyContent="flex-start"
                  alignItems="center">
                  <Field
                    id="interestfive"
                    name="interestfive"
                    component={({ field, ...props }) => {
                      return <Radio {...field} {...props} />;
                    }}
                  />
                  Cinema & Art
                </Label>

                <Label
                  marginTop="24px"
                  htmlFor="interestsix"
                  display="flex"
                  justifyContent="flex-start"
                  alignItems="center">
                  <Field
                    id="interestsix"
                    name="interestsix"
                    component={({ field, ...props }) => {
                      return <Radio {...field} {...props} />;
                    }}
                  />
                  Fashion & Trends
                </Label>

                {/* third group */}
                <Div
                  width={1}
                  flexDirection="row"
                  marginTop="40px"
                  id="help-radio-group">
                  <Span
                    fontFamily={theme.fonts.futura}
                    fontSize="16px"
                    lineHeight="20px"
                    fontWeight="500">
                    I’d like Seoulbitz to
                  </Span>
                  <Span
                    fontFamily={theme.fonts.futura}
                    fontSize="16px"
                    lineHeight="20px"
                    fontWeight="500"
                    color="#080CCE">
                    *
                  </Span>

                  <Label
                    marginTop="24px"
                    htmlFor="helpone"
                    display="flex"
                    justifyContent="flex-start"
                    alignItems="center">
                    <Field
                      id="helpone"
                      name="helpone"
                      component={({ field, ...props }) => {
                        return <Radio {...field} {...props} />;
                      }}
                    />
                    Help me live more authentic experiences in Seoul/South Korea
                  </Label>

                  <Label
                    marginTop="24px"
                    htmlFor="helptwo"
                    display="flex"
                    justifyContent="flex-start"
                    alignItems="center">
                    <Field
                      id="helptwo"
                      name="helptwo"
                      component={({ field, ...props }) => {
                        return <Radio {...field} {...props} />;
                      }}
                    />
                    Make me daily life in South Korea easier
                  </Label>

                  <Label
                    marginTop="24px"
                    htmlFor="helpthree"
                    display="flex"
                    justifyContent="flex-start"
                    alignItems="center">
                    <Field
                      id="helpthree"
                      name="helpthree"
                      component={({ field, ...props }) => {
                        return <Radio {...field} {...props} />;
                      }}
                    />
                    Help me better understand local cuture
                  </Label>
                </Div>
                <Button marginTop="40px" variant="mixed">
                  DONE
                </Button>
              </Div>
            </Form>
          )}
        </Formik>
      </Div>
    </Modal>
  );
};

export default SurveyModal;
