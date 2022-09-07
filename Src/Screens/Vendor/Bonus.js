import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import HeaderComponent from '../../Components/HeaderComponent';
import {hp, wp} from '../../Utils/Responsive';
import {colors} from '../../Utils/Colors';
import Button from '../../Components/Button';

export default function Bonus() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <HeaderComponent
            icon={require('../../Assets/arrowBack.png')}
            onPress={() => props.navigation.goBack()}
            name="BONUS"
            search={true}
          />
          <View style={styles.prevBounsAmountText}>
            <Text style={styles.prevBonusText}>Total Bonus Redemeed</Text>
            <Text style={styles.prevBonusText}>Rs.200</Text>
          </View>
          <View style={styles.bounsAmountText}>
            <Text style={styles.bonusText}>Bonus</Text>
            <Text style={styles.bonusText}>Rs.200</Text>
          </View>
          <Button
            isLoading={false}
            name={'Redeem'}
            textStyles={styles.textStyles}
            buttonStyles={styles.buttonStyles1}
            onPress={() => null}
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
    flex: 1,
  },
  prevBounsAmountText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(90),
    borderRadius: 10,
    backgroundColor: colors.white,
    elevation: 5,
    borderColor: colors.primaryLight,
    borderWidth: 1,
    padding: 10,
    marginVertical: hp(2),
  },
  prevBonusText: {
    fontFamily: 'Poppins-Bold',
    color: colors.black,
    fontSize: hp(2),
  },
  bounsAmountText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(90),
    borderRadius: 20,
    backgroundColor: colors.black,
    elevation: 5,
    padding: 10,
  },
  bonusText: {
    fontFamily: 'Poppins-Bold',
    color: colors.white,
    fontSize: hp(2),
  },
  textStyles: {
    color: colors.white,
    fontFamily: 'Poppins-Bold',
    width: wp(30),
    textAlign: 'center',
    fontSize: hp(1.8),
  },
  buttonStyles1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.primary,
    width: wp(25),
    height: hp(4),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginVertical: hp(2),
    elevation: 4,
    alignSelf: 'flex-end',
    marginRight: wp(5),
  },
});
