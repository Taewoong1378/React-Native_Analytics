import React, { useState } from 'react';
import { TextInput, View, Text, ProgressViewIOSComponent } from 'react-native';

const TextWrite = () => {
  const [text, setText] = useState('');
  const onChangeInput = (e) => {
    // console.log(e.nativeEvent);
    // console.log(e.nativeEvent.text);
    setText(e.nativeEvent.text);
  }
  console.log(text);
  return (
    <View>
      <TextInput 
        onChange={onChangeInput} 
        style={{ borderWidth: 1, padding: 10, fontSize: 20 }} />
    </View> 
  );
};

export default TextWrite;
