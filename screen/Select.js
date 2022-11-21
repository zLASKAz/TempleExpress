import { StyleSheet, Button, SafeAreaView, Text, FlatList, TouchableOpacity, Dimensions, View, ScrollView ,Image} from 'react-native';
import { Card } from "react-native-paper";
import { Icon, Tab, TabView } from '@rneui/themed';
import HeaderTemple from '../components/HeaderTemple';
import LinearGradient from 'react-native-linear-gradient';
import React, { useState } from 'react';
const { width, height } = Dimensions.get('window');
import item1 from '../assets/item1.png';
import item2 from '../assets/item2.png';
import four from '../assets/four.png';
import Payment from '../components/Payment';

export default function Select({ navigation }) {
  const [index, setIndex] = useState(0);
  const templeName = 'วัดบวรนิเวศราชวรวิหาร';
  // const productToday = [{
  //   "Screen_id": "MonksOffering",
  //   "Screen_name": "Monks Offering",
  //   "Screen_icontype": "material-community",
  //   "Screen_icon": "cart-outline"
  // }, {
  //   "Screen_id": "Donated",
  //   "Screen_name": "Donated",
  //   "Screen_icontype": "material-community",
  //   "Screen_icon": "currency-usd"
  // }]
  const OfferingData = [
    {
      id: 1,
      title: 'ผ้าไตรจีวร',
      price: '฿70',
      img: four,
    },
    {
      id: 2,
      title: 'ชุดสังฆทาน',
      price: '฿150',
      img: item2,
    },
    {
      id: 3,
      title: 'ชุดตักบาตรชุดใหญ๋',
      price: '฿800',
      img: item1,
    },
    {
      id: 4,
      title: 'ชุดตักบาตรชุดใหญ๋',
      price: '฿800',
      img: four,
    },    
    {
      id: 4,
      title: 'ชุดตักบาตรชุดใหญ๋',
      price: '฿800',
      img: four,
    },    
    {
      id: 4,
      title: 'ชุดตักบาตรชุดใหญ๋',
      price: '฿800',
      img: four,
    },    
    {
      id: 4,
      title: 'ชุดตักบาตรชุดใหญ๋',
      price: '฿800',
      img: four,
    },
    
  ];
  return (
      <>
        <HeaderTemple temple={templeName} />
        <Tab
          value={index}
          onChange={(e) => setIndex(e)}
          indicatorStyle={{
            backgroundColor: '#A7A5A6',
            height: 3,
            width: 0,
          }}
        >
          <Tab.Item
            title="    Monks Offering    "
            titleStyle={(active) => ({
            color: active ? "#FFFFFF" : "#FF780C",
            backgroundColor: active ? "#FF780C" : "#FFF5EC", 
            fontSize: 14 ,
            borderRadius: height * 0.04,
            marginTop:20 
          })}
            containerStyle={{
              backgroundColor: "#FFFFFF",
              height:80,
              borderTopLeftRadius:20,
              
          }}
          />
          <Tab.Item
            title="          Donated          "
            titleStyle={(active) => ({
            color: active ? "#FFFFFF" : "#FF780C",
            backgroundColor: active ? "#FF780C" : "#FFF5EC",
            fontSize: 14,
            borderRadius: height * 0.04, 
            marginTop: 20 
            })}
          containerStyle={{
            backgroundColor: "#FFFFFF",
            height:80,
            borderTopRightRadius: 20,

          }}
          />
        </Tab>

        <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ backgroundColor: "#FFFFFF", width: '100%' }}>
        <View style={styles.box}>
            <ScrollView>
              {OfferingData.map((item, id) => {
                return (
                  <Card style={styles.CardItem} navigation={navigation} key={id}>
                    <View style={styles.CardContent} >
                      <Text style={styles.titleText}>{item.title}</Text>
                      <Text style={styles.priceText}>{item.price}</Text>
                      <TouchableOpacity
                        style={styles.btn}
                        onPress={() => {
                          navigation.navigate('ConfirmOrder');
                        }}>
                        <Text style={styles.btnText}>Add to cart</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.iconView}>
                      <Image source={item.img} style={styles.imageView}></Image>
                    </View>
                  </Card>
                );
              })}
            </ScrollView>
            </View>
          </TabView.Item>
        <TabView.Item style={{ backgroundColor: "#FFFFFF", width: '100%' }}>
            <Payment/>
          </TabView.Item>
        </TabView>
      </>
  );
}
const styles = StyleSheet.create({
  box: {
    width: '100%',
    height: '88%',
    paddingTop: 20,
    alignItems: 'center',
  },
  CardItem: {
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#f6f6f6',
    height: 120,
    width: 350,
  },
  btn: {
    borderRadius: 7,
    alignItems: 'center',
    backgroundColor: '#343779',
    height: 22,
    width: 90,
    marginTop: 10,
    top: 30,
    left: 140,
    textAlign: 'center',
  },
  btnText: {
    fontSize: 14,
    color: '#ffffff',
  },
  titleText: {
    fontSize: 14,
    top: 18,
    left: 140,
  },
  priceText: {
    fontSize: 14,
    top: 25,
    left: 140,
    fontWeight:'bold',
  },
  imageView: {
    width: 100,
    height: 100,
    borderRadius: 5,
    bottom: 60,
    left: 15,
  },
});