import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import HeaderComponent from '../../Components/HeaderComponent';
import RecommendedFlatList from '../../Components/RecommendedFlatList';
import {colors} from '../../Utils/Colors';
import {hp, wp} from '../../Utils/Responsive';
const data2 = [
  {
    image: require('../../Assets/dummyicon.png'),
    name: 'AC Leakage',
    provider: 'Service Provider',
    rating: 4.2,
    previousAmount: 2000,
    discountAmoount: 1500,
  },
  {
    image: require('../../Assets/dummyicon.png'),
    name: 'AC Repair',
    provider: 'Service Provider',
    rating: 3.2,
    previousAmount: 2000,
    discountAmoount: 1500,
  },
  {
    image: require('../../Assets/dummyicon.png'),
    name: 'AC Instsallation',
    provider: 'Service Provider',
    rating: 2.2,
    previousAmount: 2000,
    discountAmoount: 1500,
  },
];
export default function Recommended(props) {
  const [search, setSearch] = useState('');
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <HeaderComponent
            icon={require('../../Assets/user.png')}
            onPress={() => props.navigation.goBack()}
            name="BOOKING SERVICE"
            value={search}
            onSearch={t => setSearch(t)}
          />
        </View>
        <View style={styles.servicesBackground}>
          <Text style={styles.servicesText}>ALL AC SERVICES</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <RecommendedFlatList
            data={data2}
            itemContainer={styles.itemContainer}
            listImageView={styles.listImageView}
            serviceNameText={styles.serviceNameText}
            priceView={styles.priceView}
            bookNowView={styles.bookNowView}
            mainImageView={styles.mainImageView}
            bookNowText={styles.bookNowText}
            providerText={styles.providerText}
            onBookNowPress={() => props.navigation.navigate('BookService')}
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
    height: hp(20),
    backgroundColor: colors.primary,
    width: wp(100),
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    elevation: 5,
    paddingVertical: hp(2),
    alignItems: 'center',
  },
  headerMainView: {
    flexDirection: 'row',
    width: wp(90),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    color: colors.white,
    width: wp(85),
    textAlign: 'center',
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
  servicesText: {
    fontFamily: 'Poppins-Bold',
    fontSize: hp(2),
    color: colors.primary,
  },
  //input styles
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
    marginVertical: hp(4),
  },
  textInputStyles: {
    width: wp(60),
    fontSize: hp(2),
    color: colors.black,
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
    fontFamily: 'Poppins-Regular',
    fontSize: hp(1.8),
    color: 'colors.black',
  },
});
