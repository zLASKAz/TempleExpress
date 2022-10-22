import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, Button, TextInput, Keyboard} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Card from './boxCard';

const initialState= {
    mobile:false,
    app:false,
    chat:false,
    other:false,
};

const helpCard = () => {
    const [state,setState] = useState(initialState);
    const [toggleButton,setToggleButton]=useState(false);
    const [text, onChangeText] = React.useState();

    return (
        <View style={styles.helpContainer }>
            <View style={styles.helpTopic}>
                <CheckBox
                    disabled={false}
                    value={state.mobile}
                    onValueChange={(value) => setState({...state,mobile:value})}
                />
                <Text style={styles.textStyle}>ติดต่อกลับด้วยเบอร์โทรศัพท์มือถือ</Text>
            </View>

            <View style={styles.helpTopic}>
                <CheckBox
                    disabled={false}
                    value={state.app}
                    onValueChange={(value) => setState({...state,app:value})}
                />
                <Text style={styles.textStyle}>แอพพลิเคชันมีปัญหา</Text>
            </View>


            <View style={styles.textCheckBox}>
                <Card />
                <TextInput 
                    style={styles.textInputBox}
                    onChangeText={onChangeText}
                    placeholder="ใส่ข้อความเพื่อเริ่มการสนทนา"
                    
                />
            </View>


            <View style={styles.helpTopic}>
                <CheckBox
                    disabled={false}
                    value={state.other}
                    onValueChange={(value) => setState({...state,other:value})}
                />
                <Text style={styles.textStyle}>อื่นๆ</Text>
            </View>

        </View>
    );
};

const styles =  StyleSheet.create({
    helpContainer: { 
        alignItems: "center",
        flex:1,
        width: '100%', 
        backgroundColor: '#ffa646', 
        borderRadius: 12,
        padding:8,
        paddingTop:15,
        paddingBottom:15,
    },

    helpTopic: {
        margin:8,
        flexDirection: "row",
        backgroundColor:'#ffffff',
        width:'90%',
        borderRadius: 22,
        paddingLeft:10,
        alignItems:'center',
    },

    textCheckBox: {
        margin:8,
        flexDirection: "column",
        backgroundColor:'#ffffff',
        width:'90%',
        borderRadius: 22,
        paddingLeft:10,
        paddingBottom:10,
        alignItems:'center',
        height: 120,
    },

    textInputBox: {
        borderColor:'#000', 
        borderColor: 'gray', 
        borderWidth: 1,
        paddingHorizontal:10, 
        width:'90%', 
        height:70,
        marginRight:12,
        borderRadius: 12,
    },

    textStyle: {
        fontWeight:'600',
        color:'#000',
    }

});

export default helpCard;