import { Cell, Grid } from '@/components/content/layout-grid/layout-grid';
import Div from '@/components/styled-system/div/div';
import { theme } from '@/styles/theme';
import { ThemeProvider } from 'emotion-theming';
import React from 'react';
import { CurrentPasswordInput, NewPasswordInput } from './account-settings-item';
import WarningButton from '../../button/button';
import BlueButton from '../../button/button';
import Button from '../../styled-system/button/button';

const MenuBar = () => {
  return <Div height="56px" backgroundColor="#ffffff"></Div>;
};

const FlowBar = () => {
  return <Div height="28px" backgroundColor="#000000"></Div>;
};

const AccountSettingsContent = () => {
  return (
    <Grid width="100%" justifyContent="center">
      <Cell width={['100%', null, 1 / 2]}>
        <Div
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          marginTop={['40px', null, '56px']}
          fontFamily={theme.fonts.futura}
          fontSize={['24px', null, '28px']}
          lineHeight={['30px', null, '34px']}
          fontWeight="700"
          color="#000000">
          Account Settings
        </Div>
        <Div
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginTop={['56px', null, '64px']}
          fontFamily={theme.fonts.futura}
          fontSize={['16px', null, '20px']}
          lineHeight={['20px', null, '24px']}
          fontWeight="700"
          color="#000000">
          Change Password
        </Div>
        <Div
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginTop={['32px', null, '32px']}>
          <NewPasswordInput />
        </Div>
        <Div display="flex" alignItems="center" justifyContent="center" marginTop="24px">
          <CurrentPasswordInput />
        </Div>
        <Div
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginTop={['80px', null, '64px']}
          fontFamily={theme.fonts.futura}
          fontSize={['16px', null, '20px']}
          lineHeight={['20px', null, '24px']}
          fontWeight="700"
          color="#00000">
          Delete account
        </Div>
        <Div
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          marginTop="16px"
          fontWeight="500"
          fontFamily={theme.fonts.futura}>
          Deleting your account is permanent. All your data will be wiped out immediately and you
          won't be able to get it back. Requires password.
        </Div>
        <WarningButton variant="warning" marginTop="24px">
          DELETE ACCOUNT
        </WarningButton>
      </Cell>
    </Grid>
  );
};

const AccountSettings = () => {
  return (
    <ThemeProvider theme={theme}>
      <MenuBar />
      <FlowBar />
      <AccountSettingsContent />
    </ThemeProvider>
  );
};

export default AccountSettings;
