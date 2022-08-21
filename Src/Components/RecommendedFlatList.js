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
          <View style={props.itemContainer}>
            <TouchableOpacity
              style={props.bookNowView}
              onPress={() => props.onBookNowPress(item)}>
              <Text style={props.bookNowText}>BOOK NOW</Text>
            </TouchableOpacity>
            <View style={props.mainImageView}>
              <View style={props.listImageView}>
                <Image
                  source={item.image}
                  style={{width: wp(30), height: hp(12)}}
                  resizeMode="contain"
                />
              </View>
              <View style={{width: wp(51), justifyContent: 'center'}}>
                <Text style={props.serviceNameText}>AC Leakage</Text>
                <Text>Service Provider</Text>
                <View style={props.ratingView}>
                  <Text style={{color: colors.primary, fontWeight: 'bold'}}>
                    4.3
                  </Text>
                  <Text>4.3</Text>
                </View>
                <View style={props.priceView}>
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
