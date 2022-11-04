import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const userCard = () => {
    return (
        <View style={styles.cardContainer}>
            <Text style={styles.userStyle}>Username</Text>
            <Text style={styles.numberStyle}>090-XXX-XXXX</Text>
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
