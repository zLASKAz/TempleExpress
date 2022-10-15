import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {Card} from '@rneui/themed';
import HeaderTemple from '../components/HeaderTemple';
import item1 from '../assets/item1.png';
import item2 from '../assets/item2.png';
const ConfirmOrder = () => {
  // Mock Data
  const templeName = 'วัดบวรนิเวศราชวรวิหาร';
  let itemList = [
    {
      name: 'ชุดตักบาตรใหญ่',
      price: 800,
      amount: 1,
      img: item1,
    },
    {
      name: 'ชุดสังฆทาน',
      price: 150,
      amount: 1,
      img: item2,
    },
    {
      name: 'ชุดสังฆทาน',
      price: 150,
      amount: 1,
      img: item2,
    },
    
  ];

  const [total, settotal] = useState(
    itemList.reduce((pre, cur) => {
      console.log(pre);
      return pre + cur.price * cur.amount;
    }, 0),
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollCont}
        showsVerticalScrollIndicator={false}>
        <HeaderTemple temple={templeName} />
        {itemList.map((items, i) => {
          () => {
            settotal(total + items.price * items.amount);
          };
          return (
            <View key={i}>
              <Card containerStyle={styles.cardCont}>
                <View style={styles.dataCont}>
                  <View style={styles.imgCont}>
                    <Image source={items.img} style={styles.itemImg} />
                  </View>
                  <View style={styles.textCont}>
                    <Text style={styles.text}>{items.name}</Text>
                    <Text style={styles.text}>{items.price} ฿</Text>
                    <Text style={styles.text}>{items.amount}</Text>
                  </View>
                </View>
              </Card>
            </View>
          );
        })}
        <View style={styles.sumBox}>
          <View style={styles.textCont}>
            <Text style={styles.text}>ค่าจัดส่ง</Text>
            <Text style={styles.text}>ราคาทั้งหมด</Text>
          </View>
          <View style={styles.textCont}>
            <Text style={styles.text}>45 ฿</Text>
            <Text style={styles.text}>{total} ฿</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ConfirmOrder;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  scrollCont: {
    width: '80%',
  },

  itemImg: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 15,
  },

  cardCont: {
    backgroundColor: '#F9A72B',
    borderRadius: 15,
    shadowOpacity: 1,
    elevation: 10,
  },

  imgCont: {
    paddingEnd: 30,
  },

  dataCont: {
    flexDirection: 'row',
  },

  sumBox: {
    padding: 30,
    flexDirection:'row',
    justifyContent:'space-between'
  },

  textCont: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    
  },

  text: {
    fontSize: 16,
    fontFamily: 'Kanit',
    color: '#000',
  },
});
