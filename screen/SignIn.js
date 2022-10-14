import {StyleSheet, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Text, Card, Button, Icon, ButtonGroup} from '@rneui/themed';

type CardsComponentsProps = {};
const [selectedIndex, setSelectedIndex] = useState(0);
const [selectedIndexes, setSelectedIndexes] = useState([0, 2]);
const Cards: React.FunctionComponent<CardsComponentsProps> = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.siginButton}>
          <ButtonGroup containerStyle={styles.signupButoon}
            buttonStyle={{ backgroundColor: 'rgba(255, 193, 7, 1)' }}
            style={styles.siginButton}
            buttons={['Sign In', 'Sign Up']}
            selectedIndex={selectedIndex}
            onPress={value => {
              setSelectedIndex(value);
            }}
          />
          <Card containerStyle={styles.siginButton}>
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
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  siginButton: {
    margin: 0,
    borderWidth: 0,
    borderRadius: 0,
  },
  signupButoon: {
    marginVertical: 0,
    marginHorizontal: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'rgba(255, 193, 7, 1)'
  }
});
export default Cards;
