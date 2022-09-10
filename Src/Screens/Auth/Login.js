import React, {useEffect, useState} from 'react';
import {
  Image,
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Button from '../../Components/Button';
import CustomTextInput from '../../Components/CustomTextInput';
import {colors} from '../../Utils/Colors';
import {hp, wp} from '../../Utils/Responsive';
import { GoogleSignin, statusCodes, } from '@react-native-google-signin/google-signin';
import { LoginManager, Profile, AccessToken } from "react-native-fbsdk-next";

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pic, setPic] = useState('');
//   useEffect(() => {
//     GoogleSignin.configure()
//     //this runs first
//   },[]);
 
//   const fbLogin = () => {
//     LoginManager.logOut();
//     LoginManager.logInWithPermissions(["public_profile","email"]).then(
//       function(result) {
//         if (result.isCancelled) {
//           console.log("Login cancelled");
//         } else {
//            AccessToken.getCurrentAccessToken().then((token) => {
//             fetch(`https://graph.facebook.com/me?fields=email,name,friends,picture.type(large)&access_token=${token.accessToken}`)
//             .then((res) => res.json())
//             .then((json) => {
//               console.log(json)
//             })
//             .catch((error) => {
// console.log(error)
//             })
//            })
//           }
//           },
//       function(error) {
//         console.log("Login fail with error: " + error);
//       }
//     );
//   }

 

//   const googleLogin = async () => {
//     try {
//       await GoogleSignin.hasPlayServices();
//       const userInfo = await GoogleSignin.signIn();
//       console.log('user Info', userInfo);
//     } catch (error) {
//       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//        console.log(error);
//       } else if (error.code === statusCodes.IN_PROGRESS) {
//        console.log(error);
//         // operation (e.g. sign in) is in progress already
//       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//        console.log(error);
//         // play services not available or outdated
//       } else {
//        console.log(error);
//         // some other error happened
//       }
//     }
//   };


  return (
    <View style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image
            source={require('../../Assets/Logo.png')}
            style={styles.topImage}
            resizeMode="contain"
          />
          <View>
            <Text style={styles.loginText}>Login</Text>
            <CustomTextInput
              mainView={styles.mainView}
              textInputStyles={styles.textInputStyles}
              value={email}
              onChangeText={text => setEmail(text)}
              placeholder="Contact/Email"
              icon={false}
            />
            <CustomTextInput
              mainView={styles.mainView}
              textInputStyles={styles.textInputStyles}
              value={password}
              onChangeText={text => setPassword(text)}
              placeholder="Password"
              icon={false}
            />
            <Button
              isLoading={false}
              name={'Login'}
              textStyles={styles.textStyles}
              buttonStyles={[styles.buttonStyles, {marginVertical: hp(2)}]}
              onPress={() => props.navigation.replace('UserStack')}
            />
            
            <TouchableOpacity style={{width: wp(80), alignItems: 'flex-end'}}>
              <Text
                style={{color: colors.primary, fontFamily: 'Poppins-Regular'}}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Button
              isLoading={false}
              name={'Continue with google'}
              textStyles={[styles.textStyles, {color: colors.grey}]}
              buttonStyles={[
                styles.buttonStyles,
                {backgroundColor: colors.white, marginVertical: hp(1)},
              ]}
              onPress={() => null}
              // onPress={googleLogin}
              icon={true}
              imageSource={require('../../Assets/google.png')}
            />
            <Button
              isLoading={false}
              name={'Continue with facebook'}
              textStyles={[styles.textStyles, {color: colors.white}]}
              buttonStyles={[
                styles.buttonStyles,
                {backgroundColor: '#1976D2', marginVertical: hp(1)},
              ]}
              onPress={() => null}
              // onPress={fbLogin}
              icon={true}
              imageSource={require('../../Assets/fb.png')}
            />
          </View>
          <TouchableOpacity
            style={{width: wp(80), alignItems: 'center'}}
            onPress={() => props.navigation.navigate('Signup')}>
            <Text
              style={{color: colors.primary, fontFamily: 'Poppins-Regular'}}>
              Don't have account?
              <Text style={{color: colors.primary, fontFamily: 'Poppins-Bold'}}>
                Signup
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: hp(100),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: hp(2),
  },
  topImage: {height: hp(20), marginTop: hp(8)},
  loginText: {
    color: colors.primary,
    fontFamily: 'Poppins-Bold',
    fontSize: hp(4),
    marginVertical: hp(2),
    alignSelf: 'center',
  },
  mainView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: hp(7),
    width: wp(80),
    backgroundColor: colors.secondary,
    elevation: 5,
    borderRadius: 30,
    paddingHorizontal: wp(4),
    marginVertical: hp(0.5),
  },
  textInputStyles: {
    width: wp(60),
    fontSize: hp(1.2),
    color: colors.black,
    fontFamily: 'Poppins-Regular',
  },
  buttonStyles: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.primary,
    width: wp(80),
    height: hp(7),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginVertical: hp(1),
    elevation: 4,
  },
  textStyles: {
    color: colors.white,
    fontFamily: 'Poppins-Bold',
    width: wp(60),
    textAlign: 'center',
    fontSize: hp(1.8),
  },
});
