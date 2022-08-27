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

export default function OrderDetails(props) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <HeaderComponent
            icon={require('../../Assets/arrowBack.png')}
            onPress={() => props.navigation.goBack()}
            name="ORDER DETAILS"
            search={true}
            value={''}
            onSearch={t => setSearch(t)}
          />
        </View>
        <View style={styles.mainView}>
          <View style={styles.headingView}>
            <Text style={styles.headingText}>AC Leakage</Text>
            <TouchableOpacity>
              <Image
                source={require('../../Assets/dummyicon.png')}
                style={{widt: 20, height: 20}}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.dateText}>{new Date().toISOString()}</Text>
          <Text style={styles.dateText}>Order Number : 6516516516</Text>
          <Text
            style={[
              styles.dateText,
              {fontFamily: 'Poppins-Bold', marginTop: hp(2)},
            ]}>
            Address
          </Text>
          <Text style={styles.dateText} numberOfLines={1}>
            Al Rehman Trade Center Punjab, Sargodha Pakistan
          </Text>
        </View>
        <View style={styles.bottomView}>
          <Text style={styles.bottomText}>Amount</Text>
          <Text style={styles.bottomText}>Rs.2000</Text>
        </View>
        <Button
          isLoading={false}
          name={'Track Order'}
          textStyles={styles.textStyles}
          buttonStyles={styles.buttonStyles}
          onPress={() => props.navigation.navigate('TrackOrder')}
        />
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
  mainView: {
    width: wp(90),
    elevation: 10,
    backgroundColor: colors.white,
    marginVertical: hp(2),
    borderRadius: 20,
    paddingVertical: hp(1),
    paddingHorizontal: wp(5),
    alignSelf: 'center',
    alignItems: 'center',
  },
  headingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(80),
    marginVertical: hp(2),
  },
  headingText: {
    fontFamily: 'Poppins-Bold',
    color: colors.primary,
  },
  dateText: {
    fontFamily: 'Poppins-Regular',
    color: colors.black,
    width: wp(80),
  },
  bottomView: {
    flexDirection: 'row',
    width: wp(90),
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: colors.white,
    elevation: 10,
    padding: hp(2),
    marginVertical: hp(1),
    borderRadius: 10,
    borderColor: colors.primary,
    borderWidth: 1,
  },
  bottomText: {fontFamily: 'Poppins-Bold', color: colors.black},
  buttonStyles: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.primary,
    width: wp(30),
    height: hp(5),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 4,
    alignSelf: 'flex-end',
    marginHorizontal: wp(5),
    marginVertical: hp(3),
  },
  textStyles: {
    color: colors.white,
    fontFamily: 'Poppins-Bold',
    width: wp(60),
    textAlign: 'center',
    fontSize: hp(1.8),
  },
});
