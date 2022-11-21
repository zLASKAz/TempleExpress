import {StyleSheet, View, ScrollView, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {Text, Card, Button, Icon, ButtonGroup, Input} from '@rneui/themed';
import {Formik, Field} from 'formik';
import * as yup from 'yup';
import CustomSignUp from './CustomSignUp';

const SignUp = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{width: '80%', alignSelf: 'center'}}>
        <Formik
          validationSchema={signUpValidationSchema}
          initialValues={{
            userName: '',
            email: '',
            phoneNumber: '',
            password: '',
          }}
          onSubmit={values => console.log(values)}>
          {({handleSubmit, isValid}) => (
            <Card containerStyle={styles.cardsetting}>
              <>
                <Text style={styles.placefont}>Username</Text>
                <Field component={CustomSignUp} name="username" />
                <Text style={styles.placefont}>PhoneNumber</Text>
                <Field
                  component={CustomSignUp}
                  name="phoneNumber"
                  keyboardType="numeric"
                />
                <Text style={styles.placefont}>Email</Text>
                <Field
                  component={CustomSignUp}
                  name="email"
                  keyboardType="email-address"
                />
                <Text style={styles.placefont}>Password</Text>
                <Field
                  component={CustomSignUp}
                  name="password"
                  secureTextEntry
                />

                <Button
                  title="Sign Up"
                  titleStyle={{fontSize: 18, color: '#ffff'}}
                  buttonStyle={{
                    backgroundColor: '#343779',
                    borderRadius: 3,
                  }}
                  containerStyle={{
                    width: 200,
                    alignSelf: 'center',
                  }}
                  disabled={!isValid}
                  onPress={() => {
                    navigation.navigate('validateSignIn');
                  }}
                />
                <Button
                  containerStyle={{
                    width: 200,
                    alignSelf: 'center',
                  }}
                  title="have an account? Sign in"
                  type="clear"
                  titleStyle={{color: '#737373', fontSize: 14}}
                  onPress={() => {
                    navigation.navigate('validateSignIn');
                  }}
                />
              </>
            </Card>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

const signUpValidationSchema = yup.object().shape({
  username: yup
    .string()
    .matches(/(\w.+\s).+/, 'Enter at least 8 names')
    .required('Userame is required'),
  phoneNumber: yup
    .string()
    .matches(/(01)(\d){8}\b/, 'Enter a valid phone number')
    .required('Phone number is required'),
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email is required'),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      'Password must have a special character',
    )
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    paddingTop: 140,
    padding: 8,
    backgroundColor: '#fff',
  },
  placefont: {
    fontSize: 14,
    paddingLeft: 11,
    paddingBottom: 5,
  },
  cardsetting: {
    marginVertical: 0,
    marginHorizontal: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#F6F6F6',
  },
});
