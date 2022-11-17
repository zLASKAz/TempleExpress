import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Icon, Card} from '@rneui/themed';

const HeaderTemple = temple => {
  return (
    <View style={styles.container}>
      <Icon name="location" type="ionicon" color="#F9A72B" size={30} /> 
      <Text style={styles.header}>{temple.temple}</Text>
    </View>
  );
};

export default HeaderTemple;

const styles = StyleSheet.create({
  header: {
    fontSize: 16,
    fontFamily: 'Kanit',
    paddingBottom: 0,
    color: '#FFFFFF',
    paddingLeft: 25,
  },

  container: {
    flexDirection: 'row',
    alignItems:'center',
    height: 60,
    paddingLeft: 25,
  },

});
