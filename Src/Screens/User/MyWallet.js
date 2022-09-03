import {StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import {colors} from '../../Utils/Colors';
import HeaderComponent from '../../Components/HeaderComponent';
import {hp, wp} from '../../Utils/Responsive';
import ToggleSwitch from 'toggle-switch-react-native';

export default function MyWallet() {
    const [toggle, setToggle] = useState(false)
  return (
    <View style={styles.container}>
      <HeaderComponent
        icon={require('../../Assets/arrowBack.png')}
        onPress={() => props.navigation.goBack()}
        name="WALLET"
        search={true}
      />
      <View style={styles.creditView}>
        <View style={styles.creditInnerView}>
          <Text style={styles.creditText}>Available Credits</Text>
          <View style={styles.lineBarContainer}>
            <View style={styles.lineBar}></View>
            <View style={styles.lineBar}></View>
            <View style={styles.lineBar}></View>
            <View style={styles.lineBar}></View>
          </View>
          <Text style={{color:colors.white, marginLeft:wp(5),}}>Off/On</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginRight: wp(3),
              alignItems: 'center',
              width:wp(60),
              alignSelf:'center'
            }}>
            <ToggleSwitch
              isOn={toggle}
              onColor="#76C987"
              offColor="#B0BEC5"
              labelStyle={{color: 'black', fontWeight: '900'}}
              size="medium"
              onToggle={()=> setToggle(!toggle)}
            />
            <Text
              style={{
                color: colors.white,
                fontFamily: 'Poppins-Bold',
                marginRight: wp(1),
                fontSize: hp(3),
              }}>
              PKR 0
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
  },
  creditView: {
    height: hp(20),
    width: wp(80),
    backgroundColor: '#2E322F',
    marginTop: hp(5),
    borderRadius: 18,
    justifyContent: 'flex-start',
  },
  creditInnerView: {
    height: hp(18),
    width: wp(74),
    backgroundColor: '#363B38',
    // borderBottomLeftRadius: 18,
    borderTopLeftRadius: 18,
    justifyContent: 'space-evenly',
    borderBottomRightRadius: 60,
  },
  creditText: {
    color: colors.white,
    marginTop: hp(1),
    marginLeft: wp(8),
    fontFamily: 'Poppins-Bold',
    fontSize: hp(1.9),
  },
  lineBar: {
    width: wp(12),
    height: hp(1),
    backgroundColor: '#545C56',
    borderRadius: 6,
  },
  lineBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: hp(1),
  },
});
