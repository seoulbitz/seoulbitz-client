import { theme } from '@/styles/theme';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import Button from '../button/button';
import { Cell, Grid } from '../content/layout-grid/layout-grid';
import ModalWithoutClose from '../modal/modal-without-close';
import Div from '../styled-system/div/div';
import Input from '../styled-system/input/input';
import Label from '../styled-system/label/label';
import Span from '../styled-system/span/span';

const SurveyModal = () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  return (
    <ModalWithoutClose>
      {/* close button as props in modal */}
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
            picked: ''
          }}
          onSubmit={async (values) => {
            await sleep(500);
            console.log(values);
          }}>
          {({ values }) => (
            <Form>
              <Div width={1} flexDirection="row">
                <Span>I am</Span>
                <Span color="#080CCE">*</Span>
                <Div role="group" aria-labelledby="my-radio-group">
                  {/* <Label>
                    <Field type="radio" name="picked" value="One" />A foreign
                    student in South Korea (student visa)
                  </Label>
                  <Label>
                    <Field type="radio" name="picked" value="Two" />A long-term
                    resident in South Korea (working/permanent residence visa)
                  </Label> */}

                  {/* 예시 */}
                  <Label>
                    <Field
                      type="radio"
                      name="picked"
                      value="three"
                      component={({ field, ...props }) => {
                        return (
                          <Input
                            width="16px"
                            // marginTop="8px"
                            height="16px"
                            border="1px solid #0511F2"
                            paddingLeft="16px"
                            fontFamily={theme.fonts.futura}
                            fontSize="16px"
                            lineHeight="20px"
                            fontWeight="500"
                            color="#000000"
                            {...field}
                            {...props}
                          />
                        );
                      }}></Field>
                    A traveler in South Korea (tourist visa)
                  </Label>
                </Div>
              </Div>
              <Div></Div>
              <Div></Div>

              <Button variant="mixed">DONE</Button>
            </Form>
          )}
        </Formik>
      </Div>
    </ModalWithoutClose>
  );
};

export default SurveyModal;
