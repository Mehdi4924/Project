import React, {useEffect} from 'react';
import {Image, View, StyleSheet, Text} from 'react-native';
import Button from '../../Components/Button';
import {colors} from '../../Utils/Colors';
import {hp, wp} from '../../Utils/Responsive';

export default function AuthSelect(props) {
  useEffect(() => {
    //this runs first
  });

  return (
    <View style={styles.container}>
      <View
        style={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
        <Image
          source={require('../../Assets/authselect.png')}
          style={{width: wp(90), height: hp(50)}}
          resizeMode={'contain'}
        />
        <View>
          <Button
            isLoading={false}
            name={'Login'}
            textStyles={styles.textStyles}
            buttonStyles={styles.buttonStyles}
            onPress={() => props.navigation.navigate('Login')}
          />
          <Button
            isLoading={false}
            name={'Signup'}
            textStyles={styles.textStyles}
            buttonStyles={styles.buttonStyles}
            onPress={() => props.navigation.navigate('AuthSelect')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  buttonStyles: {
    backgroundColor: colors.primary,
    width: wp(80),
    height: hp(5),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginVertical: hp(1),
    elevation: 4,
  },
  textStyles: {
    color: colors.white,
    fontSize: hp(2),
    fontFamily: 'Poppins-Bold',
  },
});
