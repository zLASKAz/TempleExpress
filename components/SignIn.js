import { StyleSheet, View, ScrollView, Dimensions } from 'react-native';
import React, {useState} from 'react';
import {Text, Card, Button, Icon, ButtonGroup} from '@rneui/themed';
const { width , height } = Dimensions.get('window');

const SignIn = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <ScrollView>
        <View style={styles.signinButton}>
          <ButtonGroup containerStyle={styles.signupButton}
            buttonStyle={{ backgroundColor: 'rgba(255, 193, 7, 1)' }}
            style={styles.signinButton}
            buttons={['Sign In', 'Sign Up']}
            selectedIndex={selectedIndex}
            selectedButtonStyle={{ backgroundColor: '#1E1E1E'}}
            onPress={value => {
              setSelectedIndex(value);
              console.log(selectedIndex)
            }}
          />
          {selectedIndex == 0 &&
          <Card containerStyle={styles.signinButton}>
            <Card.Divider />
            <Text style={styles.fonts} h1>
              h1 Heading
            </Text>
            <Text style={styles.fonts} h2>
              h2 Heading
            </Text>
            <Text style={styles.fonts} h3>
              h3 Heading
            </Text>
            <Text style={styles.fonts} h4>
              h4 Heading
            </Text>
            <Text style={styles.fonts}>Normal Text</Text>
          </Card>
          }
        </View>
      </ScrollView>
    </>
  );
};

export default SignIn

const styles = StyleSheet.create({
  signinButton: {
    margin: 0,
    borderWidth: 0,
    borderRadius: 0,
  },
  signupButton: {
    marginVertical: 0,
    marginHorizontal: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'rgba(255, 193, 7, 1)',
    height:height*0.1,
    width:width*0.8,
  }
})