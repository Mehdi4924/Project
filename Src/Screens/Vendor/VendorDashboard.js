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
import {colors} from '../../Utils/Colors';
import {hp, wp} from '../../Utils/Responsive';

export default function VendorDashboard() {
  const [toggle, setToggle] = useState(false);
  return (
    <View style={{flex: 1}}>
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
              <TouchableOpacity style={styles.btnText}>
                <View style={styles.subView}>
                  <Image
                    source={require('../../Assets/wallet.png')}
                    style={{width: 30, height: 30}}
                  />
                  <Text style={styles.walletText}>Wallet</Text>
                </View>
                <Text style={styles.priceText}>Rs.0</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btnText,{}]}>
                <View style={styles.subView}>
                  <Image
                    source={require('../../Assets/wallet.png')}
                    style={{width: 30, height: 30}}
                  />
                  <Text style={styles.walletText}>Wallet</Text>
                </View>
                <Text style={styles.priceText}>Rs.0</Text>
              </TouchableOpacity>
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
    fontSize: hp(2.5),
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
  priceText: {
    color: colors.white,
    fontFamily: 'Poppins-Bold',
    fontSize: hp(3),
  },
});
