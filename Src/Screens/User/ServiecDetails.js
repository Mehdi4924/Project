import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import CustomTextInput from '../../Components/CustomTextInput';
import {colors} from '../../Utils/Colors';
import {hp, wp} from '../../Utils/Responsive';
import RecommendedFlatList from '../../Components/RecommendedFlatList';
import HeaderComponent from '../../Components/HeaderComponent';
const data2 = [
  {
    image: require('../../Assets/dummyicon.png'),
    name: 'Azadi Offfer',
  },
  {
    image: require('../../Assets/dummyicon.png'),
    name: 'Gift Voucher',
  },
  {
    image: require('../../Assets/dummyicon.png'),
    name: 'Sale',
  },
  {
    image: require('../../Assets/dummyicon.png'),
    name: 'Azadi Offfer',
  },
  {
    image: require('../../Assets/dummyicon.png'),
    name: 'Azadi Offfer',
  },
  {
    image: require('../../Assets/dummyicon.png'),
    name: 'Azadi Offfer',
  },
  {
    image: require('../../Assets/dummyicon.png'),
    name: 'Azadi Offfer',
  },
  {
    image: require('../../Assets/dummyicon.png'),
    name: 'Azadi Offfer',
  },
];
export default function ServiceDetails() {
  const [search, setSearch] = useState('');

  return (
    <View style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <HeaderComponent
            icon={require('../../Assets/user.png')}
            onPress={() => props.navigation.goBack()}
            name="All Services"
            value={search}
            onSearch={t => setSearch(t)}
          />
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
              onBookNowPress={() => props.navigation.navigate('BookService')}
            />
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
    fontWeight: 'bold',
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
  //flatlist styles
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
  bookNowText: {color: colors.white, fontSize: hp(1.5)},
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
    fontWeight: 'bold',
    color: colors.primary,
  },
  ratingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(30),
  },
  priceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(30),
  },
});
