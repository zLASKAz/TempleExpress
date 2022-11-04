import React, {useState, useEffect} from 'react';
import {Platform} from 'react-native';
import {UIManager} from 'react-native';
import {LayoutAnimation} from 'react-native';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import FAQArticle from '../components/FAQExpandableItem';

const Question = () => {
  const [FAQData, setFAQData] = useState([]);

  if (Platform.OS === 'android') {
    // May cause bug when rapidly press the same button for a number of times.
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  useEffect(() => {
    setFAQData([
      {
        id: 1,
        isExpanded: false,
        article: 'คำถาม 1',
        answer: 'คำตอบ 1',
      },
      {
        id: 2,
        isExpanded: false,
        article: 'คำถาม 2',
        answer: '',
      },
      {
        id: 3,
        isExpanded: false,
        article: 'คำถาม 3',
        answer: 'คำตอบ AHSJKDHDSJDSLKDSLCPKSLVJSKSJKKAS',
      },
      {
        id: 4,
        isExpanded: false,
        article: 'คำถาม 4',
        answer: '',
      },
      {
        id: 5,
        isExpanded: false,
        article: 'คำถาม 5',
        answer: '',
      },
    ]);

    // fetch('')
    //   .then(response => response.json())
    //   .then(json => setNotifData(json))
    //   .catch(errorr => console.error());
  }, []);
  const updateLayout = index => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...FAQData];
    array.map((value, placeIndex) =>
      placeIndex === index
        ? (array[placeIndex]['isExpanded'] = !array[placeIndex]['isExpanded'])
        : (array[placeIndex]['isExpanded'] = false),
    );
    setFAQData(array);
  };

  return (
    <FAQLayout label="คำถามที่พบบ่อย">
      <View style={styles.box}>
        <FlatList
          data={FAQData}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <FAQArticle
              faqData={item}
              onClickFunction={() => {
                updateLayout(item.id - 1);
              }}
            />
          )}
        />
      </View>
    </FAQLayout>
  );
};

const FAQLayout = ({label, children}) => (
  <View style={styles.entireView}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.container}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  entireView: {
    flex: 1,
    padding: 50,
  },
  container: {
    flex: 1,
    marginTop: 8,
  },
  box: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFA500',
    padding: 20,
    borderRadius: 5,
  },
  label: {
    textAlign: 'left',
    marginBottom: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Question;
