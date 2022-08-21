import React, {useEffect} from 'react';
import {Image, View, StyleSheet, Text} from 'react-native';

export default function OnBoarding(props) {
  useEffect(() => {
    //this runs first
  });

  return (
    <View style={styles.container}>
      <Text
        style={{fontFamily: 'Poppins-Regular'}}
        onPress={() => props.navigation.navigate('SelectRole')}>
        OnBoarding{' '}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
