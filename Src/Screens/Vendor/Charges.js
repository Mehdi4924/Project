import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import HeaderComponent from '../../Components/HeaderComponent';
import {hp, wp} from '../../Utils/Responsive';
import {colors} from '../../Utils/Colors';
import Button from '../../Components/Button';
import CustomTextInput from '../../Components/CustomTextInput';

export default function Charges(props) {
  const [serviceCharges, setServiceCharges] = useState('');
  const [materialCharges, setMaterialCharges] = useState('');
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <HeaderComponent
            icon={require('../../Assets/arrowBack.png')}
            onPress={() => props.navigation.goBack()}
            name="CHARGES"
            search={true}
          />
          <Text style={styles.textHeading}>Service Charges</Text>
          <CustomTextInput
            mainView={styles.mainView}
            textInputStyles={styles.textInputStyles}
            value={serviceCharges}
            onChangeText={text => setServiceCharges(text)}
            placeholder="Charges"
            icon={false}
          />
          <Text style={styles.textHeading}>Service Charges</Text>
          <CustomTextInput
            mainView={styles.mainView}
            textInputStyles={styles.textInputStyles}
            value={materialCharges}
            onChangeText={text => setMaterialCharges(text)}
            placeholder="Material Charges"
            icon={false}
          />
          <Button
            isLoading={false}
            name={'Submit'}
            textStyles={styles.textStyles3}
            buttonStyles={styles.buttonStyles3}
            onPress={() => props.navigation.navigate("Submit")}
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
  mainView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: hp(7),
    width: wp(80),
    backgroundColor: colors.white,
    elevation: 5,
    borderRadius: 30,
    paddingHorizontal: wp(4),
    marginVertical: hp(0.5),
  },
  textInputStyles: {
    width: wp(60),
    fontSize: hp(2),
    color: colors.primary,
    fontFamily: 'Poppins-Bold',
  },
  textHeading: {
    width: wp(70),
    fontSize: hp(2),
    color: colors.primary,
    fontFamily: 'Poppins-Bold',
    marginVertical: hp(2),
  },
  buttonStyles3: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.primary,
    width: wp(80),
    height: hp(5),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    borderRadius: 20,
    marginVertical: hp(5),
  },
  textStyles3: {
    color: colors.white,
    fontFamily: 'Poppins-Bold',
    width: wp(30),
    textAlign: 'center',
    fontSize: hp(2),
  },
});
