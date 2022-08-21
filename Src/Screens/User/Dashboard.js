import React, {useEffect, useState} from 'react';
import {
  Image,
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import Button from '../../Components/Button';
import CustomTextInput from '../../Components/CustomTextInput';
import OffersFlatlist from '../../Components/OffersFlatlist';
import RecommendedFlatList from '../../Components/RecommendedFlatList';
import {colors} from '../../Utils/Colors';
import {hp, wp} from '../../Utils/Responsive';
const dat = [
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
export default function Dashboard(props) {
  const [search, setSearch] = useState('');
  return (
    <View style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.iconVIew}>
              <TouchableOpacity>
                <Image
                  source={require('../../Assets/user.png')}
                  style={{width: 50, height: 50}}
                />
              </TouchableOpacity>
              <View style={styles.notificationIconView}>
                <TouchableOpacity>
                  <Image
                    source={require('../../Assets/user.png')}
                    style={{width: 50, height: 50}}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={require('../../Assets/user.png')}
                    style={{width: 50, height: 50}}
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
              data={dat}
              contentContainerStyle={{
                paddingHorizontal: wp(5),
                marginVertical: hp(1),
                height: hp(15),
              }}
              parentView={styles.parentView}
              ImageView={styles.ImageView}
              imageStyles={{width: wp(20), height: hp(10)}}
              textView={styles.textView}
            />
          </View>
          {/* <ServicesFlatList /> */}
          <View style={styles.servicesBackground}>
            <Text style={styles.servicesText}>Services</Text>
            <Text style={styles.viewAll}>View All</Text>
          </View>
          <View style={{height: hp(15)}}>
            <OffersFlatlist
              data={dat}
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
              imageStyles={{width: 50, height: 50}}
              textView={styles.textView1}
            />
          </View>
          <View style={styles.servicesBackground}>
            <Text style={styles.servicesText}>Recommended</Text>
            <Text style={styles.viewAll}>View All</Text>
          </View>
          <RecommendedFlatList data={data2} />
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
    paddingHorizontal: wp(5),
    width: wp(100),
  },
  notificationIconView: {
    flexDirection: 'row',
    width: wp(30),
    justifyContent: 'space-between',
  },
  welcomeText: {
    color: colors.white,
    width: wp(75),
    paddingTop: hp(1),
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: hp(3),
  },
  nameText: {
    color: colors.white,
    width: wp(75),
    alignSelf: 'center',
    fontSize: hp(2.2),
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
    fontWeight: 'bold',
    fontSize: hp(2),
    color: colors.primary,
  },
  servicesText: {
    fontWeight: 'bold',
    fontSize: hp(2),
    color: colors.primary,
  },
  viewAll: {
    fontSize: hp(2),
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
    fontSize: hp(1.2),
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
});
