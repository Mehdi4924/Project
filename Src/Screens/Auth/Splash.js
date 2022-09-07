import React, {useEffect} from 'react';
import {Image, View, StyleSheet} from 'react-native';

export default function Splash(props) {
  useEffect(() => {
    timeoutFunction();
  });

  function timeoutFunction() {
    setTimeout(() => {
      props.navigation.replace('SelectRole');
    }, 3000);
  }
  return (
    <View style={styles.container}>
      <Image
        source={require('../../Assets/Logo.png')}
        style={{widht: 200, height: 200}}
        resizeMode={'contain'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
