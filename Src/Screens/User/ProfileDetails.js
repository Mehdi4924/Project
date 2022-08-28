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
export default function ProfileDetails(props) {
  const [code, setCode] = useState('');
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <HeaderComponent
            icon={require('../../Assets/arrowBack.png')}
            onPress={() => props.navigation.goBack()}
            name="ACCOUNT"
            search={true}
          />
          <Image
            source={require('../../Assets/user.png')}
            style={styles.image}
          />
          <Text style={{fontFamily: 'Poppins-Bold', color: colors.primary}}>
            Faisal
          </Text>
          <View style={{marginVertical: hp(2)}}>
            <View style={styles.parentView}>
              <View>
                <Text style={styles.tagName}>Name</Text>
                <Text style={styles.tagProperty}>Faisal</Text>
              </View>
              <Icon
                name="chevron-right"
                type="font-awesome-5"
                color={colors.black}
                size={hp(2)}
              />
            </View>
            <View style={styles.seperator} />
            <View style={styles.parentView}>
              <View>
                <Text style={styles.tagName}>Gender</Text>
                <Text style={styles.tagProperty}>Male</Text>
              </View>
              <Icon
                name="chevron-right"
                type="font-awesome-5"
                color={colors.black}
                size={hp(2)}
              />
            </View>
            <View style={styles.seperator} />
            <View style={styles.parentView}>
              <View>
                <Text style={styles.tagName}>Phone Number</Text>
                <Text style={styles.tagProperty}>+92 xxxxxxxx</Text>
              </View>
            </View>
            <View style={styles.seperator} />
            <View style={styles.parentView}>
              <View>
                <Text style={styles.tagName}>Email</Text>
                <Text style={styles.tagProperty}>xxxxx@xxxxx.xxxxx</Text>
              </View>
              <Icon
                name="chevron-right"
                type="font-awesome-5"
                color={colors.black}
                size={hp(2)}
              />
            </View>
            <View style={styles.seperator} />
            <View style={styles.parentView}>
              <View>
                <Text style={styles.tagName}>Password</Text>
                <Text style={styles.tagProperty}>***************</Text>
              </View>
              <Icon
                name="chevron-right"
                type="font-awesome-5"
                color={colors.black}
                size={hp(2)}
              />
            </View>
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
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: hp(2),
    borderWidth: 1,
    borderColor: colors.primary,
  },
  parentView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp(80),
    paddingHorizontal: wp(5),
  },
  tagName: {fontFamily: 'Poppins-Bold', color: colors.black},
  tagProperty: {fontFamily: 'Poppins-Regular', color: colors.black},
  seperator: {
    height: 1,
    width: wp(70),
    backgroundColor: colors.grey,
    alignSelf: 'center',
    marginVertical: hp(1),
  },
});
