import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, Button, TextInput, Keyboard} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const initialState= {
    chat:false,
};

const boxCard = () => {
    const [state,setState] = useState(initialState);
    const [toggleButton,setToggleButton]=useState(false);

    return (
        
            <View style={styles.helpTopic}>
                <CheckBox
                    disabled={false}
                    value={state.chat}
                    onValueChange={(value) => setState({...state,chat:value})}
                />
                <Text style={styles.textStyle}>แชทกับเจ้าหน้าที่</Text>
            </View>

    );  
};

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
        fontWeight:'600',
        color:'#000',
    },

});

export default boxCard;
