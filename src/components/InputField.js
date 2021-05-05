import React, { useContext, useEffect } from 'react';
import { Text, StyleSheet, Image, View, TextInput } from 'react-native';

export const InputField = React.memo(props => {
  /*
      InputField chua cac props sau:
      container: style cho container bao lay toan bo InputField nay
      placholder: nhu thuong,
      imageView: style cho imageView cua input, thuong se de ben trai
      image: style cho image
      source: source cua image, require('../../')
      inputView: style textInput, ben phai image,
      value: text trong input
      onChange: ham thay doi text
  */
  useEffect(() => {
    console.log(props.placeholder + ' ' + props.value);
  });
  return (
    <View style={{ ...props.container, flexDirection: 'row' }}>
      <View style={{ ...props.imageView, ...styles.imageView }}>
        <Image style={props.image} source={props.source}></Image>
      </View>
      <TextInput
        style={props.inputView}
        placeholder={props.placeholder}
        secureTextEntry={props.placeholder == 'Password'}
        value={props.value}
        onChangeText={props.onChange}
      />
    </View>
  );
});

const areEqual = (prevProps, nextProps) => {

  return true;
};

const styles = StyleSheet.create({
  imageView: {
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    borderRadius: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
