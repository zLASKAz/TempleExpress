import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Icon, Card} from '@rneui/themed';

const HeaderTemple = temple => {
  return (
    <View style={styles.container}>
      <Icon name="location" type="ionicon" color="#33A9AC" size={40} /> 
      <Text style={styles.header}>{temple.temple}</Text>
    </View>
  );
};

export default HeaderTemple;

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    fontFamily: 'Kanit',
    padding: 20,
    paddingBottom: 0,
    color: '#000',
  },

  container: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center'
  },

});
