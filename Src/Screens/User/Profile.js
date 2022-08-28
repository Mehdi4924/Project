import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../../Components/Button';
import HeaderComponent from '../../Components/HeaderComponent';
import {colors} from '../../Utils/Colors';
import {hp, wp} from '../../Utils/Responsive';
import DatePicker from 'react-native-date-picker';
import {Rating} from 'react-native-ratings';
import {Icon} from '@rneui/themed';
import CustomTextInput from '../../Components/CustomTextInput';
export default function Profile(props) {
  const [code, setCode] = useState('');
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View
            style={{
              height: hp(27),
              alignItems: 'center',
            }}>
            <HeaderComponent
              icon={require('../../Assets/arrowBack.png')}
              onPress={() => props.navigation.goBack()}
              name="PROFILE"
              search={true}
            />
            <View style={styles.headerExtension} />
            <Image
              source={require('../../Assets/user.png')}
              resizeMode="cover"
              style={styles.profileImage}
            />
          </View>
          <Text style={{fontFamily: 'Poppins-Bold', color: colors.primary}}>
            Faisal
          </Text>
          <View style={styles.mainView}>
            <TouchableOpacity
              style={styles.subView}
              onPress={() => props.navigation.navigate('ProfileDetails')}>
              <View style={styles.iconStyles}>
                <Icon
                  name="user"
                  type="font-awesome"
                  color={colors.black}
                  size={hp(2)}
                />
                <Text style={styles.textStyles}>Account</Text>
              </View>
              <Icon
                name="chevron-right"
                type="font-awesome-5"
                color={colors.black}
                size={hp(2)}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.subView}>
              <View style={styles.iconStyles}>
                <Icon
                  name="info-circle"
                  type="font-awesome-5"
                  color={colors.black}
                  size={hp(2)}
                />
                <Text style={styles.textStyles}>About Us</Text>
              </View>
              <Icon
                name="chevron-right"
                type="font-awesome-5"
                color={colors.black}
                size={hp(2)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.subView}
              onPress={() => props.navigation.navigate('AddAddress')}>
              <View style={styles.iconStyles}>
                <Icon
                  name="location-pin"
                  type="Entypo"
                  color={colors.black}
                  size={hp(2)}
                />
                <Text style={styles.textStyles}>Address</Text>
              </View>
              <Icon
                name="chevron-right"
                type="font-awesome-5"
                color={colors.black}
                size={hp(2)}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.subView}>
              <View style={styles.iconStyles}>
                <Icon
                  name="medal"
                  type="font-awesome-5"
                  color={colors.black}
                  size={hp(2)}
                />
                <Text style={styles.textStyles}>Rewards</Text>
              </View>
              <Icon
                name="chevron-right"
                type="font-awesome-5"
                color={colors.black}
                size={hp(2)}
              />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.subView, {borderBottomWidth: 0}]}>
              <View style={styles.iconStyles}>
                <Icon
                  name="wallet"
                  type="entypo"
                  color={colors.black}
                  size={hp(2)}
                />
                <Text style={styles.textStyles}>My Wallet</Text>
              </View>
              <Icon
                name="chevron-right"
                type="font-awesome-5"
                color={colors.black}
                size={hp(2)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.mainView}>
            <TouchableOpacity style={styles.subView}>
              <View style={styles.iconStyles}>
                <Icon
                  name="chatbox-ellipses-outline"
                  type="ionicon"
                  color={colors.black}
                  size={hp(2)}
                />
                <Text style={styles.textStyles}>Invite Friends</Text>
              </View>
              <Icon
                name="chevron-right"
                type="font-awesome-5"
                color={colors.black}
                size={hp(2)}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.subView}>
              <View style={styles.iconStyles}>
                <Icon
                  name="text-document-inverted"
                  type="entypo"
                  color={colors.black}
                  size={hp(2)}
                />
                <Text style={styles.textStyles}>Terms and Conditions</Text>
              </View>
              <Icon
                name="chevron-right"
                type="font-awesome-5"
                color={colors.black}
                size={hp(2)}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.subView}>
              <View style={styles.iconStyles}>
                <Icon
                  name="lock"
                  type="Entypo"
                  color={colors.black}
                  size={hp(2)}
                />
                <Text style={styles.textStyles}>Privacy Policy</Text>
              </View>
              <Icon
                name="chevron-right"
                type="font-awesome-5"
                color={colors.black}
                size={hp(2)}
              />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.subView, {borderBottomWidth: 0}]}>
              <View style={styles.iconStyles}>
                <Icon
                  name="log-out"
                  type="entypo"
                  color={colors.black}
                  size={hp(2)}
                />
                <Text style={styles.textStyles}>Logout</Text>
              </View>
              <Icon
                name="chevron-right"
                type="font-awesome-5"
                color={colors.black}
                size={hp(2)}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
  },
  headerExtension: {
    width: wp(100),
    height: hp(10),
    position: 'absolute',
    backgroundColor: colors.primary,
    top: hp(10),
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  profileImage: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: hp(1),
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 90,
  },
  mainView: {
    width: wp(90),
    borderColor: colors.white,
    elevation: 5,
    borderRadius: 5,
    alignItems: 'center',
    paddingVertical: hp(1),
    marginVertical: hp(2),
  },
  subView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(80),
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
    paddingVertical: hp(1),
  },
  iconStyles: {
    width: wp(60),
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  textStyles: {
    fontFamily: 'Poppins-Regular',
    marginLeft: wp(2),
    fontSize: hp(2),
  },
});
