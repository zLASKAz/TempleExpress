import {StyleSheet, View, ScrollView, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {Text, Card, Button, Icon, ButtonGroup, Input} from '@rneui/themed';
import {color} from '@rneui/base';

const SignIn = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{width: '80%', alignSelf: 'center'}}>
        <View style={styles.siginButton}>
          <ButtonGroup
            containerStyle={styles.signupButton}
            buttons={['Sign in', 'Sign up']}
            selectedIndex={selectedIndex}
            selectedButtonStyle={styles.selectButton}
            selectedTextStyle={styles.textcolor}
            textStyle={styles.textcolor}
            onPress={value => {
              setSelectedIndex(value);
            }}
          />
          {selectedIndex == 0 ? (
            <Card containerStyle={styles.siginButton}>
              <Card.Divider />
              <Text style={styles.fonts}>Email</Text>
              <Input
                inputContainerStyle={{
                  backgroundColor: '#fff',
                  borderBottomWidth: 0,
                  height: 28,
                }}
                placeholder=""
              />

              <Text style={styles.fonts}>Password</Text>

              <Input
                placeholder=""
                secureTextEntry={true}
                inputContainerStyle={{
                  backgroundColor: '#fff',
                  borderBottomWidth: 0,
                  height: 28,
                }}
              />

              <Button
                title="Sign in"
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
            </Card>
          ) : (
            <Card containerStyle={styles.siginButton}>
              <Card.Divider />
              <Text style={styles.fonts}>Username</Text>
              <Input
                inputContainerStyle={{
                  backgroundColor: '#fff',
                  borderBottomWidth: 0,
                  height: 28,
                }}
                placeholder=""
              />
              <Text style={styles.fonts}>Phone Number</Text>
              <Input
                inputContainerStyle={{
                  backgroundColor: '#fff',
                  borderBottomWidth: 0,
                  height: 28,
                }}
                placeholder=""
              />
              <Text style={styles.fonts}>Email</Text>
              <Input
                inputContainerStyle={{
                  backgroundColor: '#fff',
                  borderBottomWidth: 0,
                  height: 28,
                }}
                placeholder=""
              />

              <Text style={styles.fonts}>Password</Text>

              <Input
                placeholder=""
                secureTextEntry={true}
                inputContainerStyle={{
                  backgroundColor: '#fff',
                  borderBottomWidth: 0,
                  height: 28,
                }}
              />

              <Button
                title="Sign up"
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
            </Card>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  signinButton: {
    margin: 0,
    backgroundColor: '#F6F6F6',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderColor: '#F6F6F6',
    
  },
  signupButton: {
    marginVertical: 0,
    marginHorizontal: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#F86041',
    width: '100%',
    marginBottom: -15,
    height: 55,
  },
  selectButton: {
    backgroundColor: '#F6F6F6',
  },
  textcolor: {
    color: '#000',
    fontSize: 18,
    paddingBottom: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    paddingTop: 65,
    backgroundColor: '#FFFFFF',
    padding: 8,
  },
});
