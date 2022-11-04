import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export const BoxItem = ({title, detail}) => {
  return (
    <View style={styles.container}>
      <View
        style={styles.textView}>
        <View>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.detailText}>{detail}</Text>
        </View>
      </View>
      <View style={styles.iconView}>
        <Image
          source={require('../assets/notif_boxitem_icon.png')}
          style={styles.icon}></Image>
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
  },
  textView: {
    flex: 4, flexDirection: 'row', justifyContent: 'flex-start'
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  detailText: {
    fontSize: 14,
  },
  iconView: {
    flex: 1, flexDirection: 'row', justifyContent: 'flex-end'
  },
  icon: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
});

export default BoxItem;