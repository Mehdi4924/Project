import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import Button from '../../Components/Button';
import HeaderComponent from '../../Components/HeaderComponent';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../Utils/Colors';
import {hp, wp} from '../../Utils/Responsive';
import StepIndicator from 'react-native-step-indicator';

export default function OrderDetails(props) {
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
  const arr = ['Arrived', 'Visit/Inspection', 'Work Started', 'Work Done'];
  const renderStepIndicator = x => (
    <Image
      source={require('../../Assets/dot.png')}
      style={{width: 100, height: 100}}
    />
  );

  const thirdIndicatorStyles = {
    stepIndicatorSize: 20,
    currentStepIndicatorSize: 20,
    separatorStrokeWidth: 3,
    currentStepStrokeWidth: 0,
    stepStrokeCurrentColor: colors.primary,
    stepStrokeWidth: 0,
    stepStrokeFinishedColor: colors.primary,
    stepStrokeUnFinishedColor: colors.grey,
    separatorFinishedColor: colors.primary,
    separatorUnFinishedColor: colors.grey,
    stepIndicatorFinishedColor: colors.primary,
    stepIndicatorUnFinishedColor: colors.grey,
    stepIndicatorCurrentColor: colors.primary,
    stepIndicatorLabelCurrentColor: 'transparent',
    stepIndicatorLabelFinishedColor: 'transparent',
    stepIndicatorLabelUnFinishedColor: 'transparent',
  };
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
          <View style={styles.mainView}>
            <View style={styles.subView1}>
              <StepIndicator
                currentPosition={0}
                labels={arr}
                stepCount={4}
                renderStepIndicator={x => {
                  return (
                    <Image
                      source={
                        x.position == 0
                          ? require('../../Assets/dot.png')
                          : require('../../Assets/dotUncheck.png')
                      }
                      style={{width: 20, height: 20}}
                      resizeMode="contain"
                    />
                  );
                }}
                customStyles={styles.indicatorStyles}
              />
            </View>
            <View style={styles.subView2}>
              <Text style={styles.subViewText}>Rafia Umar</Text>
              <Text style={styles.subViewText}>Rs.750</Text>
            </View>
            <View style={styles.mapSubView}>
              <Text style={styles.locationText}>Customer Location</Text>
              <Text style={styles.locationText}>
                341 Street 73 G 11/2 G 11 Islamabad Capital Territory, G11,
                Islamabad.
              </Text>
            </View>
            <View style={styles.doubleBtnViews}>
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
          <Text style={styles.detailsText}>Details</Text>
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
      <View
        style={{
          width: wp(100),
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Button
          isLoading={false}
          name={'Work Is Done'}
          textStyles={styles.textStyles3}
          buttonStyles={styles.buttonStyles3}
          onPress={() => props.navigation.navigate('OrderDetails')}
        />
        <Button
          isLoading={false}
          name={'Need Repair'}
          textStyles={styles.textStyles3}
          buttonStyles={[
            styles.buttonStyles3,
            {
              backgroundColor: '#1492E6',
            },
          ]}
          onPress={() => props.navigation.navigate('OrderDetails')}
        />
      </View>
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
  mainView: {
    width: wp(90),
    backgroundColor: colors.lightGray,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.primary,
    elevation: 5,
    alignItems: 'center',
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
  subView1: {
    borderBottomWidth: 1,
    width: wp(80),
    borderBottomColor: colors.grey,
    marginVertical: hp(2),
  },
  indicatorStyles: {
    labelFontFamily: 'Poppins-Regular',
    labelSize: hp(1.5),
    stepIndicatorSize: 20,
    currentStepIndicatorSize: 20,
  },
  subView2: {
    width: wp(80),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
    paddingVertical: hp(1),
  },
  subViewText: {
    fontFamily: 'Poppins-Bold',
    color: colors.primary,
    fontSize: hp(2),
  },
  doubleBtnViews: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  locationText: {
    color: colors.black,
    paddingTop: hp(1),
    fontFamily: 'Poppins-Regular',
    fontSize: hp(2),
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
  bottomView: {
    width: wp(90),
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  buttonStyles3: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.primary,
    width: wp(49.5),
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
    width: wp(30),
    textAlign: 'center',
    fontSize: hp(2),
  },
});
