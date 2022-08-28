import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
// import StarRating from 'react-native-star-rating';
import Button from '../../Components/Button';
import HeaderComponent from '../../Components/HeaderComponent';
import {colors} from '../../Utils/Colors';
import {hp, wp} from '../../Utils/Responsive';
import {Rating} from 'react-native-ratings';
import CustomTextInput from '../../Components/CustomTextInput';

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
  const [review, setReview] = useState('');
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
          <View style={{width: wp(70)}}>
            <Text style={{fontFamily: 'Poppins-Bold', color: colors.primary}}>
              Rate & Review
            </Text>
            <Rating
              ratingCount={5}
              imageSize={hp(3)}
              onFinishRating={null}
              ratingColor={colors.primary}
              type="custom"
              style={{alignSelf: 'flex-start', marginVertical: hp(1)}}
            />
            <CustomTextInput
              mainView={styles.mainInputView}
              textInputStyles={styles.textInputStyles}
              value={review}
              onChangeText={text => setPassword(text)}
              placeholder="Are You Satisfied With Our Service?"
              icon={false}
            />
            <Button
              isLoading={false}
              name={'Done'}
              textStyles={styles.textStyles}
              buttonStyles={styles.buttonStyles}
              onPress={() => null}
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

  //text iut
  mainInputView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: hp(15),
    width: wp(70),
    backgroundColor: colors.white,
    elevation: 5,
    borderRadius: 10,
    paddingHorizontal: wp(4),
    marginVertical: hp(0.5),
  },
  textInputStyles: {
    width: wp(60),
    height: hp(15),
    fontSize: hp(1.5),
    color: colors.grey,
    fontFamily: 'Poppins-Regular',
    textAlignVertical: 'top',
  },
  //bttn
  buttonStyles: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.primary,
    width: wp(20),
    height: hp(6),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginVertical: hp(1),
    elevation: 4,
    alignSelf: 'flex-end',
  },
  textStyles: {
    color: colors.white,
    fontFamily: 'Poppins-Bold',
    width: wp(20),
    textAlign: 'center',
    fontSize: hp(1.8),
  },
});
