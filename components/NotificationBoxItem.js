import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export const BoxItem = ({title, detail}) => {
  return (
    <View style={[styles.container]}>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.detailText}>{detail}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    borderRadius: 20,
    paddingHorizontal: 25,
    backgroundColor: '#FFA500',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  detailText: {
    fontSize: 16,
  },
});

export default BoxItem;
