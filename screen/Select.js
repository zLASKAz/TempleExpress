import { StyleSheet, Button, SafeAreaView, Text, FlatList, TouchableOpacity, Dimensions, View, ScrollView } from 'react-native';
import { Card } from "react-native-paper";
import { Icon} from '@rneui/themed';
import HeaderTemple from '../components/HeaderTemple';
const { width , height } = Dimensions.get('window');

export default function Select({ navigation }) {
  const templeName = 'วัดบวรนิเวศราชวรวิหาร';
  const productToday = [{
    "Screen_id": "MonksOffering",
    "Screen_name": "Monks Offering",
    "Screen_icontype": "material-community",
    "Screen_icon": "cart"
  }, {
    "Screen_id": "Donated",
    "Screen_name": "Donated",
    "Screen_icontype": "material-community",
    "Screen_icon": "currency-usd"
  }]
  return (
      <SafeAreaView style={styles.container}>
        <HeaderTemple temple={templeName} />
      <ScrollView style={styles.flatListBox} horizontal={true} showsHorizontalScrollIndicator={false}>
      {productToday.map((item,id) => {
        return (<Card style={styles.flatList} key={id}> 
                    <TouchableOpacity
                      style={styles.cardContainer}
                      onPress={() => {
                        console.log(item.Screen_id)
                        navigation.navigate(item.Screen_id )
                      }}
                    >
                      <Card style={styles.card}>
                        <Text style={styles.text}>{item.Screen_name}</Text>
                        <Icon reverse containerStyle={styles.icon} name={item.Screen_icon} type={item.Screen_icontype} size={height * 0.03} color="#F86041" />
                      </Card>
                    </TouchableOpacity>
                
      </Card>
      )})}
      </ScrollView>
        
      </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: height * 0.05,
    backgroundColor: "#FFFFFF",
    padding: 8,
  },
  flatListBox: {
    display: 'flex',
    flexDirection: "row",
    flexWrap: "wrap",
  },
  flatList: {
    paddingLeft: width * 0.08,
    // paddingHorizontal: 0,
    paddingVertical: 16,
    paddingTop: height * 0.05,
    backgroundColor: "#FFFFFF",
    elevation: 0,
    shadowColor: "#FFFFFF"
  },
  cardContainer: {
    height: height * 0.45,
    width: width * 0.55,
    marginRight: width * 0.08, //gap ความห่าง
  },
  card: {
    height: height * 0.45,
    width: width * 0.55,
    borderRadius: height * 0.04,
    padding: 10,
    backgroundColor: "#FFA646",
  },
  text: {
    color: "#FFFFFF",
    fontWeight: '500',
    fontSize: 18,
    position: 'absolute',
    bottom: height * 0.02,
    left: width * 0.03,
  },
  icon: {
    position: 'absolute',
    bottom: -height * 0.005,
    right: 0,
  }
});