import React, { useState } from 'react';
import styled from 'styled-components';

// 이런 식으로 styled-components의 attrs를 이용해서 속성을 넣을 수 있다.
const StyledInput = styled.TextInput.attrs(({ placeholder, theme }) => ({
  placeholder : placeholder || 'Enter a message...',
  placeholderTextColor : theme.inputColor,
}))`
  padding: 20px;
  font-size: 20px;
  border: 1px solid ${({ theme }) => theme.inputBorder}
  `;
  // border: 1px solid ${({ text }) => (text ? '#00f' : '#111111')};

const Input = ({ placeholder }) => {
  const [text, setText] = useState('');
  const onChangeInput = (text) => {
    setText(text);
  };

  return <StyledInput onChangeText={onChangeInput} text={text} placeholder={placeholder} />;
}

export default Input;