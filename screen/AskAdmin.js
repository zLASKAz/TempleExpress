import { StyleSheet, Button, SafeAreaView, Text,Dimensions, TouchableOpacity} from 'react-native';
import Card from '../components/helpCard';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const {mobWidth, mobHeight} = Dimensions.get('window');

export default function HomeScreen() {
  return (
    
    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <KeyboardAwareScrollView  
        keyboardShouldPersistTaps= 'always'
        style= {{flex:1, width:'75%'}}  >
          <Text style={styles.textStyle}>ขอความช่วยเหลือ</Text>
          <Card />
          <TouchableOpacity style={styles.confirmBox} onPress={() => alert("Sign Out")}>
            <Text style={{color:'#ffffff', padding: 3, textAlign: 'center', fontSize: 16, fontWeight: 'bold', fontWeight: '350'}}>Confirm</Text>
          </TouchableOpacity>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles =  StyleSheet.create({

  helpTopic: {
      margin:10,
      flex:1,
      flexDirection: "row",
      backgroundColor:'#ffffff',
      width:'100%',
      borderRadius: 22,
      alignItems:'center',
  },

  textStyle: {
      fontSize:35,
      paddingVertical:20,
      fontWeight:'bold',
      color:'#000'
  },

  confirmBox: {
    width:'25%',
    marginTop:10,
    backgroundColor:'#f86041',
    borderRadius: 9,
    marginLeft:230,
  }

});