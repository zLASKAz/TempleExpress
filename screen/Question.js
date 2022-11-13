import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import FAQArticle from '../components/FAQExpandableItem';

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
        answer: '',
      },
    ]);
  }, []);

  return (
    <FAQLayout label="คำถามที่พบบ่อย">
      <View style={styles.box}>
        <ScrollView>
          {FAQData.map((item, index) => {
            return <FAQArticle key={index} faqData={item}></FAQArticle>;
          })}
        </ScrollView>
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
  },
  box: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFA500',
    padding: 20,
  },
  label: {
    textAlign: 'left',
    marginBottom: 18,
    fontSize: 30,
    fontFamily: 'Kanit',
  },
});

export default Question;
