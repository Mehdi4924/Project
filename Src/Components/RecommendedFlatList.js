import React, {useEffect, useState} from 'react';
import {
  Image,
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../Utils/Colors';
import {hp, wp} from '../Utils/Responsive';

export default function OffersFlatlist(props) {
  return (
    <FlatList
      data={props.data}
      renderItem={({item, index}) => {
        return (
          <View
            style={{
              width: wp(90),
              height: hp(20),
              backgroundColor: colors.primaryLight,
              padding: 20,
              borderRadius: 10,
              elevation: 5,
              marginVertical: hp(1),
            }}>
            <TouchableOpacity
              style={{
                position: 'absolute',
                bottom: hp(1),
                right: wp(2),
                backgroundColor: colors.primary,
                padding: 10,
                borderRadius: 20,
                elevation: 5,
              }}>
              <Text style={{color: colors.white, fontSize: hp(1.5)}}>
                BOOK NOW
              </Text>
            </TouchableOpacity>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View
                style={{
                  width: wp(30),
                  height: hp(15),
                  backgroundColor: colors.white,
                  borderRadius: 10,
                  elevation: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={item.image}
                  style={{width: wp(30), height: hp(12)}}
                  resizeMode="contain"
                />
              </View>
              <View style={{width: wp(45)}}>
                <Text
                  style={{
                    fontSize: hp(2),
                    fontWeight: 'bold',
                    color: colors.primary,
                  }}>
                  AC Leakage
                </Text>
                <Text>Service Provider</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: wp(30),
                  }}>
                  <Text style={{color: colors.primary, fontWeight: 'bold'}}>
                    4.3
                  </Text>
                  <Text>4.3</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: wp(30),
                  }}>
                  <Text style={{textDecorationLine: 'line-through'}}>
                    Rs-2950
                  </Text>
                  <Text style={{color: colors.primary}}>Rs-2000</Text>
                </View>
              </View>
            </View>
          </View>
        );
      }}
    />
  );
}
