import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {colors} from '../Utils/Colors';
import {hp, wp} from '../Utils/Responsive';
import CustomTextInput from './CustomTextInput';

export default function HeaderComponent(props) {
  return (
    <View
      style={[
        styles.header,
        {
          height: !props.search ? hp(20) : hp(12),
        },
      ]}>
      <View
        style={[
          styles.headerMainView,
          {paddingTop: !props.search ? 0 : hp(3)},
        ]}>
        <TouchableOpacity onPress={() => props.onPress()}>
          <Image
            source={props.icon}
            style={{width: 20, height: 20}}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>{props.name}</Text>
      </View>
      {!props.search ? (
        <CustomTextInput
          mainView={styles.mainView}
          textInputStyles={styles.textInputStyles}
          value={props.value}
          onChangeText={text => props.onSearch(text)}
          placeholder="Search"
          icon={true}
          placeholderTextColor={colors.primary}
        />
      ) : null}
      
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    width: wp(100),
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    elevation: 5,
    paddingVertical: hp(2),
    alignItems: 'center',
  },
  headerMainView: {
    flexDirection: 'row',
    width: wp(90),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    color: colors.white,
    width: wp(90),
    textAlign: 'center',
    paddingRight: wp(15),
    fontSize: hp(1.8),
    fontFamily: 'Poppins-Bold',
  },
  //input styles
  mainView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: hp(7),
    width: wp(80),
    backgroundColor: colors.secondary,
    elevation: 5,
    borderRadius: 30,
    paddingHorizontal: wp(4),
    marginVertical: hp(4),
  },
  textInputStyles: {
    width: wp(60),
    fontSize: hp(1.6),
    fontFamily: 'Poppins-Regular',
    color: colors.primary,
  },
});
