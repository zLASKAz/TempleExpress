import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Collapsible from 'react-native-collapsible';

const FAQExpandableItem = ({faqData, index}) => {
  const [isCollap, setIsCollap] = useState(true);

  return (
    <View key={index}>
      <TouchableOpacity style={styles.articleView} onPress={() =>{isCollap? setIsCollap(false): setIsCollap(true)}}>
        <Text style={styles.articleText}>{faqData.article}</Text>
      </TouchableOpacity>
      <Collapsible collapsed={isCollap}>
        <View style={styles.answerView}>
          <Text style={styles.answerText}>{'\n' + faqData.answer + '\n'}</Text>
        </View>
      </Collapsible>
    </View>
  );
};

const styles = StyleSheet.create({
  articleView: {
    borderRadius: 20,
    marginBottom: 10,
    paddingHorizontal: 18,
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
  },
  articleText: {
    fontSize: 18,
    fontFamily: 'Kanit',
  },
  answerView: {
    borderRadius: 20,
    marginBottom: 10,
    paddingHorizontal: 18,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },
  answerText: {
    fontSize: 16,
    fontFamily: 'Kanit',
  },
});

export default FAQExpandableItem;
