import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../Utils/Colors';
import {hp, wp} from '../Utils/Responsive';
export default function TabBarButton(props) {
  const active = props.accessibilityState.selected;
  console.log(props);
  if (active) {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => props.onPress()}>
          <Image
            source={props.imgSrc}
            style={{width: 20, height: 20}}
            resizeMode="contain"
          />
          <Text
            style={{
              color: active ? colors.primary : colors.black,
              fontFamily: 'Poppins-Regular',
              fontSize: hp(1.6),
            }}>
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
          style={{width: 20, height: 20}}
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
    width: wp(22),
    marginHorizontal: wp(1),
  },
  button: {
    height: hp(6),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(2),
    flexDirection: 'row',
  },
  inactiveButton: {
    width: wp(38),
    height: hp(7),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
