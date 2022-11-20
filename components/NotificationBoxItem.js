import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
import {Icon} from '@rneui/themed';

export const BoxItem = ({title, detail, index}) => {
  return (
    <>
      <View style={styles.container} key={index}>
        <View style={styles.iconView}>{iconType(title)}</View>
        <View style={styles.textView}>
          <View>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.detailText}>{detail}</Text>
          </View>
        </View>
      </View>
      <View style={styles.seperator}></View>
    </>
  );
};

const iconType = text => {
  if (text.indexOf('จัดส่ง') > -1) {
    return (
      <Icon
        name="truck-fast-outline"
        type="material-community"
        color="#FFFFFF"
        containerStyle={styles.icon}
        size={35}
      />
    );
  } else if (text.indexOf('บริจาคเงิน') > -1) {
    return (
      <Icon
        name="attach-money"
        type="material"
        color="#FFFFFF"
        containerStyle={styles.icon}
        size={35}
      />
    );
  } else {
    return (
      <Icon
        name="bullhorn-outline"
        type="material-community"
        color="#FFFFFF"
        containerStyle={styles.icon}
        size={35}
      />
    );
  }
};

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 15,
  },
  seperator: {
    borderBottomColor: '#A7A5A6',
    borderBottomWidth: 1,
    marginHorizontal: width / 8,
  },
  textView: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingEnd: 24,
  },
  titleText: {
    fontSize: 16,
    fontFamily: 'Kanit',
  },
  detailText: {
    fontSize: 12,
    fontFamily: 'Kanit',
  },
  iconView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingStart: 20,
  },
  icon: {
    alignSelf: 'center',
    backgroundColor: '#FFA646',
    borderRadius: 30,
    padding: 4,
  },
});

export default BoxItem;
