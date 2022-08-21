import React, { useState } from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import HeaderComponent from '../../Components/HeaderComponent';
import {colors} from '../../Utils/Colors';
import {hp, wp} from '../../Utils/Responsive';

export default function AllServices(props) {
  const [search, setSearch] = useState('');
  return (
    <View style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderComponent
          icon={require('../../Assets/user.png')}
          onPress={() => props.navigation.goBack()}
          name="SERVICES"
          value={search}
          onSearch={t => setSearch(t)}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
  },
});
