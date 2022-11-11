import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export const BoxItem = ({title, detail, index}) => {
  return (
    <View style={styles.container} key={index}>
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
    paddingStart: 18,
    paddingEnd: 10,
    paddingVertical: 3,
    backgroundColor: '#FFA500',
  },
  textView: {
    flex: 4, flexDirection: 'row', justifyContent: 'flex-start'
  },
  titleText: {
    fontSize: 18,
    fontFamily: 'Kanit',
  },
  detailText: {
    fontSize: 14,
  },
  iconView: {
    flex: 1, flexDirection: 'row', justifyContent: 'flex-end', paddingStart: 8
  },
  icon: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 50,
    height: 50,
  },
});

export default BoxItem;