import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Box from './Box';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Box style={{ backgroundColor: 'red', height: 100 }}/> */}
      <Box style={{ backgroundColor: 'red', flex: 1 }}/>
      {/* 기종에 따라 보여주고자 하는 모습이 달라지기 때문에 height가 아닌 flex를 사용해줘야한다 */}
      <Box style={{ backgroundColor: 'green', flex: 1 }}/>
      <Box style={{ backgroundColor: 'blue', flex: 2 }}/>
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
