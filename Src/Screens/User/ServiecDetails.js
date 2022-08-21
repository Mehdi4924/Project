import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import CustomTextInput from '../../Components/CustomTextInput';
import {colors} from '../../Utils/Colors';
import {hp, wp} from '../../Utils/Responsive';
import OffersFlatlist from '../../Components/OffersFlatlist';
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
export default function ServiceDetails() {
  const [search, setSearch] = useState('');

  return (
    <View style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerMainView}>
              <Image
                source={require('../../Assets/user.png')}
                style={{width: 30, height: 30}}
              />
              <Text style={styles.headerText}>AC SERVICES</Text>
            </View>
            <CustomTextInput
              mainView={styles.mainView}
              textInputStyles={styles.textInputStyles}
              value={search}
              onChangeText={text => setSearch(text)}
              placeholder="Home"
              icon={true}
            />
          </View>
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
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
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
    fontSize: hp(1.5),
    color: colors.black,
  },
});
