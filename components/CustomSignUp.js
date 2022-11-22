import {StyleSheet, View, ScrollView, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {Text, Card, Button, Icon, ButtonGroup, Input} from '@rneui/themed';

const CustomSignUp = props => {
  const {
    field: {name, onBlur, onChange, value},
    form: {errors, touched, setFieldTouched},
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];

  return (
    <>
      <Input
        style={[hasError && styles.errorInput]}
        value={value}
        onChangeText={text => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        inputContainerStyle={{
            backgroundColor: '#fff',
            borderBottomWidth: 0,
            height: 25,
          }}
        {...inputProps}
      />
      {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
    </>
  );
};
const styles = StyleSheet.create({
  errorText: {
    fontSize: 10, 
    color: 'red', 
    paddingLeft: 11, 
    marginTop: -20, 
    marginBottom: 10,
  },
  errorInput: {
    fontSize: 14, 
    color: 'red', 
  },
});

export default CustomSignUp;
