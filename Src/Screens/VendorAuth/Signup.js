import React, {useEffect, useState} from 'react';
import {
  Image,
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Button from '../../Components/Button';
import CustomTextInput from '../../Components/CustomTextInput';
import {colors} from '../../Utils/Colors';
import {hp, wp} from '../../Utils/Responsive';

export default function Signup(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confPassword, setConfPassword] = useState('');
  return (
    <View style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image
            source={require('../../Assets/Logo.png')}
            style={styles.topImage}
            resizeMode="contain"
          />
          <View>
            <Text style={styles.loginText}>Signup</Text>
            <CustomTextInput
              mainView={styles.mainView}
              textInputStyles={styles.textInputStyles}
              value={name}
              onChangeText={text => setName(text)}
              placeholder="Name"
              icon={false}
            />
            <CustomTextInput
              mainView={styles.mainView}
              textInputStyles={styles.textInputStyles}
              value={email}
              onChangeText={text => setEmail(text)}
              placeholder="Contact/Email"
              icon={false}
            />
            <CustomTextInput
              mainView={styles.mainView}
              textInputStyles={styles.textInputStyles}
              value={password}
              onChangeText={text => setPassword(text)}
              placeholder="Password"
              icon={false}
            />
            <CustomTextInput
              mainView={styles.mainView}
              textInputStyles={styles.textInputStyles}
              value={confPassword}
              onChangeText={text => setConfPassword(text)}
              placeholder="Confirm Password"
              icon={false}
            />
            <Button
              isLoading={false}
              name={'Signup'}
              textStyles={styles.textStyles}
              buttonStyles={[styles.buttonStyles, {marginVertical: hp(2)}]}
              onPress={() => props.navigation.navigate('Login')}
            />
            <Button
              isLoading={false}
              name={'Continue with google'}
              textStyles={[styles.textStyles, {color: colors.grey}]}
              buttonStyles={[
                styles.buttonStyles,
                {backgroundColor: colors.white},
              ]}
              onPress={() => null}
              icon={true}
              imageSource={require('../../Assets/google.png')}
            />
          </View>
          <TouchableOpacity
            style={{width: wp(80), alignItems: 'center'}}
            onPress={() => props.navigation.navigate('Login')}>
            <Text
              style={{color: colors.primary, fontFamily: 'Poppins-Regular'}}>
              Already have account?
              <Text style={{color: colors.primary, fontFamily: 'Poppins-Bold'}}>
                Login
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: hp(100),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: hp(2),
  },
  topImage: {widht: wp(20), height: hp(20), marginTop: hp(8)},
  loginText: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: hp(4),
    alignSelf: 'center',
    marginVertical: hp(2),
  },
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
    marginVertical: hp(0.5),
  },
  textInputStyles: {
    width: wp(60),
    fontSize: hp(1.2),
    color: colors.black,
    fontFamily: 'Poppins-Regular',
  },
  buttonStyles: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.primary,
    width: wp(80),
    height: hp(7),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginVertical: hp(1),
    elevation: 4,
  },
  textStyles: {
    color: colors.white,
    fontWeight: 'bold',
    width: wp(60),
    textAlign: 'center',
  },
});
