import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import HeaderComponent from '../../Components/HeaderComponent';
import {colors} from '../../Utils/Colors';
import {hp, wp} from '../../Utils/Responsive';
const data = [
  {
    image: require('../../Assets/ac.png'),
    rating: 2.2,
    orders: 500,
  },
  {
    image: require('../../Assets/ac.png'),
    rating: 3.4,
    orders: 13214321,
  },
  {
    image: require('../../Assets/ac.png'),
    rating: 5,
    orders: 5,
  },
  {
    image: require('../../Assets/ac.png'),
    rating: 4.5,
    orders: 23421,
  },
];
export default function AllServices(props) {
  const [search, setSearch] = useState('');
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <HeaderComponent
            icon={require('../../Assets/user.png')}
            onPress={() => props.navigation.goBack()}
            name="SERVICES"
            value={search}
            onSearch={t => setSearch(t)}
          />
          <Text style={styles.primaryText}>All Services</Text>
          <FlatList
            data={data}
            contentContainerStyle={styles.listContainer}
            numColumns={3}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity style={styles.listItem} onPress={() => null}>
                  <Image
                    source={require('../../Assets/ac.png')}
                    style={{widht: 40, height: 40}}
                    resizeMode="contain"
                  />
                  <View style={styles.listBottomView}>
                    <View style={styles.ratingView}>
                      <Text style={styles.itemText}>Ratings</Text>
                      <Text style={styles.itemText}>
                        {item.rating}
                        <Text style={{color: '#FFC057'}}>{'\u2605'}</Text>
                      </Text>
                    </View>
                    <View style={styles.seperator} />
                    <View style={styles.ratingView}>
                      <Text style={styles.itemText}>Orders</Text>
                      <Text style={styles.itemText}>{item.orders}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  primaryText: {
    width: wp(90),
    alignSelf: 'center',
    marginVertical: hp(2),
    fontFamily: 'Poppins-Bold',
    fontSize: hp(2),
    color: colors.primary,
  },
  //flatlist styes
  itemText: {
    fontFamily: 'Poppins-Regular',
    fontSize: hp(1.5),
  },
  listContainer: {
    paddingVertical: hp(2),
    paddingHorizontal: wp(2),
    width: wp(100),
  },
  listItem: {
    backgroundColor: colors.white,
    elevation: 5,
    width: wp(30),
    height: hp(18),
    marginHorizontal: wp(1),
    borderRadius: 20,
    paddingVertical: hp(1),
    marginVertical: hp(1),
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  listBottomView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(25),
  },
  ratingView: {
    alignItems: 'center',
    width: wp(12),
    justifyContent: 'center',
  },
  seperator: {
    borderRightWidth: 1,
    borderRightColor: colors.grey,
  },
});
