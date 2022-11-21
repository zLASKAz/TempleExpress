import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import Payment from '../components/Payment';
import HeaderTemple from '../components/HeaderTemple';

const PaymentPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderTemple temple="Payment" />
        <Payment />
    </SafeAreaView>
  );
};

export default PaymentPage;

const styles = StyleSheet.create({
  container: {
      height: '150%',
},

});
