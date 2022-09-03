import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../../Components/Button';
import {useNavigation} from '@react-navigation/native';
import HeaderComponent from '../../Components/HeaderComponent';
import {colors} from '../../Utils/Colors';
import {hp, wp} from '../../Utils/Responsive';
const flatData = [
  {
    icon: require('../../Assets/ac.png'),
    name: 'AC Leakage',
    scheduled: new Date(),
    status: 'Recieved',
    OrderNumber: 'Hm-1234-142143',
  },
  {
    icon: require('../../Assets/ac.png'),
    name: 'AC Installation',
    scheduled: new Date(),
    status: 'Recieved',
    OrderNumber: 'Hm-1234-1426543',
  },
  {
    icon: require('../../Assets/ac.png'),
    name: 'AC Leakage',
    scheduled: new Date(),
    status: 'Previous',
    OrderNumber: 'Hm-1234-1426543',
  },
  {
    icon: require('../../Assets/ac.png'),
    name: 'AC Installation',
    scheduled: new Date(),
    status: 'Scheduled',
    OrderNumber: 'Hm-1234-1426543',
  },
];
export default function Orders(props) {
  const [topTab, setTopTab] = useState('Active');
  const {getParent} = useNavigation();
  useEffect(() => {
    const parent = getParent();
    parent?.setOptions({
      tabBarStyle: {display: 'none'},
    });
    return () => {
      parent?.setOptions({
        tabBarStyle: {display: 'flex'},
      });
    };
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <HeaderComponent
            icon={require('../../Assets/arrowBack.png')}
            onPress={() => props.navigation.goBack()}
            name="MY ORDERS"
            search={true}
            value={''}
            onSearch={t => setSearch(t)}
          />
          <View style={styles.header}>
            <View style={styles.tabsView}>
              <TouchableOpacity
                onPress={() => setTopTab('Active')}
                style={topTab == 'Active' ? styles.selectedTab : null}>
                <Text style={styles.topText}>Active</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setTopTab('Previous')}
                style={topTab == 'Previous' ? styles.selectedTab : null}>
                <Text style={styles.topText}>Previous</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setTopTab('Schedule')}
                style={topTab == 'Schedule' ? styles.selectedTab : null}>
                <Text style={styles.topText}>Schedule</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginTop: hp(6)}}>
            <View style={styles.refreshView}>
              <Button
                isLoading={false}
                name={'Refresh'}
                textStyles={styles.textStyles}
                buttonStyles={styles.buttonStyles1}
                onPress={() => nul}
              />
              <TouchableOpacity>
                <Image
                  source={require('../../Assets/phone3.png')}
                  style={{width: 40, height: 40}}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.orderDetails}>
            <View style={styles.orderDetailsView}>
              <View>
                <Text style={styles.welcomeText}>Earnings</Text>
                <Text style={styles.orderQty}>Chair Cleaning x 3</Text>
              </View>
              <View>
                <Text style={styles.welcomeText}>Rs.750</Text>
              </View>
            </View>
            <Text style={styles.locationText}>Customer Location</Text>
            <Text style={styles.locationText}>
              341 Street 73 G 11/2 G 11 Islamabad Capital Territory, G11,
              Islamabad.
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Button
                isLoading={false}
                name={'Message'}
                textStyles={styles.textStyles1}
                buttonStyles={styles.buttonStyles}
                onPress={() => nul}
                icon={true}
                imageSource={require('../../Assets/message.png')}
              />
              <Button
                isLoading={false}
                name={'Call Customer'}
                textStyles={styles.textStyles1}
                buttonStyles={styles.buttonStyles}
                onPress={() => nul}
                icon={true}
                imageSource={require('../../Assets/Path3.png')}
              />
            </View>
          </View>
          <View style={styles.mapView}>
            <View style={styles.mapSubView}>
              <Text style={styles.locationText}>Customer Location</Text>
              <Text style={styles.locationText}>
                341 Street 73 G 11/2 G 11 Islamabad Capital Territory, G11,
                Islamabad.
              </Text>
            </View>
            <Image
              source={require('../../Assets/map.png')}
              style={{
                height: hp(30),
                width: wp(89),
              }}
            />
            <Button
              isLoading={false}
              name={'Get Direction'}
              textStyles={styles.textStyles2}
              buttonStyles={styles.buttonStyles2}
              onPress={() => null}
            />
          </View>
          <Text style={styles.detailsText}>Earnings</Text>
          <View style={styles.bottomView}>
            <Text style={styles.bottomText}>Order ID</Text>
            <Text style={styles.bottomText2}>HM-220811-00166</Text>
          </View>
          <View style={styles.bottomView}>
            <Text style={styles.bottomText}>Date & Time</Text>
            <Text style={styles.bottomText}>12:00pm, 12-Aug-2022</Text>
          </View>
          <View style={[styles.bottomView, {marginBottom: hp(2)}]}>
            <Text style={styles.bottomText}>Chair Cleaning</Text>
            <Text style={styles.bottomText}>3</Text>
          </View>
        </View>
      </ScrollView>
      <Button
        isLoading={false}
        name={'Arrived'}
        textStyles={styles.textStyles3}
        buttonStyles={styles.buttonStyles3}
        onPress={() => null}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  header: {
    backgroundColor: colors.primary,
    width: wp(100),
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingVertical: hp(2),
    alignItems: 'center',
    height: hp(8),
    position: 'absolute',
    top: hp(9),
  },
  topText: {
    fontSize: hp(2),
    color: colors.white,
    fontFamily: 'Poppins-Bold',
  },
  detailsText: {
    color: colors.primary,
    marginVertical: hp(1),
    fontFamily: 'Poppins-Bold',
    fontSize: hp(2),
    width: wp(90),
  },
  bottomText: {
    color: colors.black,
    fontFamily: 'Poppins-Regular',
    fontSize: hp(2),
  },
  bottomText2: {
    color: colors.white,
    fontFamily: 'Poppins-Regular',
    fontSize: hp(2),
    backgroundColor: colors.primary,
    paddingVertical: 1,
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  bottomView: {
    width: wp(90),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  selectedTab: {borderBottomWidth: 2, borderBottomColor: colors.white},
  tabsView: {
    flex: 1,
    flexDirection: 'row',
    width: wp(80),
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  refreshView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp(90),
  },
  mapView: {
    width: wp(90),
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 20,
  },
  mapSubView: {
    width: wp(89),
    height: hp(14),
    alignSelf: 'center',
    backgroundColor: colors.lightGray,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 10,
  },
  orderDetails: {
    width: wp(90),
    height: hp(32),
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
    width: wp(25),
    height: hp(4),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginVertical: hp(2),
    elevation: 4,
    alignSelf: 'flex-end',
    marginRight: wp(5),
  },
  buttonStyles: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.primary,
    width: wp(35),
    height: hp(6),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginVertical: hp(2),
    elevation: 4,
    alignSelf: 'flex-end',
    marginRight: wp(5),
  },
  textStyles1: {
    color: colors.white,
    fontFamily: 'Poppins-Bold',
    width: wp(25),
    textAlign: 'center',
    fontSize: hp(1.5),
  },
  buttonStyles2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.primary,
    width: wp(90),
    height: hp(6),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 4,
    borderBottomRightRadius: 18,
    borderBottomLeftRadius: 18,
  },
  textStyles2: {
    color: colors.white,
    fontFamily: 'Poppins-Bold',
    width: wp(25),
    textAlign: 'center',
    fontSize: hp(1.5),
  },
  buttonStyles3: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.primary,
    width: wp(100),
    height: hp(7),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  textStyles3: {
    color: colors.white,
    fontFamily: 'Poppins-Bold',
    width: wp(25),
    textAlign: 'center',
    fontSize: hp(2),
  },
});
