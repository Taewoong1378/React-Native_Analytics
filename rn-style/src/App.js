import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { styles, orangeText } from './style'; 

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, orangeText]}>Open up App.js to start working on your app!</Text>
      <Text style={[styles.text, styles.errorText]}>ErrorText</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     backgroundColor: 'black', 
//     color: 'white', 
//     fontSize: 20,
//   },
//   errorText: {
//     color: 'red',
//   }
// });
