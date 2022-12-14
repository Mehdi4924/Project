import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';
import {colors} from '../Utils/Colors';
import {hp, wp} from '../Utils/Responsive';

export default function Button(props) {
  return (
    <TouchableOpacity
      style={props.buttonStyles ? props.buttonStyles : styles.container}
      onPress={props.onPress}>
      {props.icon ? (
        <Image source={props.imageSource} style={{width: 20, height: 20}} />
      ) : null}
      {props.isLoading ? (
        <ActivityIndicator size={'small'} color={colors.white} />
      ) : (
        <Text style={props.textStyles}>{props.name}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: wp(80),
    height: hp(5),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});
