import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
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

    // fetch('')
    //   .then(response => response.json())
    //   .then(json => setNotifData(json))
    //   .catch(errorr => console.error());
  }, []);

  return (
    <NotificationLayout label="Notifications">
      <View style={styles.box}>
        <Text style={styles.boxHeader}>Update Status</Text>
        <FlatList
          data={notifData}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <BoxItem title={item.title} detail={item.detail} />
          )}
        />
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
    backgroundColor: 'aliceblue',
  },
  box: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ECECEC',
    padding: 20,
  },
  boxHeader: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    textAlign: 'left',
    marginBottom: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Notification;
