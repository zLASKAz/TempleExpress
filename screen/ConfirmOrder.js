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

const ConfirmOrder = ({navigation}) => {
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
  const [total, settotal] = useState(
    cartItem.reduce((pre, cur) => {
      return pre + cur.price * cur.amount;
    }, 0),
  );

  useEffect(() => {
    console.log(cartItem);
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
      <HeaderTemple temple={templeName} />
      {cartItem.length !== 0 ? (
        <ScrollView
          style={styles.scrollCont}
          showsVerticalScrollIndicator={false}>
          <View style={styles.backgroundBox}>
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
                      color="#000"
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
                            editable={false}
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

            <View style={styles.noteCont}>
              <TextInput
                placeholder="  ข้อความเพิ่มเติม ( ex. ตักบาตร ทำบุญ )    "
                style={styles.noteInput}
                multiline={true}
              />
            </View>
            <View style={styles.sumBox}>
              <View style={styles.textContTotal}>
                <Text style={styles.text}>ราคาสินค้าทั้งหมด</Text>
                <Text style={styles.text}>
                  {total.toLocaleString('en-US')} ฿
                </Text>
              </View>
              <View style={styles.textContTotal}>
                <Text style={styles.text}>ค่าจัดส่ง</Text>
                <Text style={styles.text}>45 ฿</Text>
              </View>
              <View style={styles.textContTotal}>
                <Text style={styles.text}>รวมทั้งหมด</Text>
                <Text style={styles.text}>
                  {(total + 45).toLocaleString('en-US')} ฿
                </Text>
              </View>
            </View>
            {/* <View style={styles.sumBox}>
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
          </View> */}
            <View style={styles.ButtonCont}>
              <Button
                title="CONFIRM"
                buttonStyle={styles.confirmButton}
                containerStyle={styles.confirmContButton}
                titleStyle={styles.confirmText}
                onPress={() => {
                  navigation.navigate('Payment');
                }}
              />
            </View>
          </View>
        </ScrollView>
      ) : (
        <View style={styles.container2}>
          <Text style={styles.text}>ขออภัย ไม่มีสินค้าในตะกร้าของคุณ</Text>
          <Button
            containerStyle={styles.ButtonCont}
            buttonStyle={styles.ButtonStyle}
            onPress={() => {
              navigation.navigate('offering');
            }}>
            Back
          </Button>
        </View>
      )}
    </SafeAreaView>
  );
};

export default ConfirmOrder;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },

  container2: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },

  backgroundBox: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 'auto',
  },

  backgroundBoxs: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 880,
  },

  scrollCont: {
    width: '100%',
  },

  itemImg: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 15,
  },

  cardCont: {
    backgroundColor: '#F6F6F6',
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
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '93%',
    alignSelf: 'center',
  },

  textCont: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },

  textContTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    marginVertical: 2,
    alignItems: 'center',
    paddingHorizontal: 15,
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
    width: '93%',
    marginBottom: 90,
    marginTop: 10,
  },

  confirmButton: {
    backgroundColor: '#343779',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 10,
    height: 55,
  },
  ButtonStyle: {
    backgroundColor: '#F86041',
    borderRadius: 20,
  },

  confirmContButton: {
    alignContent: 'center',
  },

  confirmText: {
    fontWeight: 'bold',
    fontFamily: 'Kanit',
  },

  noteCont: {
    width: '93%',
    height: 90,
    borderWidth: 1,
    borderColor: '#A7A5A6',
    fontSize: 16,
    fontFamily: 'Kanit',
    color: '#000',
    alignSelf: 'center',
    margin: 20,
    borderRadius: 10,
    marginTop: 50,
  },
  noteInput: {
    backgroundColor: '#fff',
    fontSize: 16,
    fontFamily: 'Kanit',
    color: '#000',
    alignSelf: 'baseline',
    flexWrap: 'wrap',
  },
});
