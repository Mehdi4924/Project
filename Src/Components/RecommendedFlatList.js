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
                <Text style={props.serviceNameText}>{item.name}</Text>
                <Text style={props.providerText}>{item.provider}</Text>
                <View style={props.ratingView}>
                  <Text style={styles.ratingText}>{item.rating}</Text>
                  <Text style={styles.ratingText}>4.3</Text>
                </View>
                <View style={props.priceView}>
                  <Text style={styles.oldPrice}>{item.previousAmount}</Text>
                  <Text style={styles.priceText}>{item.discountAmoount}</Text>
                </View>
              </View>
            </View>
          </View>
        );
      }}
    />
  );
}
const styles = StyleSheet.create({
  ratingText: {
    color: colors.primary,
    fontSize: hp(2),
    fontFamily: 'Poppins-Regular',
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    fontSize: hp(1.7),
    fontFamily: 'Poppins-Regular',
    color: colors.black,
  },
  priceText: {
    color: colors.primary,
    fontSize: hp(1.7),
    fontFamily: 'Poppins-Regular',
  },
});
