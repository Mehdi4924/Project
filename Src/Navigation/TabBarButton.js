import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../Utils/Colors';
import {hp, wp} from '../Utils/Responsive';
export default function TabBarButton(props) {
  console.log(props);
  const active = props.accessibilityState.selected;

  if (active) {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => props.onPress()}>
          <Image
            source={props.imgSrc}
            style={{width: 35, height: 35}}
            resizeMode="contain"
          />
          <Text style={{color: active ? colors.primary : colors.black}}>
            {props.name}
          </Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        style={styles.inactiveButton}
        onPress={() => props.onPress()}>
        <Image
          source={props.imgSrc}
          style={{width: 35, height: 35}}
          resizeMode="contain"
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryLight,
    height: hp(6),
    alignSelf: 'center',
    borderRadius: 8,
    width: wp(25),
    marginHorizontal: wp(1),
  },
  button: {
    width: wp(25),
    height: hp(6),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(2),
    flexDirection: 'row',
  },
  inactiveButton: {
    width: wp(40),
    height: hp(7),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
