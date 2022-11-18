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
          buttonStyle={MobileBanking ? styles.confirmButtonUnselect : styles.confirmButton }
          containerStyle={styles.confirmContButton}
          titleStyle={MobileBanking ? styles.confirmTextUnselect :styles.confirmText}
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
          buttonStyle={Ewallet ?  styles.confirmButtonUnselect:styles.confirmButton}
          containerStyle={styles.confirmContButton}
          titleStyle={Ewallet ? styles.confirmTextUnselect :styles.confirmText}
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
          buttonStyle={CreditCard ? styles.confirmButtonUnselect :styles.confirmButton}
          containerStyle={styles.confirmContButton}
          titleStyle={CreditCard ? styles.confirmTextUnselect :styles.confirmText}
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
        
        
    </SafeAreaView>
  );
};

export default Payment;

const styles = StyleSheet.create({
  ButtonCont: {
    paddingBottom: 20,
  },

  confirmButton: {
    backgroundColor: '#343779',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 10,
    height: 60,
    justifyContent: 'flex-start',

  },

  confirmButtonUnselect: {
    backgroundColor: '#F6F6F6',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 10,
    height: 60,
    justifyContent: 'flex-start',
  },

  confirmContButton: {
    width: '93%',
  },

  confirmText: {
    fontSize: 18,
    fontFamily: 'Kanit',
    color: '#fff',
    

  },

  confirmTextUnselect: {
    fontSize: 18,
    fontFamily: 'Kanit',
    color: '#000',
    textAlign:'left'
  },

  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop:20
  },

  qrcode: {
    padding: 20,
    borderRadius: 20,
    borderBottomColor:'#F6F6F6',
    borderBottomWidth:2,
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
