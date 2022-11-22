import {StyleSheet, Text, View} from 'react-native';
import {Input} from '@rneui/themed';
import {Icon} from '@rneui/themed';
import React from 'react';

const CreditCardForm = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardNumberForm}>
        <Input
          placeholder="Card number"
          style={styles.textinput}
          inputStyle={styles.input}
          label="Card Number"
          labelStyle={styles.label}
          leftIcon={
            <Icon
              name="creditcard"
              type="antdesign"
              size={30}
              color="#000"
            />
          }
        />
      </View>
      <View style={styles.secondForm}>
          <View style={styles.numberFormSecond}>
            <Input placeholder="MM/YY" inputStyle={styles.input} label="Valid till" labelStyle={styles.label}/>
          </View>
          <View style={styles.numberFormSecond}>
            <Input placeholder="CVV" inputStyle={styles.input} label="CVV" labelStyle={styles.label}/>
          </View>
      </View>
    </View>
  );
};

export default CreditCardForm;

const styles = StyleSheet.create({
  container: {
    width: '95%',
    alignSelf: 'center',
    marginTop: 20,
    flexDirection:'column',
    justifyContent:'center'
  },
  cardNumberForm: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textinput: {
    bordorBottomWidth: 10,
    borderBottomColor: '#f00',
  },
  input: {
    fontFamily:'Kanit',
    fontSize:18
  },
  secondForm: {
    width: '100%',
    flexDirection:'row',
    justifyContent:'center'
  },
  numberFormSecond:{
    width:'50%'
  },
  label:{
    fontFamily:'Kanit',
    color:'#000'
  }
});
