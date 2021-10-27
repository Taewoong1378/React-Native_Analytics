import React from 'react';
import { TouchableOpacity, View, Text, ProgressViewIOSComponent } from 'react-native';
import PropTypes from 'prop-types';

const MyButton = (props) => {
  // console.log(props.children);
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{ backgroundColor: 'red', padding: 10, margin: 10 }
    }>
        <Text style={{ fontSize: 20, color: 'white' }}>{props.title}</Text>   
      </View>
    </TouchableOpacity>
  );
};
MyButton.defaultProps = {
  title: 'default',
  onPress: () => alert('default'),
};
// prop의 경우엔 propTypes 검사를 해준다.
MyButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  // titles2: PropTypes.isRequired 등도 가능하다.
  // typescript를 이용하면 별도로 type 검사를 해주지 않아도된다.
}

export default MyButton;
