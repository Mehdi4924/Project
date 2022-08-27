import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import HeaderComponent from '../../Components/HeaderComponent';
import {colors} from '../../Utils/Colors';
import {hp, wp} from '../../Utils/Responsive';

export default function BookService(props) {
  const [search, setSearch] = useState('');
  return (
    <View style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <HeaderComponent
          icon={require('../../Assets/arrowBack.png')}
            onPress={() => props.navigation.goBack()}
            name="BOOKING SERVICE"
            value={search}
            onSearch={t => setSearch(t)}
          />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
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
});
