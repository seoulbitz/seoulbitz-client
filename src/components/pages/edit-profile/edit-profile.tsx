import Div from '@/components/styled-system/div/div';
import Header from '@/components/styled-system/header/header';
import Aside from '@/components/styled-system/aside/aside';
import { theme } from '@/styles/theme';
import { ThemeProvider } from 'emotion-theming';
import React, { FC } from 'react';
import Main from '@/components/styled-system/main/main';
import { Cell, Grid } from '@/components/content/layout-grid/layout-grid';
import ArrowLeft from '@/components/icons/arrow-left/arrow-left';
import Button from '@/components/styled-system/button/button';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'Yup';
import Label from '@/components/styled-system/label/label';
import Input from '@/components/styled-system/input/input';
import StyledButton from '../../button/button';

const editprofileSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Required'),
  userName: Yup.string().required('Required')
});

const MenuBar = () => {
  return <Div height="56px" backgroundColor="#ffffff"></Div>;
};

const FlowBar = () => {
  return <Div height="28px" backgroundColor="#000000"></Div>;
};

const DesktopHeader = () => {
  return (
    <Div
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding="0 24px">
      <Div width="240px" height="48px" borderBottom="1px solid #0511F2"></Div>
      <Div display="flex">
        <Div width="108px" height="48px" border="1px solid #0511F2" marginRight="16px"></Div>
        <Div width="67px" height="48px" border="1px solid #000000"></Div>
      </Div>
    </Div>
  );
};

const SideBar = () => {
  return (
    <>
      <Div height="88px" backgroundColor="#999999"></Div>
      <Div height="80px" backgroundColor="#ffffff"></Div>
      <Div height="196px" backgroundColor="#080CCE"></Div>
      <Div height="208px" backgroundColor="#EBEDED"></Div>
      <Div height="168px" backgroundColor="#ffffff" borderBottom="1px solid #000000"></Div>
      <Div height="80px" backgroundColor="#ffffff"></Div>
      <Div
        height="56px"
        backgroundColor="#ffffff"
        borderTop="1px solid #080CCE"
        borderBottom="1px solid #080CCE"></Div>
      <Div height="500px" backgroundColor="#F5F3F0"></Div>
    </>
  );
};

const EditProfileContent = () => {
  return (
    <Grid
      width="100%"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      paddingBottom={['88px', null, '96px']}>
      <Cell marginTop="40px" width={1}>
        <Div>
          <Button
            display="flex"
            flexDirection="row"
            alignItems="center"
            padding="0px"
            margin="0px"
            border="0px"
            background="unset">
            <ArrowLeft />
            <Div
              fontFamily={theme.fonts.futura}
              fontSize="16px"
              fontWeight="700"
              lineHeight="20px"
              display="inline-block"
              marginLeft="8px">
              ACCOUNT
            </Div>
          </Button>
        </Div>
      </Cell>

      <Cell
        marginTop={['40px', null, '56px']}
        width={[1, 1 / 2]}
        display="flex"
        flexDirection="row"
        justifyContent="center">
        <Div fontFamily={theme.fonts.futura} fontSize="28px" fontWeight="700" lineHeight="34px">
          Edit profile
        </Div>
      </Cell>
      <Cell width={[1, 1 / 2]} marginTop="32px">
        <Formik
          initialValues={{ email: '', userName: '' }}
          validationSchema={editprofileSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
          }}>
          <Form>
            <Div display="flex" flexDirection="column">
              <Label
                fontFamily={theme.fonts.futura}
                fontSize="16px"
                fontWeight="500"
                lineHeight="20px"
                htmlFor="email">
                Email
              </Label>
              <Field
                id="email"
                name="email"
                component={({ field, ...props }) => {
                  return (
                    <Input
                      marginTop="8px"
                      height="48px"
                      border="1px solid #F1F1F1"
                      paddingLeft="16px"
                      fontFamily={theme.fonts.futura}
                      fontSize="14px"
                      lineHeight="18px"
                      fontWeight="500"
                      color="#BFBFBF"
                      placeholder="patricia@gmail.com"
                      type="email"
                      {...field}
                      {...props}
                    />
                  );
                }}
              />
              <ErrorMessage
                name="email"
                component={(props) => {
                  return (
                    <Div
                      marginTop="8px"
                      fontFamily={theme.fonts.futura}
                      fontSize="16px"
                      lineHeight="20px"
                      fontWeight="400"
                      color="#F43333"
                      {...props}
                    />
                  );
                }}
              />
            </Div>
            <Div display="flex" flexDirection="column" marginTop="24px">
              <Label
                fontFamil={theme.fonts.futura}
                fontSize="16px"
                lineHeight="20px"
                fontWeight="500"
                htmlFor="userName">
                Username
              </Label>
              <Field
                name="userName"
                component={({ field, ...props }) => {
                  return (
                    <Input
                      marginTop="8px"
                      height="48px"
                      border="1px solid #0511F2"
                      paddingLeft="16px"
                      fontFamily={theme.fonts.futura}
                      {...field}
                      {...props}
                    />
                  );
                }}
              />
              <ErrorMessage
                name="userName"
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
            <StyledButton type="submit" marginTop="32px" variant="blue">
              Save
            </StyledButton>
          </Form>
        </Formik>
      </Cell>
    </Grid>
  );
};

const EditProfile = () => {
  return (
    <ThemeProvider theme={theme}>
      <Div display="flex" flexDirection="column" minHeight="100%">
        {/* Mobile Header */}
        <Div display={[null, null, 'none']}>
          <Header position="fixed" top="0" height="112px" width="100%">
            <MenuBar />
            <FlowBar />
          </Header>
        </Div>

        {/* Desktop Header */}
        <Div display={['none', null, 'block']}>
          <Header
            position="fixed"
            top={0}
            left={0}
            height="88px"
            paddingLeft="392px"
            width="100%"
            backgroundColor="#ffffff">
            <DesktopHeader />
          </Header>
        </Div>

        <Div display="flex">
          {/* Sidebar */}
          <Div display={['none', null, 'block']} minWidth="392px">
            <Aside position="fixed" top={0} left={0} bottom={0} width="392px" display="flex">
              <Div width="100%" overflowY="auto">
                <SideBar />
              </Div>
              <Div width="32px" backgroundColor="#000000" height="100%"></Div>
            </Aside>
          </Div>

          {/* Content */}
          <Div width="100%" marginTop={['112px', null, '96px']}>
            <Main display="flex" flexDirection="column">
              <EditProfileContent />
            </Main>
          </Div>
        </Div>
      </Div>
    </ThemeProvider>
  );
};

export default EditProfile;
