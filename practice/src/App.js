import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MyButton from './MyButton';
import AddMultipleButton from './AddMultipleButton';
import TextWrite from './TextWrite';

export default function App() {
  const [add, setAdd] = useState(0);
  const [multiple, setMultiple] = useState(1);
  const add2 = () => {
    setAdd(add + 2);
  }
  const multiple2 = () => {
    setMultiple(multiple * 2);
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title="Button" onPress={() => alert('Click!')} />
      <MyButton title="Button1" onPress={() => alert('1') }/>
      <MyButton title="Button2" onPress={() => alert('2') }/>
      <MyButton>children</MyButton>
      {/* 2씩 더해주는 버튼 */}
      <AddMultipleButton title="addition" add2={add2} add={add}/>
      {/* 2씩 곱해주는 버튼 */}
      <AddMultipleButton title="multiple" multiple2={multiple2} multiple={multiple}/>
      <TextWrite />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
