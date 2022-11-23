import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Collapsible from 'react-native-collapsible';

const FAQExpandableItem = ({faqData, index}) => {
  const [isCollap, setIsCollap] = useState(true);

  return (
    <View key={index}>
      <TouchableOpacity
        style={styles.articleView}
        onPress={() => {
          isCollap ? setIsCollap(false) : setIsCollap(true);
        }}>
        <View style={styles.container}>
          <View style={styles.iconView}>
            <Text style={styles.articleText}>{'\u25CF  '}</Text>
          </View>
          <View style={styles.textView}>
            <View>
              <Text style={styles.articleText}>{faqData.article}</Text>
            </View>
          </View>
        </View>
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
    marginHorizontal: 24,
    paddingHorizontal: 18,
    paddingVertical: 10,
    backgroundColor: '#FAFAFA',
  },
  articleText: {
    fontSize: 18,
    fontFamily: 'Kanit',
    color: '#FF780C',
  },
  answerView: {
    marginHorizontal: 24,
    borderRadius: 20,
    marginBottom: 10,
    paddingHorizontal: 18,
    overflow: 'hidden',
  },
  answerText: {
    fontSize: 16,
    fontFamily: 'Kanit',
  },
  textView: {
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingEnd: 24,
  },
  iconView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
  },
});

export default FAQExpandableItem;
