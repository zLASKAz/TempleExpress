import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import {Button, Icon, Card} from '@rneui/themed';
import React from 'react';
import SignIn from '../components/SignIn';

const Payment = () => {
  const buttonData = [
    {
      title: 'E-wallet',
      component: '',
    },
    {
      title: 'Credit Card',
      component: '',
    },
    {
      title: 'Debit Card',
      component: '',
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.qrcode}>
        <Image
          source={require('../assets/qrcode.png')}
          style={styles.itemImg}
        />
        <Text style={styles.confirmText}>Mobile Banking</Text>
      </View>

      {buttonData.map((items, i) => {
        return (
          <Button
            key={i}
            title={items.title}
            buttonStyle={styles.confirmButton}
            containerStyle={styles.confirmContButton}
            titleStyle={styles.confirmText}
          />
        );
      })}
    </SafeAreaView>
  );
};

export default Payment;

const styles = StyleSheet.create({
  ButtonCont: {
    alignSelf: 'center',
    paddingBottom: 20,
  },

  confirmButton: {
    backgroundColor: '#FFA646',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 20,
    height: 60,
  },

  confirmContButton: {
    width: 300,
    alignContent: 'center',
  },

  confirmText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Kanit',
    color: '#fff',
  },

  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },

  qrcode: {
    backgroundColor: '#F86041',
    padding: 20,
    paddingBottom:15,
    borderRadius: 20,
    width: 300,
    height: 350,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin:5,
  },

  itemImg: {
    width: 250,
    height: 280,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
});
