import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import {Button, Icon, Card,} from '@rneui/themed';
import React, {useState} from 'react';
import Collapsible from 'react-native-collapsible';
import {bankModel, ewalletModel} from '../model/PaymentModel';
import CreditCardForm from './CreditCardForm';

const Payment = () => {
  const [MobileBanking, setMobileBanking] = useState(false);
  const [Ewallet, setEwallet] = useState(true);
  const [CreditCard, setCreditCard] = useState(true);

  return (
    <ScrollView style={styles.ScrollContainer}>
      <SafeAreaView style={styles.container}>
        <Button
          title="Mobile Banking"
          buttonStyle={
            MobileBanking ? styles.confirmButtonUnselect : styles.confirmButton
          }
          containerStyle={styles.confirmContButton}
          titleStyle={
            MobileBanking ? styles.confirmTextUnselect : styles.confirmText
          }
          onPress={() => {
            setMobileBanking(!MobileBanking);
            setEwallet(true);
            setCreditCard(true);
          }}
        />
        <Collapsible collapsed={MobileBanking}>
          {bankModel.map((item, index) => {
            return (
              <Button key={index} buttonStyle={{backgroundColor:'transparent'}} onPress={() => alert('Hi')}>
                <View key={index} style={styles.listItem}>
                  <Image source={item.img} style={styles.itemImg} />
                  <Text style={styles.text}>{item.name}</Text>
                </View>
              </Button>
            );
          })}
        </Collapsible>
        <Button
          title="E-Wallet"
          buttonStyle={
            Ewallet ? styles.confirmButtonUnselect : styles.confirmButton
          }
          containerStyle={styles.confirmContButton}
          titleStyle={Ewallet ? styles.confirmTextUnselect : styles.confirmText}
          onPress={() => {
            setMobileBanking(true);
            setEwallet(!Ewallet);
            setCreditCard(true);
          }}
        />
        <Collapsible collapsed={Ewallet}>
          {ewalletModel.map((item, index) => {
            return (
              <Button key={index} buttonStyle={{backgroundColor:'transparent'}} onPress={() => alert('Hi')}>
                <View key={index} style={styles.listItem}>
                  <Image source={item.img} style={styles.itemImg} />
                  <Text style={styles.text}>{item.name}</Text>
                </View>
              </Button>
            );
          })}
        </Collapsible>
        <Button
          title="Cards"
          buttonStyle={
            CreditCard ? styles.confirmButtonUnselect : styles.confirmButton
          }
          containerStyle={styles.confirmContButton}
          titleStyle={
            CreditCard ? styles.confirmTextUnselect : styles.confirmText
          }
          onPress={() => {
            setMobileBanking(true);
            setEwallet(true);
            setCreditCard(!CreditCard);
          }}
        />
        <Collapsible collapsed={CreditCard}>
          <CreditCardForm/>
        </Collapsible>
      </SafeAreaView>
    </ScrollView>
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
    textAlign: 'left',
  },

  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 20,
  },

  ScrollContainer: {
    backgroundColor: '#fff',
    width: '100%',
    height: 'auto',
    marginBottom: 100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  listItem: {
    padding: 15,
    borderRadius: 20,
    borderBottomColor: '#F6F6F6',
    borderBottomWidth: 2,
    flexDirection: 'row',
    width: 400,
  },

  itemImg: {
    width: 20,
    height: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginLeft:15,
    marginRight:10
  },
  text:{
    fontSize:16,
    fontFamily:'Kanit',
    fontWeight:'100',
    color:'#555'
    
  }
});
