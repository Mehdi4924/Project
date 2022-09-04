import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,FlatList
} from 'react-native';
import HeaderComponent from '../../Components/HeaderComponent';
import {colors} from '../../Utils/Colors';
import {hp, wp} from '../../Utils/Responsive';
const data = [
  {
    type: 'Transaction',
    tId: '250090',
    dateTime: '10-Aug-2002, 09:30 AM',
    source: 'EasyPaisa Merchant',
    amount: 'Rs.520',
  },
  {
    type: 'Transaction',
    tId: '250090',
    dateTime: '10-Aug-2002, 09:30 AM',
    source: 'EasyPaisa Merchant',
    amount: 'Rs.520',
  },
  {
    type: 'Transaction',
    tId: '250090',
    dateTime: '10-Aug-2002, 09:30 AM',
    source: 'EasyPaisa Merchant',
    amount: 'Rs.520',
  },
  {
    type: 'Transaction',
    tId: '250090',
    dateTime: '10-Aug-2002, 09:30 AM',
    source: 'EasyPaisa Merchant',
    amount: 'Rs.520',
  },
];
export default function Wallet(props) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <HeaderComponent
            icon={require('../../Assets/arrowBack.png')}
            onPress={() => props.navigation.goBack()}
            name="WALLET"
            search={true}
          />
          <ImageBackground
            source={require('../../Assets/vendorWallet.png')}
            style={{width: wp(90), height: hp(25), marginVertical: hp(2)}}
            resizeMode="contain">
            <View style={styles.balanceView}>
              <Text style={styles.balanceText}>Balance :</Text>
              <Text style={styles.amountText}>Rs:200</Text>
            </View>
          </ImageBackground>
          <Text style={styles.transactionsText}>Transactions</Text>
          <FlatList
            data={data}
            renderItem={({item, index}) => {
              return (
                <View style={styles.listParentView}>
                  <View style={styles.listSubView}>
                    <Text style={styles.listLeftText}>Type</Text>
                    <Text style={styles.listRightText}>{item.type}</Text>
                  </View>
                  <View style={styles.listSubView}>
                    <Text style={styles.listLeftText}>Transaction ID</Text>
                    <Text style={styles.listRightText}>{item.tId}</Text>
                  </View>
                  <View style={styles.listSubView}>
                    <Text style={styles.listLeftText}>Date & Time</Text>
                    <Text style={styles.listRightText}>{item.dateTime}</Text>
                  </View>
                  <View style={styles.listSubView}>
                    <Text style={styles.listLeftText}>Souce</Text>
                    <Text
                      style={[styles.listRightText, {color: colors.primary}]}>
                      {item.source}
                    </Text>
                  </View>
                  <View style={styles.listSubView}>
                    <Text
                      style={[
                        styles.listLeftText,
                        {fontFamily: 'Poppins-Bold'},
                      ]}>
                      Amount
                    </Text>
                    <Text
                      style={[
                        styles.listRightText,
                        {fontFamily: 'Poppins-Bold'},
                      ]}>
                      {item.amount}
                    </Text>
                  </View>
                </View>
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
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
  },
  transactionsText: {
    width: wp(90),
    marginVertical: hp(1),
    color: colors.primary,
    fontFamily: 'Poppins-Bold',
    fontSize: hp(2),
  },
  balanceText: {
    width: wp(60),
    marginTop: hp(10),
    textAlign: 'right',
    color: colors.white,
    fontFamily: 'Poppins-Bold',
    fontSize: hp(2),
  },
  amountText: {
    marginTop: hp(10),
    backgroundColor: '#FFCC00',
    paddingHorizontal: 5,
    borderRadius: 5,
    color: colors.white,
    fontFamily: 'Poppins-Bold',
    fontSize: hp(2),
  },
  balanceView: {
    flexDirection: 'row',
    width: wp(78),
    justifyContent: 'space-between',
  },
  listParentView: {
    backgroundColor: colors.lightGray,
    padding: 10,
    elevation: 5,
    borderRadius: 10,
    borderColor: colors.primaryLight,
    borderWidth: 1,
    marginVertical: hp(1),
  },
  listSubView: {
    width: wp(85),
    marginVertical: hp(0.5),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listLeftText: {
    fontFamily: 'Poppins-Regular',
    fontSize: hp(2),
    width: wp(42),
    color: colors.black,
  },
  listRightText: {
    fontFamily: 'Poppins-Regular',
    fontSize: hp(2),
    width: wp(42),
    color: colors.black,
    textAlign: 'right',
  },
});
