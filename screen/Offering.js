import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import BoxItem from '../components/OfferingCard';

const Offering = ({navigation }) => {
  const [OfferingData, setOfferingInfo] = useState([]);
  useEffect(() => {
    setOfferingInfo([
      {
        id: 1,
        title: 'ผ้าไตรจีวร',
        price: '฿70',
        pricebtn: 'buy',
      },
      {
        id: 2,
        title: 'ชุดสังฆทาน',
        price: '฿150',
        pricebtn: 'buy',
      },
      {
        id: 3,
        title: 'ชุดตักบาตรชุดใหญ๋',
        price: '฿800',
        pricebtn: 'buy',
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
        <FlatList
          data={OfferingData}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <BoxItem
              title={item.title}
              price={item.price}
              pricebtn={item.pricebtn}
              navigation= {navigation}>
            </BoxItem>

            // <TouchableOpacity onPress={() => navigation.navigate('AddOffering')}>
            //   <Text style={Styles.titleText}>{ item.title }</Text>
            // </TouchableOpacity>
          )}
        />
      </View>
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
    textAlign: 'left',
    marginLeft: 20,
    marginBottom: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Offering;