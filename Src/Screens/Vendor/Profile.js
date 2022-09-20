import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../../Components/Button';
import HeaderComponent from '../../Components/HeaderComponent';
import {colors} from '../../Utils/Colors';
import {hp, wp} from '../../Utils/Responsive';
import DatePicker from 'react-native-date-picker';
import {Rating} from 'react-native-ratings';
import {Icon} from '@rneui/themed';
import CustomTextInput from '../../Components/CustomTextInput';
export default function Profile(props) {
  const [code, setCode] = useState('');
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View
            style={{
              height: hp(27),
              alignItems: 'center',
            }}>
            <HeaderComponent
              icon={require('../../Assets/arrowBack.png')}
              onPress={() => props.navigation.goBack()}
              name="PROFILE"
              search={true}
            />
            <View style={styles.headerExtension} />
            <Image
              source={require('../../Assets/user.png')}
              resizeMode="cover"
              style={styles.profileImage}
            />
          </View>
          <Text style={{fontFamily: 'Poppins-Bold', color: colors.primary}}>
            Faisal
          </Text>
          <View style={styles.mainView}>
            <View style={styles.subView}>
              <Text style={styles.textHeadingStyles}>Name</Text>
              <Text style={styles.textStyles}>Faisal</Text>
            </View>
            <View style={styles.subView}>
              <Text style={styles.textHeadingStyles}>Phone Number</Text>
              <Text style={styles.textStyles}>+92 xxxxxxxxxx</Text>
            </View>
            <View style={[styles.subView, {borderBottomWidth: 0}]}>
              <Text style={styles.textHeadingStyles}>Account</Text>
              <Text style={styles.textStyles}>Account</Text>
            </View>
          </View>
          <View style={styles.mainView}>
            <View style={styles.subView}>
              <Text style={styles.textHeadingStyles}>Account</Text>
            </View>
            <View style={[styles.subView, {borderBottomWidth: 0}]}>
              <Text style={styles.textStyles}>Muhammad Faisal Waseem</Text>
              <Text style={[styles.textStyles, {color: colors.primary}]}>
                Bank Al-Habib
              </Text>
              <Text style={[styles.textStyles, {color: colors.grey}]}>
                **** **** **** 1234
              </Text>
            </View>
          </View>
          <Button
            isLoading={false}
            name={'Log Out'}
            textStyles={styles.btnTextStyles}
            buttonStyles={[styles.buttonStyles, {marginVertical: hp(2)}]}
            onPress={() => props.navigation.replace('SelectRole')}
            icon={true}
            imageSource={require('../../Assets/logout.png')}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
  },
  headerExtension: {
    width: wp(100),
    height: hp(10),
    position: 'absolute',
    backgroundColor: colors.primary,
    top: hp(10),
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  profileImage: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: hp(1),
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 90,
  },
  mainView: {
    width: wp(90),
    backgroundColor: colors.white,
    elevation: 5,
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: hp(1),
    marginVertical: hp(2),
    borderWidth: 1,
    borderColor: colors.primary,
  },
  subView: {
    justifyContent: 'space-between',
    width: wp(80),
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
    paddingVertical: hp(1),
    borderRadius: 10,
  },
  textHeadingStyles: {
    fontFamily: 'Poppins-Bold',
    marginLeft: wp(2),
    fontSize: hp(2),
    color: colors.black,
  },
  textStyles: {
    fontFamily: 'Poppins-Regular',
    marginLeft: wp(2),
    color: colors.black,
    fontSize: hp(2),
  },
  buttonStyles: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.primary,
    width: wp(90),
    height: hp(5),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginVertical: hp(1),
    elevation: 4,
  },
  btnTextStyles: {
    color: colors.black,
    fontFamily: 'Poppins-Regular',
    width: wp(75),
    fontSize: hp(1.8),
  },
});
