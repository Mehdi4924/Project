import React, {useEffect, useState} from 'react';
import {
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CustomTextInput from '../../Components/CustomTextInput';
import OffersFlatlist from '../../Components/OffersFlatlist';
import RecommendedFlatList from '../../Components/RecommendedFlatList';
import {colors} from '../../Utils/Colors';
import {hp, wp} from '../../Utils/Responsive';
const discountList = [
  {
    image: require('../../Assets/azadi.png'),
    name: 'Azadi Offfer',
  },
  {
    image: require('../../Assets/voucher.png'),
    name: 'Gift Voucher',
  },
  {
    image: require('../../Assets/sale.png'),
    name: 'Sale',
  },
  {
    image: require('../../Assets/azadi.png'),
    name: 'Summer Collections',
  },
];
const servicesList = [
  {
    image: require('../../Assets/ac.png'),
    name: 'AC Service',
  },
  {
    image: require('../../Assets/clothing.png'),
    name: 'Cleaning',
  },
  {
    image: require('../../Assets/Plumber.png'),
    name: 'Plumber',
  },
  {
    image: require('../../Assets/electric.png'),
    name: 'Electrician',
  },
  {
    image: require('../../Assets/applicances.png'),
    name: 'Home Applicances',
  },
];
const RecommendedList = [
  {
    image: require('../../Assets/acservices.png'),
    name: 'AC Leakage',
    provider: 'Service Provider',
    rating: 4.2,
    previousAmount: 2000,
    discountAmoount: 1500,
  },
  {
    image: require('../../Assets/acservices.png'),
    name: 'AC Repair',
    provider: 'Service Provider',
    rating: 3.2,
    previousAmount: 2000,
    discountAmoount: 1500,
  },
  {
    image: require('../../Assets/acservices.png'),
    name: 'AC Instsallation',
    provider: 'Service Provider',
    rating: 2.2,
    previousAmount: 2000,
    discountAmoount: 1500,
  },
];

export default function Dashboard(props) {
  const [search, setSearch] = useState('');
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
              <View style={styles.notificationIconView}>
                <TouchableOpacity
                  onPress={() => null}
                  style={{justifyContent: 'center'}}>
                  <Image
                    source={require('../../Assets/phone.png')}
                    style={{width: 30, height: 30}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('Notifications')}
                  style={{justifyContent: 'center'}}>
                  <Image
                    source={require('../../Assets/bellIcon.png')}
                    style={{width: 30, height: 30}}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.welcomeText}>Welcome Back</Text>
            <Text style={styles.nameText}>Faisal!</Text>
            <CustomTextInput
              mainView={styles.mainView}
              textInputStyles={styles.textInputStyles}
              value={search}
              onChangeText={text => setSearch(text)}
              placeholder="What Services Do You Need"
              icon={true}
            />
          </View>
          <View style={styles.discountBackground}>
            <Text style={styles.discountText}>Discount/Offers</Text>
          </View>
          <View style={{height: hp(15)}}>
            <OffersFlatlist
              data={discountList}
              contentContainerStyle={{
                paddingHorizontal: wp(5),
                marginVertical: hp(1),
                height: hp(15),
              }}
              onContainerPress={() => null}
              parentView={styles.parentView}
              ImageView={styles.ImageView}
              imageStyles={{width: wp(20), height: hp(10)}}
              textView={styles.textView}
            />
          </View>
          {/* <ServicesFlatList /> */}
          <View style={styles.servicesBackground}>
            <Text style={styles.servicesText}>Services</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('AllServices')}>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={{height: hp(15)}}>
            <OffersFlatlist
              data={servicesList}
              contentContainerStyle={{
                paddingHorizontal: wp(5),
                marginVertical: hp(1),
                height: hp(15),
              }}
              onContainerPress={() =>
                props.navigation.navigate('ServiceDetails')
              }
              parentView={styles.parentView1}
              ImageView={styles.ImageView1}
              imageStyles={{width: 45, height: 45}}
              textView={styles.textView1}
            />
          </View>
          <View style={styles.servicesBackground}>
            <Text style={styles.servicesText}>Recommended</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Recommended')}>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>
          <RecommendedFlatList
            data={RecommendedList}
            itemContainer={styles.itemContainer}
            listImageView={styles.listImageView}
            serviceNameText={styles.serviceNameText}
            priceView={styles.priceView}
            bookNowView={styles.bookNowView}
            mainImageView={styles.mainImageView}
            bookNowText={styles.bookNowText}
            providerText={styles.providerText}
            ratingView={styles.ratingView}
            onBookNowPress={() =>
              props.navigation.navigate('BottomTabsOrders', {
                screen: 'BookService',
              })
            }
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
  },
  header: {
    height: hp(28),
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
  notificationIconView: {
    flexDirection: 'row',
    width: wp(20),
    justifyContent: 'space-between',
  },
  welcomeText: {
    color: colors.white,
    width: wp(75),
    paddingTop: hp(1),
    alignSelf: 'center',
    fontFamily: 'Poppins-Bold',
    fontSize: hp(2.5),
  },
  nameText: {
    color: colors.white,
    width: wp(75),
    alignSelf: 'center',
    fontSize: hp(2),
    fontFamily: 'Poppins-Regular',
  },
  discountBackground: {
    backgroundColor: colors.primaryLight,
    padding: 10,
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginVertical: hp(2),
    marginHorizontal: wp(5),
  },
  discountText: {
    fontFamily: 'Poppins-Bold',
    fontSize: hp(2),
    color: colors.primary,
  },
  servicesText: {
    fontFamily: 'Poppins-Bold',
    fontSize: hp(2),
    color: colors.primary,
  },
  viewAll: {
    fontSize: hp(1.8),
    fontFamily: 'Poppins-Regular',
    color: colors.primary,
  },
  servicesBackground: {
    backgroundColor: colors.white,
    alignSelf: 'flex-start',
    marginHorizontal: wp(5),
    marginVertical: hp(2),
    width: wp(90),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  //Input Styles
  mainView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: hp(7),
    width: wp(80),
    backgroundColor: colors.secondary,
    elevation: 5,
    borderRadius: 30,
    paddingHorizontal: wp(4),
    marginVertical: hp(1),
  },
  textInputStyles: {
    width: wp(60),
    fontFamily: 'Poppins-Regular',
    fontSize: hp(1.8),
    color: colors.black,
  },
  //flatlist styles
  parentView: {
    alignItems: 'center',
    marginHorizontal: wp(1),
  },
  ImageView: {
    width: wp(25),
    alignItems: 'center',
    backgroundColor: colors.white,
    elevation: 5,
    height: hp(10),
    borderRadius: 10,
  },
  textView: {
    width: wp(25),
    alignItems: 'center',
    paddingVertical: hp(1),
  },
  //flatlist styles 1
  parentView1: {
    alignItems: 'center',
  },
  ImageView1: {
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    elevation: 5,
    height: 60,
    borderRadius: 50,
  },
  textView1: {
    width: wp(25),
    alignItems: 'center',
    paddingVertical: hp(1),
  },
  //flatlist 2 styles
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
  bookNowView: {
    position: 'absolute',
    bottom: hp(1),
    right: wp(2),
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 20,
    elevation: 5,
  },
  bookNowText: {
    color: colors.white,
    fontSize: hp(1.5),
    fontFamily: 'Poppins-Regular',
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
    width: wp(25),
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
});
