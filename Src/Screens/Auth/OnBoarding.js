import React, {useEffect} from 'react';
import {Image, View, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function OnBoarding(props) {
  useEffect(() => {
    //this runs first
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.navigation.navigate('SelectRole')}>
        <Text style={{fontFamily: 'Poppins-Regular'}}>OnBoarding </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
