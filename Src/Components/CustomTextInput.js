import React, {useEffect, useState} from 'react';
import {Image, View, StyleSheet, Text, TextInput} from 'react-native';
import {colors} from '../Utils/Colors';
import {hp, wp} from '../Utils/Responsive';

export default function CustomTextInput(props) {
  return (
    <View style={props.mainView}>
      <TextInput
        value={props.value}
        placeholder={props.placeholder}
        onChangeText={t => props.onChangeText(t)}
        style={props.textInputStyles}
        placeholderTextColor={props.placeholderTextColor}
      />
      {props.icon ? (
        <Image
          source={require('../Assets/search.png')}
          style={{width: 20, height: 20}}
          resizeMode="contain"
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'space-around'},
});
