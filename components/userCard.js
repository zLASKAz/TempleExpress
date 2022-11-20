import React from 'react';
import { Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native';
import {Title, View, Text, StyleSheet, Image} from 'react-native';
import { Avatar } from 'react-native-elements';

const userCard = () => {
    return (
        <View style={{width:'100%', alignContent:'center'}}>
            <View style={{width:'100%', flexDirection:'row',paddingTop:30,paddingHorizontal:20}}>
                    <Image
                        style = {{width:100,height:100,borderRadius:100/2,backgroundColor:'#ffa646', resizeMode:'contain'}}
                        source={require('../assets/Profile_Pic.png')}
                        
                    />
                <View style={{width:'100%', flexDirection:'column', alignSelf:'center', padding:10}}>
                    <Text style={{fontFamily:'Kanit',fontSize:20, color:'#ff780c'}}>username</Text>
                    <TouchableOpacity>
                        <Text style={{fontFamily:'Kanit', fontSize:16}}>Edit Profile {'>'} </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles =  StyleSheet.create({
    cardContainer: { 
        width: '75%', 
        height: 160, 
        backgroundColor: '#ffa646', 
        borderRadius: 12,
        
    },

    userStyle: {
        fontSize: 20,
        fontWeight: '500',
        color: '#ffffff',
        marginHorizontal: 20,
        marginTop: 14,
    },

    numberStyle: {
        fontSize: 18,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center',
        marginTop: 80
    }

});

export default userCard;
