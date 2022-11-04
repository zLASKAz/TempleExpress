import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import {Button, Icon, Card} from '@rneui/themed';
import React, {useState} from 'react';
import SignIn from '../components/SignIn';
import Collapsible from 'react-native-collapsible';

const Payment = () => {
  const [MobileBanking, setMobileBanking] = useState(false);
  const [Ewallet, setEwallet] = useState(true);
  const [CreditCard, setCreditCard] = useState(true);
  const [DebitCard, setDebitCard] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
        <Button
          title="Mobile Banking"
          buttonStyle={styles.confirmButton}
          containerStyle={styles.confirmContButton}
          titleStyle={styles.confirmText}
          onPress={() => {
            setMobileBanking(!MobileBanking);
            setEwallet(true);
            setCreditCard(true);
            setDebitCard(true);
          }}
        />
        <Collapsible collapsed={MobileBanking}>
          <View style={styles.qrcode}>
            <Image
              source={require('../assets/qrcode.png')}
              style={styles.itemImg}
            />
          </View>
        </Collapsible>
        <Button
          title="E-Wallet"
          buttonStyle={styles.confirmButton}
          containerStyle={styles.confirmContButton}
          titleStyle={styles.confirmText}
          onPress={() => {
            setMobileBanking(true);
            setEwallet(!Ewallet);
            setCreditCard(true);
            setDebitCard(true);
          }}
        />
        <Collapsible collapsed={Ewallet}>
          <View style={styles.qrcode}>
            <Image
              source={require('../assets/qrcode.png')}
              style={styles.itemImg}
            />
          </View>
        </Collapsible>
        <Button
          title="Credit Card"
          buttonStyle={styles.confirmButton}
          containerStyle={styles.confirmContButton}
          titleStyle={styles.confirmText}
          onPress={() => {
            setMobileBanking(true);
            setEwallet(true);
            setCreditCard(!CreditCard);
            setDebitCard(true);
          }}
        />
        <Collapsible collapsed={CreditCard}>
          <View style={styles.qrcode}>
            <Image
              source={require('../assets/qrcode.png')}
              style={styles.itemImg}
            />
          </View>
        </Collapsible>
        <Button
          title="Debit Card"
          buttonStyle={styles.confirmButton}
          containerStyle={styles.confirmContButton}
          titleStyle={styles.confirmText}
          onPress={() => {
            setMobileBanking(true);
            setEwallet(true);
            setCreditCard(true);
            setDebitCard(!DebitCard);
          }}
        />
        <Collapsible collapsed={DebitCard}>
          <View style={styles.qrcode}>
            <Image
              source={require('../assets/qrcode.png')}
              style={styles.itemImg}
            />
          </View>
        </Collapsible>
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
    borderRadius: 20,
    width: 300,
    height: 320,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 5,
  },

  itemImg: {
    width: 250,
    height: 280,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
});
