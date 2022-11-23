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
        article: 'สามารถยกเลิกคำสั่งซื้อได้มั้ย',
        answer: 'ทำได้ผ่านการติดต่อกับแอดมินของระบบ',
      },
      {
        id: 3,
        isExpanded: false,
        article: 'จะตรวจสอบได้ยังไงว่าของได้นำไปทำบุญแล้ว',
        answer: 'ทางไรเดอร์จะทำการส่งข้อความทางโทรศัพท์หรืออีเมลที่ผู้ใช้ได้ทำการผูกไว้กับระบบ',
      },
      {
        id: 4,
        isExpanded: false,
        article: 'หากลืมรหัสผ่านต้องทำอย่างไร',
        answer: 'ทำได้ผ่านการติดต่อกับแอดมินของระบบ',
      },
      {
        id: 5,
        isExpanded: false,
        article: 'สามารถสั่งของไปที่วัดพร้อมกันมากกว่า 1 คำสั่งได้มั้ย',
        answer: 'ได้ผ่านการเลือกวัดซ้ำที่หน้าแผนที่เพื่อเข้าสู่ระบบคำสั่งซื้อต่อ',
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
