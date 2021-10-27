import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Switch } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import Input from './Input';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.bgColor};
  align-items: center;
  justify-content: center;
`;

const lightTheme = {
  inputColor: '#111',
  inputBorder: '#111',
  bgColor: '#e3e3e3',
}

const darkTheme = {
  inputColor: '#e3e3e3',
  inputBorder: '#e3e3e3',
  bgColor: '#111',
};

export default function App() {
  const [isLight, setIsLight] = useState(true);
  const onValueChange = () => {
    setIsLight(!isLight);    
  }

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <Container>
        <StatusBar style="auto" />
        <Switch value={isLight} onValueChange={onValueChange} />
        <Input placeholder="Type a message..." />
      </Container>
    </ThemeProvider>
  );
}