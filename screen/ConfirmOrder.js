import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {Card} from '@rneui/themed';
import HeaderTemple from '../components/HeaderTemple';

const ConfirmOrder = () => {
  // Mock Data
  const templeName = 'วัดบวรนิเวศราชวรวิหาร';
  let itemList = [
    {
      name: 'ชุดตักบาตรใหญ่',
      price: 800,
      amount: 1,
    },
    {
      name: 'ชุดสังฆทาน',
      price: 150,
      amount: 1,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <HeaderTemple temple={templeName} />
      {itemList.map(items => {
        return (
          <View>
            <Card>
              <View>
                <Image
                  source={require('../assets/item1.png')}
                  style={{width: 100, height: 100}}
                />
              </View>
              <View>
                <Text>{items.name}</Text>
                <Text>{items.amount}</Text>
              </View>
            </Card>
          </View>
        );
      })}
    </SafeAreaView>
  );
};

export default ConfirmOrder;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
