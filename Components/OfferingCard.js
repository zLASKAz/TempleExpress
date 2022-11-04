import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';
import React from 'react';
const add = () => Alert.alert("Succes")
const BoxItem = ({title, price, pricebtn}, props) => {
  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <View>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.priceText}>{price}</Text>
          <TouchableOpacity style={styles.btn} onPress={add}>
            <Text style={styles.btnText}>{pricebtn}</Text>
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
    justifyContent: 'space-evenly',
    marginBottom: 20,
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 3,
    backgroundColor: '#FFA500',
    height: 120,
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
    fontSize: 14,
    top: 22,
    left: 110,
  },
  btn: {
    borderRadius: 7,
    lignItems: 'center',
    backgroundColor: '#f86041',
    width: 50,
    marginTop: 10,
    top: 24,
    left: 110,
    textAlign: 'center',
  },
  btnText: {
    left: 14.5,
    fontSize: 14,
    color: '#ffffff',
  },
  iconView: {
    flex: 4,
    flexDirection: 'row',
  },
  icon: {
    resizeMode: 'contain',
    width: 100,
    height: 100,
    top: 5,
    right: 127,
    borderRadius: 15,
  },
});

export default BoxItem;
