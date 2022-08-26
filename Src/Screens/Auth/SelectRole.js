import React, {useEffect} from 'react';
import {Image, View, StyleSheet, Text} from 'react-native';
import Button from '../../Components/Button';
import {colors} from '../../Utils/Colors';
import {wp, hp} from '../../Utils/Responsive';
export default function SelectRole(props) {
  useEffect(() => {
    //this runs first
  });

  return (
    <View style={styles.container}>
      <View
        style={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
        <Image
          source={require('../../Assets/roleimage.png')}
          style={{width: wp(90), height: hp(50)}}
          resizeMode={'contain'}
        />
        <View>
          <Button
            isLoading={false}
            name={'Continue as User'}
            textStyles={styles.textStyles}
            buttonStyles={styles.buttonStyles}
            onPress={() => props.navigation.navigate('AuthSelect')}
          />
          <Button
            isLoading={false}
            name={'Continue as Vendor'}
            textStyles={styles.textStyles}
            buttonStyles={styles.buttonStyles}
            onPress={() => props.navigation.navigate('UserStack')}
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
    backgroundColor: colors.secondary,
    width: wp(80),
    height: hp(7),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginVertical: hp(1),
    elevation: 4,
  },
  textStyles: {
    color: colors.primary,
    fontFamily: 'Poppins-Bold',
    fontSize: hp(2),
  },
});
