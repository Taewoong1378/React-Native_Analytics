import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled, { css } from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: green;
  align-items: center;
  justify-content: center;
`;

const cssText = css`
  font-size: 20px;
  font-weight: 600;
`;

const StyledText = styled.Text`
  ${cssText}
  color: blue;
`;

const ErrorText = styled(StyledText)`
  color: red;
`;

export default function App() {
  return (
    <Container>
      <StatusBar style="auto" />
      <StyledText>Styled components</StyledText>
      <ErrorText>Error !!</ErrorText>
    </Container>
  );
}
