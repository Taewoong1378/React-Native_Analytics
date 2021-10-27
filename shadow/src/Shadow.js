import React from 'react';
import { StyleSheet, View, Platform, Text } from 'react-native';

const Shadow = () => {
  return (
    <View style={styles.shadow}>
      {/* Platform을 이용하면 현재 어떤 Platform을 쓰고 있는지도 알 수 있고, select를 이용해서 플랫폼마다 코드가 다르게 적용되게 하는 것도 가능하다. */}
      <Text>{Platform.OS === 'ios' ? 'ios' : 'android'}</Text>
    </View>
  );
};

// 아래 shadow의 경우에는 ios에서는 정상적으로 출력되지만 안드로이드에서는 제대로 출력되지 않는다.
// 안드로이드의 경우에는 elevation이라는 속성을 사용해야된다.
const styles = StyleSheet.create({
  shadow: {
    width: 200,
    height: 200,
    ...Platform.select({
      ios: {
        backgroundColor: 'blue', 
        shadowColor: '#000',
        shadowOffset: {
          width: 10,
          height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
      },
      android: {
        backgroundColor: 'green', 
        elevation: 20,  // 안드로이드를 위한 설정이다.
      },
    }),
  },
});

export default Shadow;