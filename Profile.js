import { StyleSheet, Button, SafeAreaView, Text, Alert, TouchableOpacity} from 'react-native';
import Card from '../components/userCard';

export default function Notification() {
  return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', marginTop: 45 }}>
      <Card />

      <TouchableOpacity style={styles.touchBox1} onPress={() => {alert("Go to account !")}}>
        <Text style={styles.textBtn}>Account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.touchBox2} onPress={() => {alert("Go to History !")}}>
        <Text style={styles.textBtn}>History</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.touchBox2} onPress={() => {alert("Go to Fav Temple !")}}>
        <Text style={styles.textBtn}>Favorite Temple</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.touchBox2} onPress={() => {alert("Go to My Address !")}}>
        <Text style={styles.textBtn}>My Address</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signOutBox} onPress={() => alert("Sign Out")}>
        <Text style={{color:'#ffffff', padding: 8, textAlign: 'center', fontSize: 23, fontWeight: 'bold', fontWeight: '350'}}>Sign Out</Text>
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
    width:'75%',
    marginTop:80,
    backgroundColor:'#f86041',
    borderRadius: 9,
  }
})