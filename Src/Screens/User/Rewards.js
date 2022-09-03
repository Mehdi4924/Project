import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../Utils/Colors';
import HeaderComponent from '../../Components/HeaderComponent';
import {hp, wp} from '../../Utils/Responsive';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function Rewards(props) {
  return (
    <View style={styles.container}>
      <HeaderComponent
        icon={require('../../Assets/arrowBack.png')}
        onPress={() => props.navigation.goBack()}
        name="ADDRESS"
        search={true}
      />
      <View style={styles.pointsView}>
        <View style={styles.pointsInnerView}>
          <Text style={styles.pointsText}>Available Points</Text>
          <View style={styles.lineBarContainer}>
            <View style={styles.lineBar}></View>
            <View style={styles.lineBar}></View>
            <View style={styles.lineBar}></View>
            <View style={styles.lineBar}></View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginRight: wp(3),
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: colors.white,
                fontFamily: 'Poppins-Bold',
                marginRight: wp(1),
                fontSize: hp(3),
              }}>
              0
            </Text>
            <Text style={{color: colors.white, fontFamily: 'Poppins-Bold'}}>
              Points
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.convertView}>
        <Text style={{color: colors.white, fontFamily: 'Poppins-Medium'}}>
          Convert
        </Text>
        <Icon
          name="exchange-alt"
          size={20}
          color="white"
          style={{marginLeft: wp(2)}}
        />
      </TouchableOpacity>
      <View style={styles.discountView}>
        <Text
          style={{
            color: colors.primary,
            fontFamily: 'Poppins-Bold',
            fontSize: hp(2.2),
          }}>
          Discount / Offers
        </Text>
      </View>
      <View style={styles.offersContainer}>
        <View style={{marginTop: hp(2), alignItems: 'center'}}>
          <View style={styles.offersView}>
          <Image source={require('../../Assets/dummy.png')}
            style={{width:wp(14), height:hp(7)}}
            />
          </View>
          <Text style={styles.offerText}>Azadi Offer</Text>
        </View>
        <View style={{marginTop: hp(2), alignItems: 'center'}}>
          <View style={styles.offersView}>
          <Image source={require('../../Assets/dummy.png')}
            style={{width:wp(14), height:hp(7)}}
            />
          </View>
          <Text style={styles.offerText}>Azadi Offer</Text>
        </View>
        <View style={{marginTop: hp(2), alignItems: 'center'}}>
          <View style={styles.offersView}>
            <Image source={require('../../Assets/dummy.png')}
            style={{width:wp(14), height:hp(7)}}
            />
          </View>
          <Text style={styles.offerText}>Azadi Offer</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
  },
  pointsView: {
    height: hp(20),
    width: wp(80),
    backgroundColor: '#B3D5C2',
    marginTop: hp(5),
    borderRadius: 18,
    justifyContent: 'flex-end',
  },
  pointsInnerView: {
    height: hp(18),
    width: wp(74),
    backgroundColor: '#76C987',
    borderBottomLeftRadius: 18,
    borderTopRightRadius: 60,
    justifyContent: 'space-evenly',
  },
  pointsText: {
    color: colors.white,
    marginTop: hp(1),
    marginLeft: wp(8),
    fontFamily: 'Poppins-Bold',
    fontSize: hp(1.9),
  },
  lineBar: {
    width: wp(12),
    height: hp(1),
    backgroundColor: '#B3D5C2',
    borderRadius: 6,
  },
  lineBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: hp(1),
  },
  convertView: {
    backgroundColor: colors.primary,
    width: wp(38),
    height: hp(5.5),
    borderRadius: 15,
    marginTop: hp(4),
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginRight: wp(12),
  },
  discountView: {
    backgroundColor: '#B3D5C2',
    width: wp(42),
    height: hp(5.5),
    borderRadius: 15,
    marginTop: hp(4),
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: wp(10),
  },
  offersView: {
    width: wp(24),
    height: hp(10),
    backgroundColor: colors.white,
    elevation: 5,
    borderRadius: 5,
    alignItems:'center',
    justifyContent:'center'
  },
  offerText: {
    marginTop: hp(1),
    color: colors.primary,
    fontFamily: 'Poppins-Medium',
    fontSize: hp(1.7),
  },
  offersContainer:{
    width:wp(80),
    flexDirection:'row',
    justifyContent:'space-between'
  }
});
