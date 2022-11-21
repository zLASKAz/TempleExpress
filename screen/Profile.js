import { StyleSheet, Button, SafeAreaView, Text, Alert, TouchableOpacity} from 'react-native';
import UserCard from '../components/userCard';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

export default function Profile({ navigation }) {
  function signout() {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  }
  return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor:'#ffffff' }}>
      <UserCard/>

      <TouchableOpacity style={styles.textStyleTop} onPress={() => {alert("")}}>
        <Text style={styles.textBtn}>History</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.textStyle} onPress={() => {alert("")}}>
        <Text style={styles.textBtn}>Favorite Temple</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.textStyle} onPress={() => {alert("")}}>
        <Text style={styles.textBtn}>Recommend Temple</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.textStyle} onPress={() => {alert("")}}>
        <Text style={styles.textBtn}>Payment Methods</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.textStyle} onPress={() => {alert("")}}>
        <Text style={styles.textBtn}>Coupon</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.textStyle} onPress={() => navigation.navigate('Fortune')}>
        <Text style={styles.textBtn}>Fortune Card</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.textStyle} onPress={() => {alert("")}}>
        <Text style={styles.textBtn}>Language</Text>
      </TouchableOpacity>
      

      <TouchableOpacity style={styles.signOutBox} onPress={() => signout()}>
        <Text style={{color:'#ffffff', padding: 8, textAlign: 'center', fontSize: 23, fontWeight: '350', fontFamily: 'Kanit'}}>Sign Out</Text>
      </TouchableOpacity>

      </SafeAreaView>
  );
}

const styles =  StyleSheet.create({

  textBtn: {
    color: '#000',
    backgroundColor: '#f6f6f6',
    fontWeight: 'bold',
    padding: 8,
    fontWeight: '400',
    borderRadius: 12
  },

  touchBox1: {
    width:'75%',
    paddingTop: 18, 
    margin: 2, 
    backgroundColor: '#f6f6f6',
  },

  touchBox2: {
    width:'75%',
    paddingTop: 3, 
    fontWeight: 'bold',
    margin: 3, 
    backgroundColor: '#f6f6f6',
  },

  signOutBox: {
    marginTop:80,
    backgroundColor:'#343779',
    borderRadius: 9,
    padding:5,
    paddingHorizontal:30,
  },

  textStyleTop: {
    fontSize:16,
    fontWeight: '150',
    fontFamily: 'Kanit',
    backgroundColor: '#ffffff',
    width:'85%',
    alignSelf:'center',
    padding: 10,
    borderBottomWidth:0.3,
    marginTop:10,

  },

  textStyle: {
    fontSize:16,
    fontWeight: '150',
    fontFamily: 'Kanit',
    backgroundColor: '#ffffff',
    width:'85%',
    alignSelf:'center',
    padding: 5,
    borderBottomWidth:0.3,

  },
})
