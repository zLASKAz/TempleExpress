import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Dimensions,
  ScrollView,
} from 'react-native';
import { CheckBox, Icon, Button, Input } from '@rneui/themed';
import HeaderTemple from '../components/HeaderTemple';
const {width, height} = Dimensions.get('window');

export default function MonksOffering() {
  const templeName = 'วัดบวรนิเวศราชวรวิหาร';
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const [check6, setCheck6] = useState(false);
  const [value, onChangeText] = useState('');

  function MonksOfferingConfirm(){
    if(check6 == true){
      if (value.trim().length !== 0) {
        alert(value)
      onChangeText('')
      }else {
        alert('ตรงอื่นๆพิมพ์ข้อความด้วย')
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
      <HeaderTemple temple={templeName} />
      <View style={styles.Box}>
        <View style={styles.BoxHeader}>
          <Text style={styles.TextHeader}>Monks Offering</Text>
          <Icon
            reverse
            containerStyle={styles.icon}
            name="cart"
            type="material-community"
            size={20}
            color="#F86041"
          />
        </View>
        <View style={styles.CheckBoxCard}>
          <CheckBox
            title="ตักบาตร"
            containerStyle={styles.checkBox}
            checked={check1}
            textStyle={styles.textcheckBox}
            uncheckedColor="#F86041"
            checkedColor="#F86041"
            onPress={() => setCheck1(!check1)}
          />
          <CheckBox
            title="ถวายสัวฆทาน"
            containerStyle={styles.checkBox}
            checked={check2}
            textStyle={styles.textcheckBox}
            uncheckedColor="#F86041"
            checkedColor="#F86041"
            onPress={() => setCheck2(!check2)}
          />
          <CheckBox
            title="ทำบุญ"
            containerStyle={styles.checkBox}
            checked={check3}
            textStyle={styles.textcheckBox}
            uncheckedColor="#F86041"
            checkedColor="#F86041"
            onPress={() => setCheck3(!check3)}
          />
          <CheckBox
            title="เลี้ยงพระ"
            containerStyle={styles.checkBox}
            checked={check4}
            textStyle={styles.textcheckBox}
            uncheckedColor="#F86041"
            checkedColor="#F86041"
            onPress={() => setCheck4(!check4)}
          />
          <CheckBox
            title="ให้อาหารปลา"
            containerStyle={styles.checkBox}
            checked={check5}
            textStyle={styles.textcheckBox}
            uncheckedColor="#F86041"
            checkedColor="#F86041"
            onPress={() => setCheck5(!check5)}
          />
            {check6 === false ? 
          <CheckBox
            title="อื่นๆ(ในโน้ต)"
            containerStyle={styles.checkBox}
            checked={check6}
            textStyle={styles.textcheckBox}
            uncheckedColor="#F86041"
            checkedColor="#F86041"
            onPress={() => setCheck6(!check6)}
          />
          :
              <View style={styles.CheckBoxCard1}>
              <CheckBox
                containerStyle={styles.checkBox}
                checked={check6}
                textStyle={styles.textcheckBox}
                uncheckedColor="#F86041"
                checkedColor="#F86041"
                onPress={() => setCheck6(!check6)} />
                <Input
                  containerStyle={styles.input}
                  inputStyle={styles.inputText}
                  inputContainerStyle={styles.inputContainer}
                  onChangeText={text => onChangeText(text)}
                  value={value}
                  placeholder='พิมพ์สักที' /></View>
          
          }
        </View>
        <View style={styles.BoxFooter}>
          <Text style={styles.TextHeader}>Note</Text>
          <Button
            title="confirm"
            buttonStyle={styles.buttonStyle}
            containerStyle={styles.confirm}
            titleStyle={styles.Texttitle}
              onPress={() => MonksOfferingConfirm()}
          />
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: height * 0.05,
    backgroundColor: '#FFFFFF',
    padding: 8,
  },
  Box: {
    alignItems: 'flex-start',
    backgroundColor: '#F6F6F6',
    height: height * 0.55,
    width: width * 0.7,
    marginTop: height * 0.05,
    borderRadius: 10,
  },
  BoxHeader: {
    justifyContent: 'center',
    backgroundColor: '#FFA646',
    position: 'absolute',
    top: 0,
    height: height * 0.07,
    width: '100%',
    borderRadius: 10,
  },
  TextHeader: {
    marginLeft: width * 0.05,
    fontSize: 18,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  icon: {
    position: 'absolute',
    bottom: 0,
    right: width * 0.05,
  },
  CheckBoxCard: {
    marginTop: height * 0.08,
  },
  CheckBoxCard1: {
    flex: 1,
    flexDirection: "row",
  },
  checkBox: {
    backgroundColor: '#F6F6F6',
  },
  textcheckBox: {
    color: '#000000',
    fontWeight: '500',
    fontSize: 14,
    fontFamily: 'Kanit'
  },
  BoxFooter: {
    justifyContent: 'center',
    backgroundColor: '#FFA646',
    position: 'absolute',
    bottom: height * 0.02,
    height: height * 0.06,
    width: '90%',
    borderRadius: 10,
    marginLeft: '5%',
  },
  confirm: {
    position: 'absolute',
    right: width * 0.05,
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonStyle: {
    backgroundColor: '#F86041',
    borderRadius: 10,
    width: width * 0.2,
    height: height * 0.035,
  },
  Texttitle: {
    fontWeight: 'bold' ,
    fontSize: 16,
    marginVertical: -height * 0.01,
  },
  input: {
    width: width * 0.5,
    marginLeft: -width * 0.06,
    marginTop: height * 0.02,
  },
  inputContainer: {
    height: height * 0.03,
  },
  inputText: {
    color: '#000000',
    fontWeight: '500',
    fontSize: 14,
    fontFamily: 'Kanit'
  },
});
