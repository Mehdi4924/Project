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
      horizontal={true}
      contentContainerStyle={{
        paddingHorizontal: wp(5),
        marginVertical: hp(1),
      }}
      keyExtractor={({item, index}) => index}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity style={styles.parentView}>
            <View style={styles.ImageView}>
              <Image
                source={item.image}
                style={{width: wp(20), height: hp(10)}}
                resizeMode="contain"
              />
            </View>
            <View style={styles.textView}>
              <Text
                numberOfLines={1}
                style={{
                  color: colors.primary,
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

const styles = StyleSheet.create({
  parentView: {
    alignItems: 'center',
    marginHorizontal: wp(1),
  },
  ImageView: {
    width: wp(25),
    alignItems: 'center',
    backgroundColor: colors.white,
    elevation: 5,
    height: hp(10),
    borderRadius: 10,
  },
  textView: {
    width: wp(25),
    alignItems: 'center',
    paddingVertical: hp(0.5),
  },
});
