import {
    Image,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Alert,
  } from 'react-native';
  import React from 'react';
  
  const add = () => Alert.alert('Succes');
  const BoxItem = ({title, price, pricebtn, count}, props) => {
    console.log({ title })
    return (
      <View style={styles.container}>
        <View style={styles.textView}>
          <View>
            <Text style={styles.priceText}>{price}</Text>
            <Text style={styles.count}>{count}</Text>
            <TouchableOpacity style={styles.btnminus}>
              <Text style={styles.btnTextminus}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnplus}>
              <Text style={styles.btnTextplus}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.iconView}>
          <Image source={require('../assets/4.png')} style={styles.icon}></Image>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginBottom: 50,
      borderRadius: 20,
      backgroundColor: '#FFA500',
      height: 300,
      top: 40,
    },
    textView: {
      flex: 4,
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
    titleText: {
      fontSize: 14,
      top: 15,
      left: 110,
    },
    priceText: {
      fontSize: 25,
      top: 250,
      left: 20,
    },
    count: {
      fontSize: 20,
      top: 220,
      left: 220,
      width: 13,
      backgroundColor: '#ffffff',
    },
    iconView: {
      flex: 4,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    icon: {
      width: 252,
      height: 230,
      top: 10,
      marginRight: 10,
      borderRadius: 15,
    },
    btnplus: {
      borderRadius: 7,
      lignItems: 'center',
      backgroundColor: '#FFA500',
      top: 160,
      left: 240,
      width: 15,
    },
    btnTextplus: {
      fontSize: 25,
      color: '#000000',
    },
    btnminus: {
      lignItems: 'center',
      backgroundColor: '#FFA500',
      top: 190,
      left: 200,
      width: 15,
    },
    btnTextminus: {
      fontSize: 25,
      color: '#000000',
    },
  });
  
  export default BoxItem;
  