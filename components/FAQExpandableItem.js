import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const FAQExpandableItem = ({faqData, onClickFunction, index}) => {
  const [layoutHeight, setlayoutHeight] = useState(0);

  useEffect(() => {
    if (faqData.isExpanded) {
      setlayoutHeight(null);
    } else {
      setlayoutHeight(0);
    }
  }, [faqData.isExpanded]);
  return (
    <View key={index}>
      <TouchableOpacity style={styles.articleView} onPress={onClickFunction}>
        <Text style={styles.articleText}>{faqData.article}</Text>
      </TouchableOpacity>
      <View style={[styles.answerView, {height: layoutHeight}]}>
        <Text style={styles.answerText}>{'\n' + faqData.answer + '\n'}</Text>
      </View>
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
