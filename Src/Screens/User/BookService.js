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
export default function BookService(props) {
  const [code, setCode] = useState('');
  const [problem, setProblem] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [date1, setDate1] = useState(new Date());
  const [open1, setOpen1] = useState(false);
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <HeaderComponent
            icon={require('../../Assets/arrowBack.png')}
            onPress={() => props.navigation.goBack()}
            name="BOOKING SERVICE"
            search={true}
          />
          <View style={{marginVertical: hp(2)}}>
            <Text style={styles.serviceNameText}>Select Schedule</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: wp(90),
              }}>
              <Button
                isLoading={false}
                name={'Select Date'}
                textStyles={styles.textStyles}
                buttonStyles={styles.buttonStyles}
                onPress={() => null}
              />
              <Button
                isLoading={false}
                name={'Select Time'}
                textStyles={styles.textStyles}
                buttonStyles={styles.buttonStyles}
                onPress={() => setOpen(true)}
              />
            </View>
            {/* itemstylesa */}
            <View style={styles.itemContainer}>
              <View style={styles.mainImageView}>
                <View style={styles.listImageView}>
                  <Image
                    source={require('../../Assets/dummyicon.png')}
                    style={{width: wp(30), height: hp(12)}}
                    resizeMode="contain"
                  />
                </View>
                <View style={{width: wp(51), justifyContent: 'center'}}>
                  <Text style={styles.serviceNameText}>AC Leakage</Text>
                  <Text style={styles.providerText}>Service Provider</Text>
                  <View style={styles.ratingView}>
                    <Text style={styles.ratingText}>4</Text>
                    <Rating
                      ratingCount={5}
                      startingValue={4}
                      imageSize={hp(2)}
                      onFinishRating={null}
                      ratingColor={colors.primary}
                      ratingBackgroundColor={colors.white}
                      tintColor={colors.primaryLight}
                      readonly={true}
                      style={{alignSelf: 'flex-start', marginVertical: hp(1)}}
                    />
                  </View>
                  <View style={styles.priceView}>
                    <Text style={styles.oldPrice}>Rs 2000</Text>
                    <Text style={styles.priceText}>Rs 1000</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{marginVertical: hp(1)}}>
              <View style={styles.addressParentView}>
                <Text style={styles.serviceNameText}>Address</Text>
                <TouchableOpacity onPress={() => null}>
                  <Icon
                    name="plus"
                    type="font-awesome-5"
                    color={colors.primary}
                    size={hp(2)}
                  />
                </TouchableOpacity>
              </View>
              <View style={{marginVertical: hp(1)}}>
                <Text style={[styles.priceCalText, {color: colors.grey}]}>
                  Default Location
                </Text>
                <Text style={styles.priceCalText}>
                  All Rehman Trade Cener Punjab Sargodha
                </Text>
              </View>
              <View style={{marginVertical: hp(1)}}>
                <Text style={styles.serviceNameText}>
                  Apply Coupon / Promo Code
                </Text>
                <View style={styles.couponView}>
                  <CustomTextInput
                    mainView={styles.mainView}
                    textInputStyles={styles.textInputStyles}
                    value={code}
                    onChangeText={text => setCode(text)}
                    placeholder="Code"
                    icon={false}
                  />
                  <Button
                    isLoading={false}
                    name={'Apply'}
                    textStyles={styles.textStyles}
                    buttonStyles={styles.buttonStyles1}
                    onPress={() => nul}
                  />
                </View>
                <View style={styles.serviceChargesView}>
                  <View style={styles.addMoreView}>
                    <Text style={styles.serviceNameText}>AC Leakage</Text>
                    <Icon
                      name="plus"
                      type="font-awesome-5"
                      color={colors.primary}
                      size={hp(2)}
                    />
                  </View>
                  <View style={[styles.addMoreView, {borderBottomWidth: 0}]}>
                    <Text style={styles.priceCalText}>Pirce x 1</Text>
                    <Text style={styles.priceCalText}>Rs 2000</Text>
                  </View>
                </View>
                <Text style={styles.serviceNameText}>
                  Apply Coupon / Promo Code
                </Text>
                <TouchableOpacity style={styles.addImage}>
                  <Icon
                    name="plus"
                    type="font-awesome-5"
                    color={colors.grey}
                    size={hp(6)}
                  />
                </TouchableOpacity>
                <Text style={styles.serviceNameText}>
                  Problem Message (Optional)
                </Text>
                <View>
                  <CustomTextInput
                    mainView={styles.mainView1}
                    textInputStyles={[
                      styles.textInputStyles,
                      {textAlignVertical: 'top'},
                    ]}
                    value={problem}
                    onChangeText={text => setProblem(text)}
                    placeholder="Message"
                    icon={false}
                  />
                  <Button
                    isLoading={false}
                    name={'Proceed'}
                    textStyles={styles.textStyles}
                    buttonStyles={styles.bottomButtonStyles}
                    onPress={() => props.navigation.navigate('PaymentMethod')}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <DatePicker
        modal
        open={open}
        date={date}
        mode="time"
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <DatePicker
        modal
        open={open1}
        date={date1}
        mode="date"
        onConfirm={date => {
          setOpen1(false);
          setDate1(date);
        }}
        onCancel={() => {
          setOpen1(false);
        }}
      />
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
    height: hp(20),
    backgroundColor: colors.primary,
    width: wp(100),
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    elevation: 5,
    paddingVertical: hp(2),
    alignItems: 'center',
  },
  addressParentView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp(90),
  },
  addMoreView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp(80),
    paddingVertical: hp(1),
    borderBottomWidth: 1,
    borderBottomColor: colors.black,
  },
  couponView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp(90),
    marginVertical: hp(1),
  },
  serviceChargesView: {
    backgroundColor: colors.white,
    elevation: 5,
    width: wp(90),
    borderWidth: 1,
    borderColor: colors.primary,
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: hp(2),
  },
  priceCalText: {
    fontFamily: 'Poppins-Regular',
    color: colors.black,
  },
  addImage: {
    backgroundColor: colors.white,
    elevation: 5,
    width: wp(20),
    height: hp(10),
    marginVertical: hp(2),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  //bttn
  buttonStyles: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.primary,
    width: wp(30),
    height: hp(6),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginVertical: hp(1),
    elevation: 4,
    alignSelf: 'flex-end',
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
  bottomButtonStyles: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.primary,
    width: wp(90),
    height: hp(4),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginVertical: hp(1),
    elevation: 4,
    alignSelf: 'center',
  },

  //service details styles
  itemContainer: {
    width: wp(90),
    height: hp(20),
    backgroundColor: colors.primaryLight,
    padding: 10,
    borderRadius: 10,
    elevation: 5,
    marginVertical: hp(1),
    justifyContent: 'center',
  },
  mainImageView: {flexDirection: 'row', justifyContent: 'space-between'},
  listImageView: {
    width: wp(30),
    height: hp(15),
    backgroundColor: colors.white,
    borderRadius: 10,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  serviceNameText: {
    fontSize: hp(2),
    color: colors.primary,
    fontFamily: 'Poppins-Bold',
  },
  ratingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(55),
  },
  priceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(25),
  },
  providerText: {
    fontSize: hp(1.8),
    fontFamily: 'Poppins-Regular',
    color: colors.black,
  },
  ratingText: {
    color: colors.primary,
    fontSize: hp(2),
    fontFamily: 'Poppins-Regular',
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    fontSize: hp(1.7),
    fontFamily: 'Poppins-Regular',
    color: colors.black,
  },
  priceText: {
    color: colors.primary,
    fontSize: hp(1.7),
    fontFamily: 'Poppins-Regular',
  },
  ratingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp(25),
  },
  //inpout styles
  mainView1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: hp(15),
    width: wp(90),
    backgroundColor: colors.white,
    elevation: 5,
    borderRadius: 10,
    paddingHorizontal: wp(4),
    marginVertical: hp(1),
  },
  mainView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: hp(6),
    width: wp(30),
    backgroundColor: colors.white,
    elevation: 5,
    borderRadius: 10,
    paddingHorizontal: wp(4),
    marginVertical: hp(0.5),
  },
  textInputStyles: {
    width: wp(30),
    fontSize: hp(1.2),
    height: hp(15),
    color: colors.black,
    fontFamily: 'Poppins-Regular',
  },
});
