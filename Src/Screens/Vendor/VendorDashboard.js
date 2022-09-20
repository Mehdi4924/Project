import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import Button from '../../Components/Button';
import {colors} from '../../Utils/Colors';
import {hp, wp} from '../../Utils/Responsive';

export default function VendorDashboard(props) {
  const [toggle, setToggle] = useState(false);
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.iconVIew}>
              <TouchableOpacity
                onPress={() => null}
                style={{justifyContent: 'center'}}>
                <Image
                  source={require('../../Assets/user.png')}
                  style={{width: 50, height: 50}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => null}
                style={{justifyContent: 'center'}}>
                <Image
                  source={require('../../Assets/phone2.png')}
                  style={{width: 30, height: 30}}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.toggleStyles}>
              <Text style={styles.welcomeText}>Vendor Status</Text>
              <ToggleSwitch
                isOn={toggle}
                onColor={colors.primaryLight}
                offColor={colors.black}
                labelStyle={[
                  styles.toggleText,
                  {color: toggle ? colors.primary : colors.black},
                ]}
                size="small"
                label={toggle ? 'On' : 'Off'}
                onToggle={() => setToggle(!toggle)}
              />
            </View>
          </View>
          <View style={{width: wp(90)}}>
            <Text style={styles.welcomeText}>Earnings</Text>
            <View style={styles.btnsText}>
              <TouchableOpacity
                style={styles.btnText}
                onPress={() => props.navigation.navigate('Wallet')}>
                <View style={styles.subView}>
                  <Image
                    source={require('../../Assets/wallet.png')}
                    style={{width: 30, height: 30}}
                  />
                  <Text style={styles.walletText}>Wallet</Text>
                </View>
                <Text style={styles.priceText}>Rs.0</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Bonus')}
                style={[styles.btnText, {backgroundColor: '#FFA40B'}]}>
                <View style={styles.subView}>
                  <Image
                    source={require('../../Assets/coin.png')}
                    style={{width: 30, height: 30}}
                    resizeMode="contain"
                  />
                  <Text style={styles.walletText}>Bonus</Text>
                </View>
                <Text style={styles.priceText}>Rs.0</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{width: wp(90)}}>
            <Text style={styles.welcomeText}>Earnings</Text>
            <View style={styles.orderDetails}>
              <View style={styles.orderDetailsView}>
                <View>
                  <Text style={styles.welcomeText}>Earnings</Text>
                  <Text style={styles.orderQty}>Chair Cleaning x 3</Text>
                </View>
                <View>
                  <Text style={styles.welcomeText}>Rs.750</Text>
                </View>
              </View>
              <Text style={styles.locationText}>Customer Location</Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.locationText}>
                  341 Street 73 G 11/2 G 11 Islamabad Capital Territory, G11,
                  Islamabad.
                </Text>
                <Button
                  isLoading={false}
                  name={'Accept'}
                  textStyles={styles.textStyles}
                  buttonStyles={styles.buttonStyles1}
                  onPress={() => null}
                />
              </View>
            </View>
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
  header: {
    height: hp(22),
    backgroundColor: colors.primary,
    width: wp(100),
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    elevation: 5,
    paddingVertical: hp(2),
    alignItems: 'center',
  },
  iconVIew: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    paddingHorizontal: wp(5),
    width: wp(100),
  },
  welcomeText: {
    color: colors.primary,
    paddingTop: hp(1),
    fontFamily: 'Poppins-Bold',
    fontSize: hp(2),
  },
  toggleStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
    width: wp(80),
    height: hp(7),
    backgroundColor: colors.white,
    borderRadius: 10,
    marginVertical: hp(3),
    elevation: 5,
    alignSelf: 'center',
  },
  toggleText: {
    color: colors.primary,
    fontFamily: 'Poppins-Regular',
    fontSize: hp(2.5),
  },
  btnsText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: hp(2),
  },
  btnText: {
    width: wp(35),
    height: hp(12),
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  subView: {
    width: wp(25),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(1),
  },
  walletText: {
    color: colors.white,
    fontFamily: 'Poppins-Regular',
    fontSize: hp(2),
  },
  orderQty: {
    color: colors.primary,
    fontFamily: 'Poppins-Regular',
    fontSize: hp(2),
  },
  priceText: {
    color: colors.white,
    fontFamily: 'Poppins-Bold',
    fontSize: hp(3),
  },
  orderDetails: {
    width: wp(90),
    height: hp(25),
    backgroundColor: '#E9E9E9',
    borderRadius: 20,
    marginVertical: hp(2),
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
  },
  orderDetailsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.black,
  },
  locationText: {
    width: wp(55),
    color: colors.black,
    paddingTop: hp(1),
    fontFamily: 'Poppins-Regular',
    fontSize: hp(2),
  },
  textStyles: {
    color: colors.white,
    fontFamily: 'Poppins-Bold',
    width: wp(30),
    textAlign: 'center',
    fontSize: hp(1.8),
  },
  buttonStyles1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.primary,
    width: wp(20),
    height: hp(4),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginVertical: hp(1),
    elevation: 4,
    alignSelf: 'flex-end',
  },
});
