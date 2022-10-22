import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Button, Icon, Card} from '@rneui/themed';
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
      img: item1,
    },
  ];

  const [cartItem, setcartItem] = useState(data);

  const [test, settest] = useState(0);
  const [total, settotal] = useState(
    cartItem.reduce((pre, cur) => {
      return pre + cur.price * cur.amount;
    }, 0),
  );

  useEffect(() => {
    calTotal();
  }, [cartItem]);

  const changeAmountInput = (e, name) => {
    const itemAmount = cartItem.find(item => item.name === name);
    if (e !== '' && parseInt(e) > 0) {
      setcartItem(
        cartItem.map(i =>
          i.name === name
            ? {...itemAmount, amount: (i.amount = parseInt(e))}
            : i,
        ),
      );
    } else {
      setcartItem(
        cartItem.map(i =>
          i.name === name ? {...itemAmount, amount: (i.amount = 1)} : i,
        ),
      );
    }
  };

  const increment = name => {
    const itemAmount = cartItem.find(item => item.name === name);
    console.log(itemAmount);
    setcartItem(
      cartItem.map(i =>
        i.name === name ? {...itemAmount, amount: (i.amount += 1)} : i,
      ),
    );
  };

  const decrement = name => {
    const itemAmount = cartItem.find(item => item.name === name);
    if (itemAmount.amount > 1) {
      setcartItem(
        cartItem.map(i =>
          i.name === name ? {...itemAmount, amount: (i.amount -= 1)} : i,
        ),
      );
    }
  };

  const deleteItem = name => {
    const itemAmount = cartItem.find(item => item.name === name);
    if (itemAmount) {
      setcartItem(cartItem.filter(i => i.name !== name));
    }
  };

  const calTotal = () => {
    settotal(
      cartItem.reduce((pre, cur) => {
        return pre + cur.price * cur.amount;
      }, 0),
    );
  };

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
                  <Icon
                  name="x"
                  type="feather"
                  size={15}
                  color="#F9A72B"
                  backgroundColor="#fff"
                  containerStyle={{
                    top: -20,
                    right: -20,
                    borderRadius: 30,
                    position: 'absolute',
                  }}
                  onPress={() => deleteItem(items.name)}
                  />
                  
                <View style={styles.dataCont}>
                  <View style={styles.imgCont}>
                    <Image source={items.img} style={styles.itemImg} />
                  </View>
                  <View style={styles.textCont}>
                    <Text style={styles.text}>{items.name}</Text>
                    <Text style={styles.text}>{items.price} ฿</Text>
                    <View style={styles.amountItem}>
                      <Icon
                        name="remove-circle-outline"
                        type="ionicon"
                        size={20}
                        color="#000"
                        onPress={() => decrement(items.name)}
                      />
                      <TextInput
                        name="amount"
                        keyboardType="decimal-pad"
                        defaultValue={`${items.amount}`}
                        style={styles.textInput}
                        textAlign="center"
                        onChange={e =>
                          changeAmountInput(e.nativeEvent.text, items.name)
                        }></TextInput>

                      <Icon
                        name="add-circle-outline"
                        type="ionicon"
                        size={20}
                        color="#000"
                        onPress={() => increment(items.name)}
                        style={styles.iconItem}
                      />
                    </View>
                  </View>
                </View>
              </Card>
            </View>
          );
        })}
        <View style={styles.sumBox}>
          <View style={styles.textCont}>
            <Text style={styles.text}>ค่าจัดส่ง</Text>
            <Text style={styles.text}>ราคาสินค้าทั้งหมด</Text>
            <Text style={styles.text}>รวมทั้งหมด</Text>
          </View>
          <View style={styles.textCont}>
            <Text style={styles.text}>45 ฿</Text>
            <Text style={styles.text}>{total.toLocaleString('en-US')} ฿</Text>
            <Text style={styles.text}>
              {(total + 45).toLocaleString('en-US')} ฿
            </Text>
          </View>
        </View>
        <View style={styles.ButtonCont}>
          <Button
            title="CONFIRM"
            buttonStyle={styles.confirmButton}
            containerStyle={styles.confirmContButton}
            titleStyle={styles.confirmText}
          />
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
    width: '100%',
    height: '100%',
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
    flexDirection: 'row',
    justifyContent: 'space-between',
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

  textInput: {
    backgroundColor: '#fff',
    fontSize: 16,
    fontFamily: 'Kanit',
    color: '#000',
    width: 30,
    padding: 2,
    borderRadius: 10,
  },

  amountItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  ButtonCont: {
    alignSelf: 'center',
    paddingBottom: 20,
  },

  confirmButton: {
    backgroundColor: '#F86041',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 30,
  },

  confirmContButton: {
    width: 200,
    alignContent: 'center',
  },

  confirmText: {
    fontWeight: 'bold',
    fontFamily: 'Kanit',
  },
});
