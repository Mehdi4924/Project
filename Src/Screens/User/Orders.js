import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomTextInput from '../../Components/CustomTextInput';
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
          <FlatList
            data={
              topTab == 'Active'
                ? flatData.filter(item => item.status == 'Recieved')
                : topTab == 'Previous'
                ? flatData.filter(item => item.status == 'Previous')
                : flatData.filter(item => item.status == 'Scheduled')
            }
            contentContainerStyle={{
              marginVertical: hp(5),
              width: wp(100),
              alignItems: 'center',
            }}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={styles.listPrimaryView}
                  onPress={() => props.navigation.navigate('OrderDetails')}>
                  <View style={styles.listIconView}>
                    <Image
                      style={{width: 80, height: 20}}
                      source={require('../../Assets/ac.png')}
                    />
                    <Text style={styles.listIconText}>{item.name}</Text>
                  </View>
                  <View style={styles.subTextView}>
                    <Text style={styles.listStaticTxt}>Scheduled</Text>
                    <Text style={styles.listTextValues} numberOfLines={1}>
                      {item.scheduled.toISOString()}
                    </Text>
                  </View>
                  <View style={styles.subTextView}>
                    <Text style={styles.listStaticTxt}>Status</Text>
                    <Text style={styles.listTextValues} numberOfLines={1}>
                      {item.status}
                    </Text>
                  </View>
                  <View style={styles.subTextView}>
                    <Text style={styles.listStaticTxt} numberOfLines={1}>
                      Order Number
                    </Text>
                    <Text style={styles.listTextValues}>
                      {item.OrderNumber}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ScrollView>
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
    top: hp(7),
  },
  topText: {
    fontSize: hp(2),
    color: colors.white,
    fontFamily: 'Poppins-Bold',
  },
  selectedTab: {borderBottomWidth: 2, borderBottomColor: colors.white},
  tabsView: {
    flex: 1,
    flexDirection: 'row',
    width: wp(80),
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  listPrimaryView: {
    height: hp(20),
    width: wp(90),
    elevation: 10,
    backgroundColor: colors.white,
    marginVertical: hp(1),
    borderRadius: 20,
    paddingVertical: hp(1),
    paddingHorizontal: wp(5),
    borderColor: colors.primary,
    borderWidth: 1,
  },
  listIconView: {
    flexDirection: 'row',
    paddingVertical: hp(2),
    width: wp(90),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listIconText: {
    width: wp(65),
    fontFamily: 'Poppins-Bold',
    color: colors.primary,
  },
  subTextView: {
    flexDirection: 'row',
    width: wp(80),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listStaticTxt: {
    width: wp(30),
    fontFamily: 'Poppins-Regular',
    fontSize: hp(1.8),
    color: colors.black,
  },
  listTextValues: {
    width: wp(40),
    fontFamily: 'Poppins-Regular',
    color: colors.black,
    textAlign: 'right',
    fontSize: hp(1.8),
  },
});
