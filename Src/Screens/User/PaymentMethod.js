import {Icon} from '@rneui/base';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HeaderComponent from '../../Components/HeaderComponent';
import {colors} from '../../Utils/Colors';
import {hp, wp} from '../../Utils/Responsive';

export default function PaymentMethod(props) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <HeaderComponent
            icon={require('../../Assets/arrowBack.png')}
            onPress={() => props.navigation.goBack()}
            name="PAYMENT METHOD"
            search={true}
          />
          <Text style={styles.recommendedText}>Recommended Method</Text>
          <View style={styles.cardParentView}>
            <TouchableOpacity style={styles.singleCardView}>
              <Image
                source={require('../../Assets/ccard.png')}
                style={{width: 25, height: 25}}
                resizeMode="contain"
              />
              <Text style={{fontFamily: 'Poppins-Regular'}}>
                Credit/Debit Card
              </Text>
              <Image
                source={require('../../Assets/cardgrp.png')}
                style={{width: wp(20), height: 25}}
                resizeMode="contain"
              />
              <Icon
                name="chevron-right"
                type="font-awesome-5"
                color={colors.grey}
                size={hp(2)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.singleCardView, {borderBottomWidth: 0}]}>
              <Image
                source={require('../../Assets/mywallet.png')}
                style={{width: 25, height: 25}}
                resizeMode="contain"
              />
              <Text style={{fontFamily: 'Poppins-Regular'}}>My Wallet</Text>
              <Text style={{fontFamily: 'Poppins-Bold'}}>Rs 2000</Text>
              <Icon
                name="chevron-right"
                type="font-awesome-5"
                color={colors.grey}
                size={hp(2)}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.recommendedText}>Other Methods</Text>
          <View style={styles.cardParentView}>
            <TouchableOpacity style={styles.singleCardView}>
              <Image
                source={require('../../Assets/ep.png')}
                style={{width: wp(20), height: hp(3)}}
                resizeMode="cover"
              />
              <Icon
                name="chevron-right"
                type="font-awesome-5"
                color={colors.grey}
                size={hp(2)}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.singleCardView}>
              <Image
                source={require('../../Assets/jc.png')}
                style={{width: wp(20), height: hp(4)}}
                resizeMode="cover"
              />
              <Icon
                name="chevron-right"
                type="font-awesome-5"
                color={colors.grey}
                size={hp(2)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('CashOnDelivery')}
              style={[styles.singleCardView, {borderBottomWidth: 0}]}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={require('../../Assets/cd.png')}
                  style={{width: 25, height: 25, marginRight: 10}}
                  resizeMode="contain"
                />
                <Text style={{fontFamily: 'Poppins-Regular'}}>
                  Cash On Delivery
                </Text>
              </View>
              <Icon
                name="chevron-right"
                type="font-awesome-5"
                color={colors.grey}
                size={hp(2)}
              />
            </TouchableOpacity>
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
  recommendedText: {
    width: wp(90),
    fontFamily: 'Poppins-Bold',
    color: colors.primary,
    marginVertical: hp(2),
  },
  cardParentView: {
    backgroundColor: colors.white,
    width: wp(90),
    elevation: 5,
    borderWidth: 1,
    borderColor: colors.primaryLight,
    borderRadius: 10,
    marginVertical: hp(2),
  },
  singleCardView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp(90),
    paddingVertical: hp(2),
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
    paddingHorizontal: wp(5),
  },
});
