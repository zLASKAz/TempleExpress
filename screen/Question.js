import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import FAQArticle from '../components/FAQExpandableItem';
import HeaderTemple from '../components/HeaderTemple';

const Question = () => {
  const [FAQData, setFAQData] = useState([]);

  useEffect(() => {
    setFAQData([
      {
        id: 1,
        isExpanded: false,
        article: 'ทำไมฉันถึงไม่สามารถสั่งได้',
        answer: 'ลองเช็คดูว่ายืนยันคำสั่งแล้วหรือไม่',
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
        answer: 'ABC',
      },
    ]);
  }, []);

  return (
    <FAQLayout>
      <View style={styles.box}>
        <ScrollView>
          {FAQData.map((item, index) => {
            return <FAQArticle key={index} faqData={item}></FAQArticle>;
          })}
        <View style={{height: 40}}></View>
        </ScrollView>
      </View>
    </FAQLayout>
  );
};

const FAQLayout = ({children}) => (
  <View style={styles.entireView}>
    <HeaderTemple temple={'FAQ'} useIcon={false} />
    <View style={styles.container}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  entireView: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  box: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    paddingBottom: 20,
    paddingTop: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default Question;
