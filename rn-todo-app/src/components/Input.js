import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Dimensions, useWindowDimensions } from 'react-native';
// Dimensions를 사용하는 이유는 TextInput의 양쪽에 margin을 주고 싶은데 기기마다 width 길이가 다르기 때문에 일정한 값만큼 띄워주기 위해서 사용하는 것이다.
// 그런데 만약 핸드폰을 가로로 눕힌다면? Dimensions만을 이용해서는 길이가 맞지 않을수도 있다. useWindowDimensions는 화면의 길이가 바뀌면 자동으로 업데이트 해주는 역할을 해준다.
import PropTypes from 'prop-types';

const StyledInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor : theme.main,
}))`
  width: ${({ width }) => width - 40}px;
  height: 60px;
  margin: 3px 0;
  padding: 15px 20px;
  border-radius: 10px;
  font-size: 25px;
  background-color: ${({ theme }) => theme.itemBackground};
  color: ${({ theme }) => theme.text};
`;

const Input = ({ placeholder, value, onChangeText, onSubmitEditing }) => {
  const width = useWindowDimensions().width;
  return (
    <StyledInput 
      width={width} 
      placeholder={placeholder} 
      maxLength={50} 
      autoCapitalize="none" // 자동대문자 기능 없애주기
      autoCorrect={false} // 자동수정 기능 없애주기
      returnKeyType="done"  // 완료 버튼 만들어주기 done, go, next, search 등등
      keyboardAppearance="dark" // ios에서 keyboard를 검게 만들어주는 기능
      value={value}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func.isRequired,
}

export default Input;

// 맘모스 (앱) => 사용자행동추적 (구글 애널리틱스, ... , 장단점) =>
// admin 웹 페이지 통계 페이지가 있는데, X 통계 표 => ??? 구글 애널리틱스 받아올 수 있는지 ? API, CSV ?
