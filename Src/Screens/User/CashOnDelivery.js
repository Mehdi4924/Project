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
export default function CashOnDelivery(props) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <HeaderComponent
            icon={require('../../Assets/arrowBack.png')}
            onPress={() => props.navigation.goBack()}
            name="CASH ON DELIVERY"
            search={true}
          />
          <View style={styles.addresssView}>
            <TouchableOpacity style={styles.addressBtn}>
              <Text style={styles.addressText}>Address</Text>
              <Icon
                name="plus"
                type="font-awesome-5"
                color={colors.primary}
                size={hp(2)}
              />
            </TouchableOpacity>
            <Text style={styles.defaultLocation}>Default Location</Text>
            <Text style={styles.address}>
              Al Rehman Trade Center Punjab, Sargodha
            </Text>
          </View>
          <Text style={styles.placeholder}>Name</Text>
          <CustomTextInput
            mainView={styles.mainView}
            textInputStyles={[styles.textInputStyles]}
            value={name}
            onChangeText={text => setName(text)}
            placeholder="Name"
            icon={false}
          />
          <Text style={styles.placeholder}>Contact</Text>
          <CustomTextInput
            mainView={styles.mainView}
            textInputStyles={[styles.textInputStyles]}
            value={contact}
            onChangeText={text => setContact(text)}
            placeholder="+92 xxxxxxxxxx"
            icon={false}
          />
          <Text style={styles.placeholder}>Nearest Landmarks</Text>
          <CustomTextInput
            mainView={styles.mainView1}
            textInputStyles={styles.textInputStyles1}
            value={contact}
            onChangeText={text => setContact(text)}
            placeholder="Any Popular Place"
            icon={false}
          />
          <Text
            style={[
              styles.addressText,
              {width: wp(85), marginVertical: hp(2)},
            ]}>
            Net Amount
          </Text>
          <View
            style={{
              backgroundColor: colors.white,
              elevation: 5,
              borderWidth: 1,
              borderColor: colors.primary,
              width: wp(85),
              paddingVertical: hp(2),
              paddingHorizontal: wp(2),
              borderRadius: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.address}>Amount</Text>
            <Text style={styles.address}>Rs 2000</Text>
          </View>
          <Button
            isLoading={false}
            name={'Checkout'}
            textStyles={styles.textStyles}
            buttonStyles={styles.buttonStyles}
            onPress={() => props.navigation.navigate('PaymentMethod')}
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

  addresssView: {
    backgroundColor: colors.primaryLight,
    width: wp(85),
    elevation: 5,
    paddingHorizontal: wp(5),
    marginVertical: hp(2),
    paddingVertical: hp(1),
    borderRadius: 10,
  },
  addressBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addressText: {fontFamily: 'Poppins-Bold', color: colors.primary},
  address: {fontFamily: 'Poppins-Regular', color: colors.black},
  defaultLocation: {
    fontFamily: 'Poppins-Regular',
    color: colors.grey,
    marginVertical: hp(1),
  },
  placeholder: {
    width: wp(85),
    marginVertical: hp(0.5),
    fontFamily: 'Poppins-Regular',
    color: colors.black,
  },
  //text input stylres
  mainView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: hp(6),
    width: wp(85),
    backgroundColor: colors.white,
    elevation: 5,
    borderRadius: 10,
    paddingHorizontal: wp(4),
    marginVertical: hp(1),
  },
  textInputStyles: {
    width: wp(30),
    fontSize: hp(1.2),
    color: colors.black,
    fontFamily: 'Poppins-Regular',
  },
  mainView1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: hp(15),
    width: wp(85),
    backgroundColor: colors.white,
    elevation: 5,
    borderRadius: 10,
    paddingHorizontal: wp(4),
    marginVertical: hp(1),
  },
  textInputStyles1: {
    width: wp(30),
    height: hp(15),
    fontSize: hp(1.2),
    textAlignVertical: 'top',
    color: colors.black,
    fontFamily: 'Poppins-Regular',
  },
  //btn
  buttonStyles: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.primary,
    width: wp(50),
    height: hp(6),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginVertical: hp(3),
    elevation: 4,
    alignSelf: 'center',
  },
  textStyles: {
    color: colors.white,
    fontFamily: 'Poppins-Bold',
    width: wp(30),
    textAlign: 'center',
    fontSize: hp(1.8),
  },
});
