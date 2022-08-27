import {color} from '@rneui/base';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Button from '../../Components/Button';
import HeaderComponent from '../../Components/HeaderComponent';
import {colors} from '../../Utils/Colors';
import {hp, wp} from '../../Utils/Responsive';
const steps = [
  {
    name: 'Order Recieved',
    image: require('../../Assets/dummyicon.png'),
    progress: false,
  },
  {
    name: 'Technician Assigned',
    image: require('../../Assets/dummyicon.png'),
    progress: false,
  },
  {
    name: 'Arrived',
    image: require('../../Assets/dummyicon.png'),
    progress: false,
  },
  {
    name: 'Inspection',
    image: require('../../Assets/dummyicon.png'),
    progress: true,
  },
  {
    name: 'Work Started',
    image: require('../../Assets/dummyicon.png'),
    progress: false,
  },
  {
    name: 'Work Ended',
    image: require('../../Assets/dummyicon.png'),
    progress: false,
  },
  {
    name: 'Rate & Review',
    image: require('../../Assets/dummyicon.png'),
    progress: false,
  },
];
export default function TrackOrder(props) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <HeaderComponent
            icon={require('../../Assets/arrowBack.png')}
            onPress={() => props.navigation.goBack()}
            name="TRACK ORDERS"
            search={true}
            value={''}
            onSearch={t => setSearch(t)}
          />
          <View style={styles.cardParentView}>
            <View style={styles.cardProfileView}>
              <Image
                source={require('../../Assets/user.png')}
                style={{width: 50, height: 50}}
                resizeMode="contain"
              />
              <Text style={styles.cardTextStyles}>Naseer Noor</Text>
              <Image
                source={require('../../Assets/dummyicon.png')}
                style={{width: 30, height: 30}}
                resizeMode="contain"
              />
            </View>
            <View
              style={[
                styles.cardProfileView,
                {
                  paddingVertical: hp(1),
                  borderBottomWidth: 1,
                },
              ]}>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <Text style={styles.cardSmallTextStyles}>5 {'\u272A'}</Text>
                <Text style={styles.cardSmallestTextStyles}>Rating</Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <Text style={styles.cardSmallTextStyles}>5 {'\u2611'}</Text>
                <Text style={styles.cardSmallestTextStyles}>Order Done</Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <Text style={styles.cardSmallTextStyles}>
                  a month {'\u23F0'}
                </Text>
                <Text style={styles.cardSmallestTextStyles}>Time Period</Text>
              </View>
            </View>
            <View style={[styles.cardProfileView, {width: wp(70)}]}>
              <View style={styles.iconViewStyles}>
                <Image
                  source={require('../../Assets/dummyicon.png')}
                  style={{width: 30, height: 30}}
                  resizeMode="contain"
                />
                <Text style={styles.iconTextStyles}>Message</Text>
              </View>
              <View style={[styles.iconViewStyles, {width: wp(30)}]}>
                <Image
                  source={require('../../Assets/dummyicon.png')}
                  style={{width: 30, height: 30}}
                  resizeMode="contain"
                />
                <Text style={styles.iconTextStyles}>Call To Vendor</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              marginTop: hp(5),
            }}>
            {steps.map((item, index) => {
              const indexOfTrue = steps.findIndex(item => item.progress);
              return (
                <View style={{justifyContent: 'center'}}>
                  <View style={styles.parentView}>
                    <View
                      style={[
                        styles.lineView,
                        {
                          backgroundColor:
                            index < indexOfTrue ? colors.primary : colors.grey,
                        },
                      ]}>
                      <View
                        style={[
                          styles.circleView,
                          {
                            backgroundColor:
                              index < indexOfTrue
                                ? colors.primary
                                : colors.grey,
                          },
                        ]}></View>
                    </View>
                    <Image
                      source={item.image}
                      style={{width: 30, height: 30}}
                      resizeMode="contain"
                    />
                    <Text style={styles.nameText}>{item.name}</Text>
                  </View>
                </View>
              );
            })}
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
  cardParentView: {
    width: wp(90),
    alignSelf: 'center',
    elevation: 10,
    backgroundColor: colors.white,
    marginVertical: hp(2),
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
    borderRadius: 10,
    borderColor: colors.primary,
    borderWidth: 1,
  },
  cardProfileView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: hp(0.5),
  },
  cardTextStyles: {
    fontFamily: 'Poppins-Bold',
    color: colors.primary,
    fontSize: hp(2),
    width: wp(50),
  },
  cardSmallTextStyles: {
    fontFamily: 'Poppins-Bold',
    color: colors.grey,
    fontSize: hp(1.8),
  },
  cardSmallestTextStyles: {
    fontFamily: 'Poppins-Regular',
    color: colors.black,
    fontSize: hp(1.5),
  },
  iconTextStyles: {
    fontFamily: 'Poppins-Bold',
    fontSize: hp(2),
    color: colors.primary,
  },
  iconViewStyles: {
    flexDirection: 'row',
    width: wp(20),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  //parent view
  parentView: {
    flexDirection: 'row',
    height: hp(7),
    width: wp(55),
    justifyContent: 'space-between',
  },
  lineView: {
    height: hp(6),
    width: wp(1),
    borderRadius: 20,
    flexDirection: 'column-reverse',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: hp(5),
  },
  circleView: {
    width: 12,
    height: 12,
    borderRadius: 10,
    alignSelf: 'flex-end',
    borderWidth: 0.8,
    borderColor: colors.white,
    position: 'absolute',
    bottom: hp(-0.5),
    right: -wp(1),
  },
  nameText: {
    fontFamily: 'Poppins-Bold',
    fontSize: hp(1.7),
    width: wp(38),
  },
});
