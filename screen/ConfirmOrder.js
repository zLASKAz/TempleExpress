import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState,useEffect} from 'react';
import { Button,Icon,Card } from "@rneui/themed";
import HeaderTemple from '../components/HeaderTemple';
import item1 from '../assets/item1.png';
import item2 from '../assets/item2.png';
const ConfirmOrder = () => {
  // Mock Data
  const templeName = 'วัดบวรนิเวศราชวรวิหาร';
  const data = [
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
      name: 'ชุดอาหารปลา',
      price: 40,
      amount: 1,
      img: item2,
    },
    
    
  ];

  
  const [cartItem, setcartItem] = useState(data)

  const [total, settotal] = useState(
    cartItem.reduce((pre, cur) => {
      return pre + cur.price * cur.amount;
    }, 0),
    );
  
  const increment = (name) => {  
    const itemAmount = cartItem.find(item => item.name === name)
    setcartItem(cartItem.map((i) => i.name === name ? {...itemAmount, amount: i.amount+1}: i))
    calTotal()
  }

  const decrement = (name) => {  
    const itemAmount = cartItem.find(item => item.name === name)
    setcartItem(cartItem.map((i) => i.name === name ? {...itemAmount, amount: i.amount-1}: i))
    calTotal()

  }
  
  const calTotal = () => {
    settotal(cartItem.reduce((pre, cur) => {
      return pre + cur.price * cur.amount;
    }, 0),)
  }
  console.log(cartItem)
  console.log(total);
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollCont}
        showsVerticalScrollIndicator={false}>
        <HeaderTemple temple={templeName} />
        {cartItem.map((items, i) => {
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
                    <Button onPress={()=> decrement(items.name)}> - </Button>
                    <TextInput style={styles.textInput} onChange>{items.amount}</TextInput>
                    <Button onPress={()=> increment(items.name)}></Button>
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
    width:'100%',
    height:'100%',
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

  textInput:{
    backgroundColor:'#fff',
    fontSize: 16,
    fontFamily: 'Kanit',
    color: '#000',
    width:30,
    padding:2,
    borderRadius:10,
  }
});
