import React from 'react';
import { Text, SafeAreaView, StatusBar } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.main};
  width: 100%;
  align-items: flex-end;
  padding: 0 20px;
`;
// SafeAreaView를 사용하지 않고 설정하면 노치가 있는 아이폰에서 title이 가려지는 문제가 발생한다.
// 따라서 SafeAreaView를 통해서 노치가 있는 아이폰에서도 제대로 문구가 나타나도록 해준다.

export default function App() {
  return (
    <ThemeProvider theme={theme}>
    <Container>
      <Title>TODO List</Title>
      <StatusBar barStyle="light-content" backgroundColor={theme.background} />
    </Container>
    </ThemeProvider>
  );
}