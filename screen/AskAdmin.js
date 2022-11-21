import React, { useState } from 'react';
import { StyleSheet,SafeAreaView, Text,TouchableOpacity,View, TextInput} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CheckBox from '@react-native-community/checkbox';

const initialState= {
  mobile:false,
  email:false,
  app:false,
  noreply:false,
};


export default function HomeScreen() {
  const [text, onChangeText] = React.useState();
  const [state,setState] = useState(initialState);
  return (
    
    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <KeyboardAwareScrollView  
        contentProps={{keyboardDismissMode: 'interactive', keyboardShouldPersistTaps: 'handled'}}
        style= {{flex:1, width:'100%'}}  >
        <Text style={styles.textHeaderStyle}>Help Center</Text>
        <View style={styles.backgroundBox}>
          <Text style={styles.textTopicStyle}>
            หัวข้อที่เราสามารถช่วยคุณได้
          </Text>

          <TouchableOpacity>
            <Text style={styles.textStyleTop}>เเผนที่วัด</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.textStyle}>การซื้อสินค้า</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.textStyle}>การชำระเงิน</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.textStyle}>การส่งของ</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.textStyleBottom}>อื่นๆ</Text>
          </TouchableOpacity>

          <Text style={styles.textTopicStyle}>
            คุณอยากให้เราช่วยอะไร
          </Text>

          <TextInput 
            style={styles.textInputStyle}
            multiline={true} 
            onChangeText={onChangeText}
            placeholder="ใส่ข้อมูล (เช่น การส่งของมีปัญหา)"    
          />

          <Text style={styles.textTopicStyle}>
            คุณต้องการให้เราติดต่อกลับหรือไม่
          </Text>

          <View style={styles.viewStyle}>
            <CheckBox 
              disabled={false}
              value={state.mobile}
              onValueChange={(value) => setState({...state,mobile:value,
                email:false,
                app:false,
                noreply:false,})}
            />
            <Text style={styles.selectTextStyle}>ติดต่อกลับผ่านช่องทางโทรศัพท์มือถือ</Text>
          </View>

          <View style={styles.viewStyle}>
            <CheckBox 
              disabled={false}
              value={state.email}
              onValueChange={(value) => setState({...state,email:value,
                mobile:false,
                app:false,
                noreply:false,})}
            />
            <Text style={styles.selectTextStyle}>ติดต่อกลับผ่านช่องทางอีเมล</Text>
          </View>

          <View style={styles.viewStyle}>
            <CheckBox 
              disabled={false}
              value={state.app}
              onValueChange={(value) => setState({...state,app:value,
                mobile:false,
                email:false,
                noreply:false,})}
            />
            <Text style={styles.selectTextStyle}>ติดต่อกลับผ่านช่องทางแชทในแอพพลิเคชัน</Text>
          </View>

          <View style={styles.viewStyle}>
            <CheckBox 
              disabled={false}
              value={state.noreply}
              onValueChange={(value) => setState({...state,noreply:value,
                mobile:false,
                email:false,
                app:false,})}
            />
            <Text style={styles.selectTextStyle}>ไม่ต้องการให้ติดต่อกลับ</Text>
          </View>
          
          <TouchableOpacity style={styles.confirmBox} onPress={() => alert("ส่งข้อมูลการติดต่อกลับเรียบร้อยเเล้ว")}>
            <Text style={{color:'#ffffff', padding: 3, textAlign: 'center', fontSize: 16, fontWeight: 'bold', fontWeight: '350'}}>Confirm</Text>
          </TouchableOpacity>
        </View>
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

  textTopicStyle: {
      fontSize:18,
      fontWeight: '150',
      fontFamily: 'Kanit',
      backgroundColor: '#f6f6f6',
      width:'80%',
      alignSelf:'center',
      padding: 15

  },

  textStyleTop: {
    fontSize:16,
    fontWeight: '150',
    fontFamily: 'Kanit',
    backgroundColor: '#ffffff',
    width:'75%',
    alignSelf:'center',
    padding: 15,
    borderBottomWidth:1,
    marginTop: 15

  },

  textStyle: {
    fontSize:16,
    fontWeight: '150',
    fontFamily: 'Kanit',
    backgroundColor: '#ffffff',
    width:'75%',
    alignSelf:'center',
    padding: 15,
    borderBottomWidth:1,

  },

  textStyleBottom: {
    fontSize:16,
    fontWeight: '150',
    fontFamily: 'Kanit',
    backgroundColor: '#ffffff',
    width:'75%',
    alignSelf:'center',
    padding: 15,
    marginBottom:15
  },

  textHeaderStyle: {
    fontSize:20,
    paddingVertical:20,
    fontWeight: '100',
    color:'#ffffff',
    fontFamily: 'Kanit',
    paddingStart: 40
  },

  textInputStyle: {
    width:'75%',
    alignSelf:'center',
    padding:8,
    borderBottomWidth:0.3,
    marginTop:10,
    marginBottom:15,
    fontSize:20,
    fontFamily: 'Kanit',
  },

  selectTextStyle:{
    fontSize:15,
    fontFamily: 'Kanit',
    textAlignVertical:'center',
  },

  viewStyle:{
    width:'100%',
    flexDirection:'row',
    alignSelf:'center',
    paddingLeft:50,
    paddingVertical:5,
  },

  confirmBox: {
    width:'25%',
    marginTop:20,
    backgroundColor:'#f86041',
    borderRadius: 9,
    marginLeft:255,
  },

  backgroundBox: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height:855,
    paddingTop: 20
  },

});