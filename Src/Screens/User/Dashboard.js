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
          <View>
            <OffersFlatlist data={dat} />
          </View>
          <View style={{height: hp(20),backgroundColor:'red'}}>
            <Text style={styles.servicesText}>Services</Text>
          </View>
          {/* <ServicesFlatList /> */}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: hp(100),
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
  //Input Styles
  mainView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: hp(5),
    width: wp(80),
    backgroundColor: colors.secondary,
    elevation: 5,
    borderRadius: 20,
    paddingHorizontal: wp(4),
    marginVertical: hp(2),
  },
  textInputStyles: {
    width: wp(60),
    fontSize: hp(1.2),
    color: colors.black,
  },
});
