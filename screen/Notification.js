import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import BoxItem from '../components/NotificationBoxItem';

const Notification = () => {
  const [notifData, setNotifData] = useState([]);
  useEffect(() => {
    setNotifData([
      {
        id: 1,
        title: 'Temple Express',
        detail: 'Your order is confirm',
      },
      {
        id: 2,
        title: 'Temple Express',
        detail: 'Your order has arrived to the temple',
      },
      {
        id: 3,
        title: 'Temple Express',
        detail: '',
      },
      {
        id: 4,
        title: 'Temple Express',
        detail: 'HELLO FROM NOTIFICATIONNNNNNNNNNN',
      },
      {
        id: 5,
        title: 'Temple Express',
        detail: 'HELLO FROM NOTIFICATIONN  ABCDEFGHI',
      },
      {
        id: 6,
        title: 'Temple Express',
        detail: 'HELLO FROM SUPER NOTIFICATIONNNNNNNNNNN',
      },
    ]);
  }, []);

  return (
    <NotificationLayout label="Notifications">
      <View style={styles.box}>
        <Text style={styles.boxHeader}>Update Status</Text>
        <ScrollView>
          {notifData.map((item, index) => {
            return (
              <BoxItem
                key={index}
                title={item.title}
                detail={item.detail}></BoxItem>
            );
          })}
        </ScrollView>
      </View>
    </NotificationLayout>
  );
};

const NotificationLayout = ({label, children}) => (
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
    backgroundColor: '#ECECEC',
    padding: 20,
    borderRadius: 5,
  },
  boxHeader: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Kanit',
    marginBottom: 20,
  },
  label: {
    textAlign: 'left',
    marginBottom: 10,
    fontSize: 30,
    fontFamily: 'Kanit',
  },
});

export default Notification;
