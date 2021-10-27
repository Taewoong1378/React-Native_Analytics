import React from 'react';
import { TouchableOpacity, View, Text, ProgressViewIOSComponent } from 'react-native';

const AddMultipleButton = (props) => {
  console.log(props);
  return (
    <TouchableOpacity onPress={props.title==="addition" ? props.add2 : props.multiple2}>
      <View style={{ backgroundColor: 'red', padding: 10, margin: 10 }
    }>
        <Text style={{ fontSize: 20, color: 'white' }}>{props.title==="addition" ? props.add : props.multiple}</Text>  
      </View>
    </TouchableOpacity>
  );
};

export default AddMultipleButton;
