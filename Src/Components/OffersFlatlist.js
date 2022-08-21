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
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      contentContainerStyle={props.contentContainerStyle}
      keyExtractor={({item, index}) => index}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity
            style={props.parentView}
            onPress={() => props.onContainerPress()}>
            <View style={props.ImageView}>
              <Image
                source={item.image}
                style={props.imageStyles}
                resizeMode="contain"
              />
            </View>
            <View style={props.textView}>
              <Text
                numberOfLines={1}
                style={{
                  color: colors.primary,
                  fontFamily: 'Poppins-Regular',
                  fontSize: hp(1.6),
                }}>
                {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
}
