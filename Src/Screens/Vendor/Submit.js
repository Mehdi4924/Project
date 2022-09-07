import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import HeaderComponent from '../../Components/HeaderComponent';
import {hp, wp} from '../../Utils/Responsive';
import {colors} from '../../Utils/Colors';
import Button from '../../Components/Button';

export default function Submit(props) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <HeaderComponent
            icon={require('../../Assets/arrowBack.png')}
            onPress={() => props.navigation.goBack()}
            name="SUBMIT"
            search={true}
          />
          <View style={styles.orderDetails}>
            <View style={styles.orderDetailsView}>
              <View>
                <Text style={styles.welcomeText}>Rafia Umar</Text>
                <Text style={styles.orderQty}>Chair Cleaning x 3</Text>
              </View>
            </View>
            <Text style={styles.locationText}>Customer Location</Text>
            <Text style={styles.locationText}>
              341 Street 73 G 11/2 G 11 Islamabad Capital Territory, G11,
              Islamabad.
            </Text>
          </View>
          <Text style={styles.headingText}>Payment Details</Text>
          <View style={styles.paymentDetails}>
            <View style={styles.paymentSubView}>
              <Text style={styles.serviceCost}>Service Cost</Text>
              <Text style={styles.serviceCost}>Rs. 2000</Text>
            </View>
            <View
              style={[
                styles.paymentSubView,
                {borderBottomWidth: 1, borderBottomColor: colors.black},
              ]}>
              <Text style={styles.serviceCost}>Material Expense</Text>
              <Text style={styles.serviceCost}>Rs. 500</Text>
            </View>
            <View style={styles.paymentSubView}>
              <Text style={styles.serviceCost}>Net Amount</Text>
              <Text style={styles.serviceCost}>Rs. 2500</Text>
            </View>
          </View>
          <Button
            isLoading={false}
            name={'Done'}
            textStyles={styles.textStyles3}
            buttonStyles={styles.buttonStyles3}
            onPress={() => props.navigation.navigate('Orders')}
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
  orderDetails: {
    width: wp(90),
    height: hp(22),
    backgroundColor: '#E9E9E9',
    borderRadius: 20,
    marginVertical: hp(2),
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
    borderWidth: 1,
    borderColor: colors.primary,
    elevation: 5,
  },
  orderDetailsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.black,
  },
  locationText: {
    color: colors.black,
    paddingTop: hp(1),
    fontFamily: 'Poppins-Regular',
    fontSize: hp(2),
  },
  welcomeText: {
    color: colors.primary,
    paddingTop: hp(1),
    fontFamily: 'Poppins-Bold',
    fontSize: hp(2),
  },
  orderQty: {
    color: colors.primary,
    fontFamily: 'Poppins-Regular',
    fontSize: hp(2),
  },
  headingText: {
    color: colors.primary,
    fontFamily: 'Poppins-Bold',
    fontSize: hp(2),
    width: wp(85),
    marginVertical: hp(1),
  },
  paymentDetails: {
    width: wp(90),
    alignItems: 'center',
    backgroundColor: '#E9E9E9',
    borderRadius: 10,
    marginVertical: hp(2),
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
    borderWidth: 1,
    borderColor: colors.primary,
    elevation: 5,
  },
  paymentSubView: {
    width: wp(80),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: hp(1),
  },
  serviceCost: {
    color: colors.black,
    fontFamily: 'Poppins-Regular',
    fontSize: hp(2),
  },
  buttonStyles3: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.primary,
    width: wp(80),
    height: hp(7),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    borderRadius: 20,
    marginVertical: 5,
  },
  textStyles3: {
    color: colors.white,
    fontFamily: 'Poppins-Bold',
    width: wp(25),
    textAlign: 'center',
    fontSize: hp(2),
  },
});
