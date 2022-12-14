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
export default function AddAddress(props) {
  const [code, setCode] = useState('');
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <HeaderComponent
            icon={require('../../Assets/arrowBack.png')}
            onPress={() => props.navigation.goBack()}
            name="ADDRESS"
            search={true}
          />
          <View style={styles.addressView}>
            <Text style={styles.defaultAddress}>Default Address</Text>
            <TouchableOpacity>
              <Icon
                name="plus"
                type="font-awesome-5"
                color={colors.primary}
                size={hp(2)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.addressSubView}>
            <View style={styles.headingText}>
              <Text style={{color: colors.grey, fontFamily: 'Poppins-Bold'}}>
                Address
              </Text>
              <Icon
                name="plus"
                type="font-awesome-5"
                color={colors.primary}
                size={hp(2)}
              />
            </View>
            <Text style={{color: colors.black, fontFamily: 'Poppins-Regular'}}>
              Islmabad, Islamabad Capital Territory, Pakistan
            </Text>
          </View>
          <Text style={styles.defaultLocation}>Select Default Location</Text>
          <View style={styles.bottomText}>
            <Text style={{color: colors.black, fontFamily: 'Poppins-Bold'}}>
              Sargodha
            </Text>
            <Text style={{color: colors.black, fontFamily: 'Poppins-Regular'}}>
              Al Rehman, Trade Center Punjab, Sargodha
            </Text>
          </View>
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
  addressView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(90),
    marginVertical: hp(2),
  },
  addressSubView: {
    backgroundColor: colors.primaryLight,
    paddingVertical: hp(2),
    paddingHorizontal: wp(1),
    borderRadius: 10,
    paddingHorizontal: wp(5),
    width: wp(90),
    elevation: 5,
  },
  headingText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(80),
    alignItems: 'center',
  },
  defaultLocation: {
    color: colors.primary,
    fontFamily: 'Poppins-Bold',
    alignSelf: 'center',
    width: wp(90),
    marginVertical: hp(2),
  },
  defaultAddress: {
    color: colors.primary,
    fontFamily: 'Poppins-Bold',
    alignSelf: 'center',
  },
  bottomText: {
    paddingHorizontal: wp(1),
    borderRadius: 10,
    width: wp(90),
  },
});
