import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import BoxItem from '../components/AddOfferingCard'

export default function AddOffering({ navigation }) {
  const [OfferingData, setOfferingInfo] = useState([]);
  useEffect(() => {
    setOfferingInfo([
      {
        id: 1,
        title: 'ผ้าไตรจีวร',
        price: '800 ฿',
        pricebtn: 'buy',
        count: '5',
      },
    ]);

    // fetch('')
    //   .then(response => response.json())
    //   .then(json => setOfferingInfo(json))
    //   .catch(errorr => console.error());
  }, []);

  return (
    <OfferingLayout label="ถวายสังฆทาน">
      <View style={styles.box}>
        <ScrollView
          data={OfferingData}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <BoxItem
              title={item.title}
              price={item.price}
              pricebtn={item.pricebtn}
              count={item.count}></BoxItem>
          )}
        />
      </View>
      <TouchableOpacity style={styles.btnAdd} onPress={() => {
        navigation.navigate("ConfirmOrder")
      }}>
        <Text style={styles.btnTextAdd}>Add</Text>
      </TouchableOpacity>
    </OfferingLayout>
  );
}

const OfferingLayout = ({label, children}) => (
  <View style={styles.entireView}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.container}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  entireView: {
    flex: 1,
    padding: 50,
  },
  container: {
    flex: 1,
    marginTop: 8,
  },
  box: {
    width: '100%',
    height: '100%',
    padding: 20,
    borderRadius: 5,
  },
  label: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    top: 50,
  },
  btnAdd: {
    borderRadius: 7,
    lignItems: 'center',
    backgroundColor: '#f86041',
    width: 100,
    height: 45,
    bottom: 150,
    left: 110,
  },
  btnTextAdd: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 14,
    color: '#ffffff',
  },
});
