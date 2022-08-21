import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import HeaderComponent from '../../Components/HeaderComponent';
import {colors} from '../../Utils/Colors';
import {hp, wp} from '../../Utils/Responsive';
export default function Notifications() {
  const [search, setSearch] = useState('');
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <HeaderComponent
            icon={require('../../Assets/user.png')}
            onPress={() => props.navigation.goBack()}
            name="NOTIFICATIONS"
            value={search}
            search={true}
            onSearch={t => setSearch(t)}
          />
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <FlatList
            data={['ali', 'ali', 'ali']}
            contentContainerStyle={{marginVertical: hp(2)}}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity style={styles.listContainer}>
                  <View style={styles.listSubContainer}>
                    <View style={styles.imageContainer}>
                      <Image source={require('../../Assets/dummyicon.png')} />
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.listText}>sajfdk</Text>
                      <Text style={styles.listText}>sajfdk</Text>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={styles.timeText}>A day ago</Text>
                      </View>
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
  listContainer: {
    backgroundColor: colors.primaryLight,
    width: wp(90),
    marginVertical: hp(1),
    height: hp(15),
    borderRadius: 10,
    justifyContent: 'center',
  },
  listSubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
    alignItems: 'center',
  },
  imageContainer: {
    width: wp(20),
    height: hp(10),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  textContainer: {
    width: wp(55),
    height: hp(10),
    justifyContent: 'center',
    borderRadius: 10,
  },
  listText: {
    fontSize: hp(2),
    color: colors.white,
    fontFamily: 'Poppins-Regular',
  },
  timeText: {
    fontSize: hp(2),
    color: colors.black,
    fontFamily: 'Poppins-Regular',
  },
});
