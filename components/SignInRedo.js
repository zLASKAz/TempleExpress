import {StyleSheet, View, ScrollView, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {Text, Card, Button, Icon, ButtonGroup, Input} from '@rneui/themed';
import { Formik } from 'formik';

const SignIn = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{width: '80%', alignSelf: 'center'}}>
        
        <Text style={{paddingLeft: 11, fontSize: 16, paddingBottom: 5}}>
          Email
        </Text>
        <Input
          inputContainerStyle={{
            backgroundColor: '#fff',
            borderBottomWidth: 0,
            height: 35,
          }}
          placeholder=""
          leftIcon={<Icon name="user-circle" type='font-awesome' color="black" />}
        />

        <Text style={{paddingLeft: 11, fontSize: 16, paddingBottom: 5}}>
          Password
        </Text>

        <Input
          placeholder=""
          secureTextEntry={true}
          inputContainerStyle={{
            backgroundColor: '#fff',
            borderBottomWidth: 0,
            height: 35,
          }}
          leftIcon={<Icon name="key" type='foundation' color="black" />}
        />

        <Button
          title="Sign In"
          titleStyle={{fontSize: 18}}
          buttonStyle={{
            backgroundColor: '#F86041',
            borderRadius: 3,
          }}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
          }}
        />
        <Button
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          title="Sign Up"
          type="clear"
          titleStyle={{color: '#F86041', fontSize: 16}}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    paddingTop: 200,
    padding: 8,
  },
});
