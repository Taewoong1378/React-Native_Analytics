import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';
import Navigation from './navigations';
import { UserProvider, ProgressProvider } from './contexts';
import {decode, encode} from 'base-64';
if (!global.btoa) {
  global.btoa = encode;
  }
  if (!global.atob) {
  global.atob = decode;
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ProgressProvider>
        <UserProvider>
          <StatusBar
            backgroundColor={theme.background}
            barStyle="dark-content"
          />
          <Navigation />
        </UserProvider>
      </ProgressProvider>
    </ThemeProvider>
  );
};

export default App;
