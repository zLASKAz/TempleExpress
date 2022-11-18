import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import HeaderTemple from '../components/HeaderTemple';
import BoxItem from '../components/NotificationBoxItem';

const Notification = () => {
  const [notifData, setNotifData] = useState([]);

  // Example data. Please delete the hook below when finished.
  useEffect(() => {
    setNotifData([
      {
        title: 'จัดส่งสำเร็จ',
        detail: 'ขอบคุณที่ใช้บริการกับเรา',
      },
      {
        title: 'บริจาคเงินสำเร็จ',
        detail: 'ขอบคุณที่ใช้บริการกับเรา',
      },
      {
        title: 'วันหยุดนี้ มีส่วนลด',
        detail: 'หากซื้อสินค้าหรือบริจาคครบ 200 บาท รับส่วนลดค่าจัดส่ง 20 บาท',
      },
      {
        title: 'Temple Express',
        detail: '',
      },
      {
        title: 'Temple Express',
        detail: 'HELLO FROM NOTIFICATIONN  ABCDEFGHI',
      },
      {
        title: 'Temple Express',
        detail: 'HELLO FROM SUPER NOTIFICATIONNNNNNNNNNN',
      },
      {
        title: 'Temple Express',
        detail: 'HELLO FROM',
      },
      {
        title: 'วันหยุดนี้ มีส่วนลด',
        detail: 'หากซื้อสินค้าหรือบริจาคครบ 200 บาท รับส่วนลดค่าจัดส่ง 20 บาท',
      },
    ]);
  }, []);

  return (
    <NotificationLayout>
      <View style={styles.box}>
        <ScrollView>
          {notifData.map((item, index) => {
            return (
              <BoxItem
                key={index}
                title={item.title}
                detail={item.detail}></BoxItem>
            );
          })}
          <View style={{height: 40}}></View>
        </ScrollView>
      </View>
    </NotificationLayout>
  );
};

const NotificationLayout = ({children}) => (
  <View style={styles.entireView}>
    <HeaderTemple temple={'Notifications'} useIcon={false} />
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
  }
});

export default Notification;
