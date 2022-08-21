import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {colors} from '../Utils/Colors';
import {hp, wp} from '../Utils/Responsive';
import CustomTextInput from './CustomTextInput';

export default function HeaderComponent(props) {
  return (
    <View style={styles.header}>
      <View style={styles.headerMainView}>
        <TouchableOpacity onPress={() => props.onPress()}>
          <Image source={props.icon} style={{width: 30, height: 30}} />
        </TouchableOpacity>
        <Text style={styles.headerText}>{props.name}</Text>
      </View>
      <CustomTextInput
        mainView={styles.mainView}
        textInputStyles={styles.textInputStyles}
        value={props.value}
        onChangeText={text => props.onSearch(text)}
        placeholder="Search"
        icon={true}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    height: hp(20),
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
    fontSize: hp(2),
    fontFamily: 'Poppins-Bold',
    color: colors.black,
  },
});
